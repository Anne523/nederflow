# NederFlow Source Audio Pipeline

NederFlow v0.6.0 no longer has to depend on the phone browser's text-to-speech voice. The app first looks for real Dutch audio files in `audio-manifest.js`. Browser Dutch TTS is only a fallback.

## Current State

- `audio-manifest.js` is included by `index.html`.
- Material-level audio paths live under `window.NEDERFLOW_AUDIO.materials`.
- Shadowing line audio paths live under `window.NEDERFLOW_AUDIO.shadowing`.
- If no real audio file exists and no Dutch browser voice exists, the play button is disabled.
- The app will not use an English browser voice for Dutch text.

## Generate An Audio Pack

The included generator uses OpenAI's text-to-speech endpoint and writes MP3 files into `assets/audio/`.

```powershell
$env:OPENAI_API_KEY="your_api_key_here"
node generate-source-audio-openai.js
```

Optional settings:

```powershell
$env:OPENAI_TTS_MODEL="gpt-4o-mini-tts"
$env:OPENAI_TTS_VOICE="marin"
```

After generation, upload these files to GitHub Pages:

- `audio-manifest.js`
- the full `assets/audio/` folder
- `index.html`
- `app.js`
- `service-worker.js`
- `update.html`
- `version.txt`

Then open `update.html` on the phone once to clear the old cache.

## Manual Audio Option

You can also record or obtain Dutch MP3 files manually. Put them under `assets/audio/` and add their paths to `audio-manifest.js`.

Example:

```js
window.NEDERFLOW_AUDIO = {
  version: "manual-1",
  disclosure: "Source audio is recorded Dutch speech.",
  materials: {
    "transport-delay": {
      full: "assets/audio/materials/transport-delay.mp3"
    }
  },
  shadowing: {
    "transport-delay": {
      easy: {
        0: "assets/audio/shadowing/transport-delay/easy-0.mp3"
      }
    }
  }
};
```
