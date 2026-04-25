const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = __dirname;
const MODEL = process.env.OPENAI_TTS_MODEL || "gpt-4o-mini-tts";
const VOICE = process.env.OPENAI_TTS_VOICE || "marin";
const API_KEY = process.env.OPENAI_API_KEY;

if (!API_KEY) {
  console.error("Missing OPENAI_API_KEY. Set it before generating the audio pack.");
  process.exit(1);
}

const context = { window: {} };
vm.createContext(context);
vm.runInContext(fs.readFileSync(path.join(ROOT, "content.js"), "utf8"), context);

const content = context.window.NEDERFLOW_CONTENT || {};
const materials = content.materials || [];
const manifest = {
  version: new Date().toISOString().slice(0, 10),
  disclosure: "Source audio is AI-generated Dutch speech.",
  materials: {},
  shadowing: {}
};

async function main() {
  for (const material of materials) {
    const fullText = (material.transcript || []).join(" ");
    if (fullText) {
      const relPath = `assets/audio/materials/${material.id}.mp3`;
      await synthesize(fullText, relPath);
      manifest.materials[material.id] = { full: relPath };
    }

    const shadowing = material.shadowing || {};
    for (const [level, lines] of Object.entries(shadowing)) {
      for (const [index, line] of lines.entries()) {
        const relPath = `assets/audio/shadowing/${material.id}/${level}-${index}.mp3`;
        await synthesize(line, relPath);
        manifest.shadowing[material.id] ||= {};
        manifest.shadowing[material.id][level] ||= {};
        manifest.shadowing[material.id][level][index] = relPath;
      }
    }
  }

  const manifestBody = `window.NEDERFLOW_AUDIO = ${JSON.stringify(manifest, null, 2)};\n`;
  fs.writeFileSync(path.join(ROOT, "audio-manifest.js"), manifestBody, "utf8");
  console.log("Audio pack generated: assets/audio/ and audio-manifest.js");
}

async function synthesize(text, relPath) {
  const outputPath = path.join(ROOT, relPath);
  if (fs.existsSync(outputPath)) {
    console.log(`Skip existing ${relPath}`);
    return;
  }

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  console.log(`Generate ${relPath}`);

  const response = await fetch("https://api.openai.com/v1/audio/speech", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: MODEL,
      voice: VOICE,
      input: text,
      instructions: "Speak in clear Standard Dutch from the Netherlands, suitable for an A2-B1 learner.",
      response_format: "mp3"
    })
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`TTS failed for ${relPath}: ${response.status} ${body}`);
  }

  const buffer = Buffer.from(await response.arrayBuffer());
  fs.writeFileSync(outputPath, buffer);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
