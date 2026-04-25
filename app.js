const STORAGE_KEY = "nederflow.v01";

const APP_VERSION = "v0.5.1";
const levelOrder = ["A1", "A2", "A2+", "B1-", "B1", "B1+", "B2-", "B2", "B2+", "C1"];
const skillNames = ["listening", "reading", "grammar", "writing", "speaking"];

const lexicon = {
  maatregelen: {
    translation: "measures",
    usage: "Often used with nemen: maatregelen nemen.",
    examples: [
      "De gemeente neemt nieuwe maatregelen.",
      "Deze maatregelen moeten het verkeer veiliger maken."
    ],
    tags: ["policy", "news"]
  },
  maatregel: {
    translation: "measure",
    usage: "Singular of maatregelen.",
    examples: ["Een nieuwe maatregel geldt vanaf maandag."],
    tags: ["policy", "news"]
  },
  vertraging: {
    translation: "delay",
    usage: "Common with hebben: De trein heeft vertraging.",
    examples: [
      "Mijn bus heeft tien minuten vertraging.",
      "Door de vertraging kom ik later aan."
    ],
    tags: ["transport", "daily"]
  },
  afhankelijk: {
    translation: "dependent",
    usage: "Fixed phrase: afhankelijk zijn van.",
    examples: [
      "Het plan is afhankelijk van het weer.",
      "De prijs is afhankelijk van de gekozen optie."
    ],
    tags: ["grammar", "opinion"]
  },
  hoewel: {
    translation: "although",
    usage: "Starts a subordinate clause. The finite verb moves to the end.",
    examples: [
      "Hoewel het regent, ga ik toch fietsen.",
      "Hoewel de tekst moeilijk is, begrijp ik de hoofdzaak."
    ],
    tags: ["subclause", "contrast"]
  },
  besluiten: {
    translation: "to decide",
    usage: "Pattern: besluiten om iets te doen.",
    examples: [
      "Ze besluiten om de straat af te sluiten.",
      "Ik heb besloten om elke dag te oefenen."
    ],
    tags: ["decision", "te-infinitive"]
  },
  aangekondigd: {
    translation: "announced",
    usage: "Past participle of aankondigen.",
    examples: ["De minister heeft nieuwe plannen aangekondigd."],
    tags: ["news"]
  },
  verbeteren: {
    translation: "to improve",
    usage: "Often used for skills, services, and infrastructure.",
    examples: [
      "Ik wil mijn luistervaardigheid verbeteren.",
      "De stad wil het openbaar vervoer verbeteren."
    ],
    tags: ["progress"]
  },
  aanvraag: {
    translation: "application, request",
    usage: "Used for formal requests to institutions.",
    examples: [
      "Uw aanvraag is ontvangen.",
      "De gemeente behandelt de aanvraag binnen twee weken."
    ],
    tags: ["formal", "email"]
  },
  onderzoek: {
    translation: "research, study",
    usage: "Common academic word. Het onderzoek means the research.",
    examples: [
      "Het onderzoek gaat over taalonderwijs.",
      "Volgens het onderzoek lezen studenten meer online."
    ],
    tags: ["academic"]
  },
  afspraak: {
    translation: "appointment, agreement",
    usage: "Patterns: een afspraak maken, een afspraak verzetten.",
    examples: [
      "Ik wil graag een afspraak maken.",
      "Kunt u mijn afspraak verzetten?"
    ],
    tags: ["daily", "email"]
  },
  onderweg: {
    translation: "on the way",
    usage: "Useful in daily travel messages.",
    examples: [
      "Ik ben onderweg naar het station.",
      "Ze is al onderweg."
    ],
    tags: ["transport", "daily"]
  },
  daardoor: {
    translation: "because of that, as a result",
    usage: "Connects a cause to a result.",
    examples: [
      "Het regent hard. Daardoor zijn er files.",
      "De trein is laat. Daardoor mis ik mijn afspraak."
    ],
    tags: ["connector"]
  },
  aanmelden: {
    translation: "to sign up, register",
    usage: "Separable verb: Ik meld me aan.",
    examples: [
      "Studenten kunnen zich online aanmelden.",
      "Ik meld me vandaag aan voor de cursus."
    ],
    tags: ["separable", "daily"]
  },
  inwoners: {
    translation: "residents",
    usage: "Plural noun used often in local news.",
    examples: [
      "Inwoners kunnen hun mening geven.",
      "De stad vraagt inwoners om mee te denken."
    ],
    tags: ["news", "city"]
  }
};

const grammarCatalog = {
  omdat: {
    title: "Subordinate clauses with omdat",
    titleZh: "omdat 引导的从句",
    level: "A2-B1",
    pattern: "Main clause + omdat + subject + other words + finite verb.",
    explanation:
      "After omdat, the finite verb moves to the end of the clause. This is one of the most important word-order patterns for listening and writing.",
    explanationZh:
      "omdat 表示 because，引导从句。荷兰语从句里，变位动词通常要放到句尾。这是听力和写作里非常核心的语序规则。",
    examples: [
      "Ik kom later, omdat de trein vertraging heeft.",
      "Ze blijft thuis, omdat ze ziek is.",
      "Ik reageer morgen, omdat ik nu onderweg ben."
    ],
    examplesEn: [
      "I will come later because the train is delayed.",
      "She is staying home because she is ill.",
      "I will reply tomorrow because I am on the way now."
    ],
    exercise: {
      prompt: "Choose the correct ending: Ik ga niet mee, omdat ik moe ___.",
      options: ["ben", "is", "zijn"],
      answer: "ben"
    },
    output: "Write one sentence about today using omdat."
  },
  hoewel: {
    title: "Although: hoewel ... toch",
    titleZh: "hoewel ... toch 表示让步转折",
    level: "B1",
    pattern: "Hoewel + subordinate clause, main clause. Toch can add contrast.",
    explanation:
      "Hoewel introduces contrast and sends the finite verb to the end of its clause. Toch often appears in the main clause to mean still/anyway.",
    explanationZh:
      "hoewel 表示 although / 虽然，也会引导从句，所以从句里的变位动词放在句尾。toch 常出现在主句里，表示“还是、仍然、 nevertheless”。",
    examples: [
      "Hoewel het druk is, neem ik toch de trein.",
      "Hoewel de tekst moeilijk is, lees ik hem toch.",
      "Hoewel ik weinig tijd heb, oefen ik elke dag."
    ],
    examplesEn: [
      "Although it is busy, I am still taking the train.",
      "Although the text is difficult, I am still reading it.",
      "Although I have little time, I practice every day."
    ],
    exercise: {
      prompt: "Choose the natural sentence.",
      options: [
        "Hoewel het regent, ga ik toch fietsen.",
        "Hoewel regent het, ik ga toch fietsen.",
        "Hoewel het regent, ik toch ga fietsen."
      ],
      answer: "Hoewel het regent, ga ik toch fietsen."
    },
    output: "Write one contrast sentence using hoewel."
  },
  teInfinitive: {
    title: "om ... te + infinitive",
    titleZh: "om ... te + 动词原形",
    level: "B1",
    pattern: "om + object/time/place + te + infinitive",
    explanation:
      "Use om ... te to express a purpose or an action after verbs such as besluiten, proberen, hopen, and vergeten.",
    explanationZh:
      "om ... te + 动词原形常用来表达目的，或者跟在 besluiten、proberen、hopen、vergeten 等动词后面。可以理解为英文里的 to do something。",
    examples: [
      "Ik probeer elke dag Nederlands te luisteren.",
      "De gemeente besluit om de straat veiliger te maken.",
      "Ze hoopt om later te reageren."
    ],
    examplesEn: [
      "I try to listen to Dutch every day.",
      "The municipality decides to make the street safer.",
      "She hopes to reply later."
    ],
    exercise: {
      prompt: "Complete: Ik probeer meer Nederlands ___.",
      options: ["te spreken", "spreek", "gesproken"],
      answer: "te spreken"
    },
    output: "Write one sentence about a study goal using om ... te."
  },
  separable: {
    title: "Separable verbs",
    titleZh: "可分动词",
    level: "A2-B1",
    pattern: "Present: Ik meld me aan. Infinitive/end position: aanmelden.",
    explanation:
      "Many Dutch verbs split in main clauses. The prefix often moves to the end: aanmelden becomes Ik meld me aan.",
    explanationZh:
      "很多荷兰语动词是可分动词。在主句里，前缀常常被拆出来放到句尾，比如 aanmelden 变成 Ik meld me aan。",
    examples: [
      "Ik vul het formulier in.",
      "Studenten melden zich online aan.",
      "De les begint om negen uur."
    ],
    examplesEn: [
      "I fill in the form.",
      "Students register online.",
      "The lesson starts at nine o'clock."
    ],
    exercise: {
      prompt: "Choose the correct sentence.",
      options: [
        "Ik meld me morgen aan.",
        "Ik aanmelden me morgen.",
        "Ik meld aan me morgen."
      ],
      answer: "Ik meld me morgen aan."
    },
    output: "Write one sentence with aanmelden, invullen, or opstaan."
  },
  passive: {
    title: "Passive with er wordt",
    titleZh: "er wordt 被动结构",
    level: "B1-B2",
    pattern: "Er wordt + past participle.",
    explanation:
      "Use er wordt when the action is more important than the person doing it. It is common in news and formal updates.",
    explanationZh:
      "er wordt + 过去分词 是常见被动结构，用在新闻和正式表达里很多。当重点是“发生了什么”而不是“谁做的”时，经常用这个结构。",
    examples: [
      "Er wordt gewerkt aan de weg.",
      "Er wordt een nieuwe regeling ingevoerd.",
      "In de stad wordt veel gebouwd."
    ],
    examplesEn: [
      "Work is being done on the road.",
      "A new regulation is being introduced.",
      "A lot is being built in the city."
    ],
    exercise: {
      prompt: "Choose the passive sentence.",
      options: [
        "Er wordt vandaag veel besproken.",
        "Er bespreekt vandaag veel.",
        "Er heeft vandaag veel bespreken."
      ],
      answer: "Er wordt vandaag veel besproken."
    },
    output: "Write one short news-style sentence with er wordt."
  },
  erWords: {
    title: "Er, daar, hier compounds",
    titleZh: "er / daar / hier 与介词合成的词",
    level: "B1-B2",
    pattern: "daar + preposition: daarvan, daarmee, daarvoor, erop.",
    explanation:
      "Dutch often combines daar/hier/er with prepositions. These words refer back to something already mentioned.",
    explanationZh:
      "荷兰语经常把 daar、hier、er 和介词合在一起，比如 daarvoor、daarmee、erover。这类词通常指代前面已经提到的事情。",
    examples: [
      "Ik denk daar later over na.",
      "Daarvoor heb ik meer informatie nodig.",
      "We praten er morgen over."
    ],
    examplesEn: [
      "I will think about that later.",
      "I need more information for that.",
      "We will talk about it tomorrow."
    ],
    exercise: {
      prompt: "Complete: Ik heb meer tijd nodig ___.",
      options: ["daarvoor", "voor daar", "voor dat"],
      answer: "daarvoor"
    },
    output: "Write one sentence using daarvoor, daarmee, or erover."
  }
};

const materials = [
  {
    id: "transport-delay",
    title: "More reliable morning trains",
    level: "A2+-B1",
    theme: "Transport",
    tags: ["transport", "daily", "connector", "subclause"],
    focusTerms: ["vertraging", "onderweg", "daardoor"],
    grammarPoints: ["omdat", "hoewel"],
    grammarSpans: [
      {
        id: "omdat",
        text: "omdat sommige treinen vaak vertraging hebben",
        sentence: "De spoorwegen willen de dienstregeling verbeteren, omdat sommige treinen vaak vertraging hebben."
      },
      {
        id: "hoewel",
        text: "Hoewel het plan duur is",
        sentence: "Hoewel het plan duur is, verwachten de spoorwegen dat de reis rustiger wordt."
      }
    ],
    text:
      "Veel reizigers nemen in de ochtend de trein naar werk of studie. De spoorwegen willen de dienstregeling verbeteren, omdat sommige treinen vaak vertraging hebben. Daardoor komen reizigers soms te laat op hun afspraak. Vanaf volgende maand rijden er extra treinen tussen Utrecht en Amsterdam. Hoewel het plan duur is, verwachten de spoorwegen dat de reis rustiger wordt.",
    transcript: [
      "Veel reizigers nemen in de ochtend de trein naar werk of studie.",
      "De spoorwegen willen de dienstregeling verbeteren, omdat sommige treinen vaak vertraging hebben.",
      "Daardoor komen reizigers soms te laat op hun afspraak.",
      "Vanaf volgende maand rijden er extra treinen tussen Utrecht en Amsterdam.",
      "Hoewel het plan duur is, verwachten de spoorwegen dat de reis rustiger wordt."
    ],
    question: {
      prompt: "What is the main goal of the plan?",
      options: [
        "To make morning train travel more reliable",
        "To close the route between Utrecht and Amsterdam",
        "To make tickets cheaper"
      ],
      answer: "To make morning train travel more reliable"
    }
  },
  {
    id: "city-bikes",
    title: "City adds more bike parking",
    level: "B1",
    theme: "City life",
    tags: ["city", "policy", "news", "decision", "te-infinitive"],
    focusTerms: ["maatregelen", "besluiten", "inwoners"],
    grammarPoints: ["teInfinitive", "passive", "omdat"],
    grammarSpans: [
      {
        id: "passive",
        text: "Er wordt meer ruimte gemaakt",
        sentence: "Er wordt meer ruimte gemaakt voor fietsen, omdat inwoners vaak geen plek kunnen vinden."
      },
      {
        id: "omdat",
        text: "omdat inwoners vaak geen plek kunnen vinden",
        sentence: "Er wordt meer ruimte gemaakt voor fietsen, omdat inwoners vaak geen plek kunnen vinden."
      },
      {
        id: "teInfinitive",
        text: "om drie nieuwe fietsenstallingen te bouwen",
        sentence: "Het stadsbestuur besluit om drie nieuwe fietsenstallingen te bouwen."
      }
    ],
    text:
      "De gemeente heeft nieuwe maatregelen aangekondigd voor het centrum. Er wordt meer ruimte gemaakt voor fietsen, omdat inwoners vaak geen plek kunnen vinden. Het stadsbestuur besluit om drie nieuwe fietsenstallingen te bouwen. Inwoners kunnen online reageren op het plan. De gemeente zegt dat de aanpak afhankelijk is van het budget.",
    transcript: [
      "De gemeente heeft nieuwe maatregelen aangekondigd voor het centrum.",
      "Er wordt meer ruimte gemaakt voor fietsen, omdat inwoners vaak geen plek kunnen vinden.",
      "Het stadsbestuur besluit om drie nieuwe fietsenstallingen te bouwen.",
      "Inwoners kunnen online reageren op het plan.",
      "De gemeente zegt dat de aanpak afhankelijk is van het budget."
    ],
    question: {
      prompt: "What can residents do?",
      options: [
        "They can respond to the plan online",
        "They can park cars in the center for free",
        "They can vote on a new train route"
      ],
      answer: "They can respond to the plan online"
    }
  },
  {
    id: "school-language",
    title: "Schools test new language lessons",
    level: "B1-B2",
    theme: "Education",
    tags: ["academic", "education", "progress", "subclause", "te-infinitive"],
    focusTerms: ["onderzoek", "verbeteren", "aanmelden"],
    grammarPoints: ["hoewel", "teInfinitive", "separable"],
    grammarSpans: [
      {
        id: "separable",
        text: "zich aanmelden",
        sentence: "Scholen kunnen zich aanmelden voor een proefproject."
      },
      {
        id: "hoewel",
        text: "Hoewel sommige docenten weinig tijd hebben",
        sentence: "Hoewel sommige docenten weinig tijd hebben, willen ze toch nieuwe oefeningen proberen."
      },
      {
        id: "teInfinitive",
        text: "om spreken en luisteren stap voor stap te verbeteren",
        sentence: "Het doel is om spreken en luisteren stap voor stap te verbeteren."
      }
    ],
    text:
      "Een nieuw onderzoek kijkt naar Nederlandse taallessen op middelbare scholen. Docenten proberen de lessen praktischer te maken, zodat leerlingen meer durven te spreken. Scholen kunnen zich aanmelden voor een proefproject. Hoewel sommige docenten weinig tijd hebben, willen ze toch nieuwe oefeningen proberen. Het doel is om spreken en luisteren stap voor stap te verbeteren.",
    transcript: [
      "Een nieuw onderzoek kijkt naar Nederlandse taallessen op middelbare scholen.",
      "Docenten proberen de lessen praktischer te maken, zodat leerlingen meer durven te spreken.",
      "Scholen kunnen zich aanmelden voor een proefproject.",
      "Hoewel sommige docenten weinig tijd hebben, willen ze toch nieuwe oefeningen proberen.",
      "Het doel is om spreken en luisteren stap voor stap te verbeteren."
    ],
    question: {
      prompt: "What is the goal of the project?",
      options: [
        "To improve speaking and listening step by step",
        "To replace Dutch lessons with English lessons",
        "To make students read less"
      ],
      answer: "To improve speaking and listening step by step"
    }
  }
];

const writingPrompts = [
  {
    id: "appointment-delay",
    title: "Short message: running late",
    level: "A2-B1",
    prompt:
      "Write a short Dutch message to a teacher or colleague. Say that your train has a delay and that you will arrive about ten minutes later.",
    sample:
      "Beste ..., mijn trein heeft vertraging. Daardoor kom ik ongeveer tien minuten later aan. Sorry voor het ongemak."
  },
  {
    id: "formal-request",
    title: "Email: reschedule an appointment",
    level: "B1",
    prompt:
      "Write a polite Dutch email to reschedule an appointment. Explain briefly why and suggest another time.",
    sample:
      "Beste ..., helaas kan ik op het afgesproken moment niet komen. Zou het mogelijk zijn om de afspraak te verzetten naar volgende week? Alvast bedankt."
  },
  {
    id: "news-opinion",
    title: "Opinion: city transport",
    level: "B1-B2",
    prompt:
      "Write 4-5 Dutch sentences giving your opinion about improving public transport in a city.",
    sample:
      "Ik vind dat de stad meer moet investeren in betrouwbaar openbaar vervoer. Als treinen en bussen minder vertraging hebben, kunnen mensen makkelijker naar werk of studie reizen."
  }
];

const contentLibrary = window.NEDERFLOW_CONTENT || {};
hydrateContentLibrary(contentLibrary);

let shadowRecorder = null;
let shadowChunks = [];
let activeShadowId = null;
const shadowRecordings = new Map();
let speakingRecorder = null;
let speakingChunks = [];
let activeSpeakingId = null;
const speakingRecordings = new Map();
let deferredInstallPrompt = null;
let canInstallPwa = false;
let availableVoices = [];
let dutchVoice = null;

function defaultState() {
  return {
    profile: {
      placementComplete: false,
      levels: {
        listening: "A2",
        reading: "B1",
        grammar: "A2+",
        writing: "A2",
        speaking: "A2"
      },
      difficulty: {
        listening: 2,
        reading: 4,
        grammar: 3,
        writing: 2,
        speaking: 2
      },
      dailyTarget: 30,
      idealTarget: 60,
      stretchTarget: 90,
      lastStudyDate: todayKey(),
      minutesToday: 0,
      totalMinutes: 0,
      streak: 0
    },
    ui: {
      duration: 30,
      context: "public",
      activeWord: null,
      activeGrammar: "omdat",
      grammarSource: null,
      shadowingLevel: "auto",
      shadowingRate: "normal",
      writingFeedback: null,
      grammarCheck: null,
      grammarOutputFeedback: null,
      vocabReviewFeedback: null
    },
    vocab: [],
    grammarFocus: [],
    sessions: [],
    currentSession: null,
    writingHistory: []
  };
}

let state = loadState();

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState();
    return mergeDefaults(defaultState(), JSON.parse(raw));
  } catch (error) {
    console.warn("Could not load saved state", error);
    return defaultState();
  }
}

function mergeDefaults(base, saved) {
  if (!saved || typeof saved !== "object") return base;
  const output = Array.isArray(base) ? [...base] : { ...base };
  Object.keys(saved).forEach((key) => {
    if (saved[key] && typeof saved[key] === "object" && !Array.isArray(saved[key]) && base[key]) {
      output[key] = mergeDefaults(base[key], saved[key]);
    } else {
      output[key] = saved[key];
    }
  });
  return output;
}

function hydrateContentLibrary(content) {
  if (!content || !content.version) return;
  if (Array.isArray(content.materials)) {
    materials.splice(0, materials.length, ...content.materials);
  }
  if (content.lexicon) {
    Object.keys(lexicon).forEach((key) => delete lexicon[key]);
    Object.assign(lexicon, content.lexicon);
  }
  if (content.grammarCatalog) {
    Object.keys(grammarCatalog).forEach((key) => delete grammarCatalog[key]);
    Object.assign(grammarCatalog, content.grammarCatalog);
  }
  if (Array.isArray(content.writingPrompts)) {
    writingPrompts.splice(0, writingPrompts.length, ...content.writingPrompts);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function ensureToday() {
  const today = todayKey();
  if (state.profile.lastStudyDate !== today) {
    if (state.profile.minutesToday >= state.profile.dailyTarget) {
      state.profile.streak += 1;
    } else if (state.profile.minutesToday > 0) {
      state.profile.streak = Math.max(0, state.profile.streak);
    }
    state.profile.minutesToday = 0;
    state.profile.lastStudyDate = today;
    saveState();
  }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function routeName() {
  return (location.hash || "#dashboard").replace("#", "") || "dashboard";
}

function setRoute(route) {
  location.hash = route;
}

function levelPercent(level) {
  const index = Math.max(0, levelOrder.indexOf(level));
  return Math.round((index / (levelOrder.length - 1)) * 100);
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function adjustLevel(current, delta) {
  const index = Math.max(0, levelOrder.indexOf(current));
  return levelOrder[clamp(index + delta, 0, levelOrder.length - 1)];
}

function normalizeTerm(term) {
  return String(term)
    .toLowerCase()
    .replace(/^[^a-z]+|[^a-z]+$/gi, "");
}

function getMaterial(id) {
  return materials.find((material) => material.id === id) || materials[0];
}

function currentMaterial() {
  if (state.currentSession?.materialId) return getMaterial(state.currentSession.materialId);
  return selectMaterial();
}

function dueVocab() {
  const today = todayKey();
  return state.vocab
    .filter((item) => !item.nextReview || item.nextReview <= today)
    .sort((a, b) => (a.strength || 0) - (b.strength || 0));
}

function dueGrammar() {
  const today = todayKey();
  return state.grammarFocus
    .filter((item) => !item.nextReview || item.nextReview <= today)
    .sort((a, b) => (a.strength || 0) - (b.strength || 0));
}

function getRecyclingFocus(limit = 5) {
  const vocab = dueVocab().map((item) => item.term);
  const grammar = dueGrammar().map((item) => grammarCatalog[item.id]?.title || item.id);
  const combined = [...vocab, ...grammar];
  if (combined.length) return combined.slice(0, limit);
  return ["vertraging", "omdat word order", "maatregelen nemen"].slice(0, limit);
}

function selectMaterial(options = {}) {
  const context = options.context || state.ui.context || "public";
  const savedTerms = new Set(state.vocab.map((item) => item.term));
  const dueTerms = new Set(dueVocab().map((item) => item.term));
  const savedGrammar = new Set(state.grammarFocus.map((item) => item.id));
  const dueGrammarIds = new Set(dueGrammar().map((item) => item.id));
  const targetRank = targetMaterialRank(context);
  const lastMaterialId = state.sessions[0]?.materialId;

  const scored = materials.map((material) => {
    let score = 0;
    const focusTerms = material.focusTerms || [];
    const grammarPoints = material.grammarPoints || [];

    focusTerms.forEach((term) => {
      if (dueTerms.has(term)) score += 5;
      else if (savedTerms.has(term)) score += 3;
    });

    grammarPoints.forEach((id) => {
      if (dueGrammarIds.has(id)) score += 4;
      else if (savedGrammar.has(id)) score += 2;
    });

    if ((material.channels || []).includes(context)) score += 2;
    if (context === "public" && (material.channels || []).some((channel) => ["public", "listening", "reading"].includes(channel))) score += 1;
    if (context === "speaking" && (material.channels || []).includes("speaking")) score += 2;
    if (material.recyclingDensity === "high" && (dueTerms.size || dueGrammarIds.size)) score += 1;
    if (material.sourceType === "controlled-ai-training") score += 1;
    if (material.id === lastMaterialId && score < 4) score -= 2;

    score -= Math.abs(materialLevelRank(material) - targetRank) * 0.8;
    return { material, score };
  });

  scored.sort((a, b) => b.score - a.score);
  return scored[0]?.material || materials[0];
}

function targetMaterialRank(context) {
  const reading = levelOrder.indexOf(state.profile.levels.reading);
  const listening = levelOrder.indexOf(state.profile.levels.listening);
  const writing = levelOrder.indexOf(state.profile.levels.writing);
  if (context === "public") return Math.round((reading + listening * 1.5) / 2.5);
  if (context === "speaking") return Math.round((listening + writing) / 2);
  return Math.round((reading + listening + writing) / 3);
}

function materialLevelRank(material) {
  const levels = material.cefrBand || parseLevels(material.level);
  const ranks = levels.map((level) => levelOrder.indexOf(level)).filter((rank) => rank >= 0);
  if (!ranks.length) return 3;
  return ranks.reduce((sum, rank) => sum + rank, 0) / ranks.length;
}

function parseLevels(label = "") {
  return levelOrder.filter((level) => label.includes(level));
}

function addDays(days) {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date.toISOString().slice(0, 10);
}

function addVocab(term, sourceSentence = "") {
  const normalized = normalizeTerm(term);
  if (!normalized) return;
  const exists = state.vocab.find((item) => item.term === normalized);
  if (exists) {
    exists.seen += 1;
    exists.lastSeen = todayKey();
    exists.nextReview = addDays(Math.max(1, exists.strength || 1));
  } else {
    const entry = lexicon[normalized] || {
      translation: "Needs review",
      usage: "No preset note yet. Add this from a real sentence and review it later.",
      examples: sourceSentence ? [sourceSentence] : [],
      tags: []
    };
    state.vocab.unshift({
      term: normalized,
      translation: entry.translation,
      usage: entry.usage,
      examples: entry.examples,
      tags: entry.tags,
      sourceSentence,
      strength: 1,
      seen: 1,
      addedAt: todayKey(),
      lastSeen: todayKey(),
      nextReview: todayKey()
    });
  }
  saveState();
  showToast(`Added "${normalized}" to vocabulary recycling.`);
}

function markVocab(term, result) {
  const item = state.vocab.find((entry) => entry.term === term);
  if (!item) return null;
  if (result === "good") {
    item.strength = clamp((item.strength || 1) + 1, 1, 5);
    item.nextReview = addDays(item.strength * 2);
  } else {
    item.strength = clamp((item.strength || 1) - 1, 1, 5);
    item.nextReview = addDays(1);
  }
  item.lastSeen = todayKey();
  return item;
}

function addGrammarFocus(id) {
  if (!grammarCatalog[id]) return;
  const exists = state.grammarFocus.find((item) => item.id === id);
  if (exists) {
    exists.seen += 1;
    exists.lastSeen = todayKey();
    exists.nextReview = addDays(Math.max(1, exists.strength || 1));
  } else {
    state.grammarFocus.unshift({
      id,
      strength: 1,
      seen: 1,
      addedAt: todayKey(),
      lastSeen: todayKey(),
      nextReview: addDays(1)
    });
  }
  saveState();
  showToast(`${grammarCatalog[id].title} added to grammar recycling.`);
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2600);
}

function speakDutch(text, rate = 0.9) {
  if (!hasTextToSpeech()) {
    showToast("Text-to-speech is unavailable in this browser. Recording playback still works after you record.");
    return;
  }
  const voice = getDutchVoice();
  if (!voice) {
    showToast("No Dutch text-to-speech voice found. Enable/install a Dutch voice on this phone, or wait for real audio in a later version.");
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "nl-NL";
  utterance.voice = voice;
  utterance.rate = rate;
  utterance.pitch = 1;
  window.speechSynthesis.speak(utterance);
}

function stopSourceAudio() {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
    showToast("Source playback stopped.");
  }
}

function hasTextToSpeech() {
  return "speechSynthesis" in window && "SpeechSynthesisUtterance" in window && Boolean(getDutchVoice());
}

function loadVoices() {
  if (!("speechSynthesis" in window)) return;
  availableVoices = window.speechSynthesis.getVoices() || [];
  dutchVoice = availableVoices.find((voice) => /^nl(-|_)?/i.test(voice.lang)) ||
    availableVoices.find((voice) => /dutch|nederlands|netherlands|belg/i.test(`${voice.name} ${voice.lang}`));
}

function getDutchVoice() {
  if (!dutchVoice) loadVoices();
  return dutchVoice;
}

function shadowingRateValue() {
  const rates = {
    slow: 0.7,
    normal: 0.88,
    natural: 1
  };
  return rates[state.ui.shadowingRate] || rates.normal;
}

async function startShadowRecording(id) {
  if (!hasDirectMicrophoneRecording()) {
    showToast("Direct microphone recording needs HTTPS on this phone. Use Record/upload instead.");
    return;
  }

  if (shadowRecorder && shadowRecorder.state === "recording") {
    shadowRecorder.stop();
  }

  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    shadowChunks = [];
    activeShadowId = id;
    shadowRecorder = new MediaRecorder(stream);
    shadowRecorder.ondataavailable = (event) => {
      if (event.data.size) shadowChunks.push(event.data);
    };
    shadowRecorder.onstop = () => {
      const blob = new Blob(shadowChunks, { type: shadowRecorder.mimeType || "audio/webm" });
      const previous = shadowRecordings.get(activeShadowId);
      if (previous?.url) URL.revokeObjectURL(previous.url);
      shadowRecordings.set(activeShadowId, {
        url: URL.createObjectURL(blob),
        createdAt: new Date().toISOString()
      });
      stream.getTracks().forEach((track) => track.stop());
      activeShadowId = null;
      render();
      showToast("Recording saved for playback.");
    };
    shadowRecorder.start();
    render();
    showToast("Recording started.");
  } catch (error) {
    console.warn("Recording failed", error);
    showToast("Microphone permission was blocked or unavailable.");
  }
}

function stopShadowRecording() {
  if (shadowRecorder && shadowRecorder.state === "recording") {
    shadowRecorder.stop();
    return;
  }
  showToast("No active recording.");
}

async function startSpeakingRecording(id) {
  if (!hasDirectMicrophoneRecording()) {
    showToast("Direct microphone recording needs HTTPS on this phone. Use Record/upload instead.");
    return;
  }

  if (speakingRecorder && speakingRecorder.state === "recording") {
    speakingRecorder.stop();
  }

  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    speakingChunks = [];
    activeSpeakingId = id;
    speakingRecorder = new MediaRecorder(stream);
    speakingRecorder.ondataavailable = (event) => {
      if (event.data.size) speakingChunks.push(event.data);
    };
    speakingRecorder.onstop = () => {
      const blob = new Blob(speakingChunks, { type: speakingRecorder.mimeType || "audio/webm" });
      const previous = speakingRecordings.get(activeSpeakingId);
      if (previous?.url) URL.revokeObjectURL(previous.url);
      speakingRecordings.set(activeSpeakingId, {
        url: URL.createObjectURL(blob),
        createdAt: new Date().toISOString()
      });
      stream.getTracks().forEach((track) => track.stop());
      activeSpeakingId = null;
      render();
      showToast("Speaking recording saved.");
    };
    speakingRecorder.start();
    render();
    showToast("Recording started.");
  } catch (error) {
    console.warn("Speaking recording failed", error);
    showToast("Microphone permission was blocked or unavailable.");
  }
}

function stopSpeakingRecording() {
  if (speakingRecorder && speakingRecorder.state === "recording") {
    speakingRecorder.stop();
    return;
  }
  showToast("No active recording.");
}

function hasDirectMicrophoneRecording() {
  return Boolean(window.isSecureContext && navigator.mediaDevices?.getUserMedia && window.MediaRecorder);
}

function saveUploadedRecording(kind, id, file) {
  if (!file) return;
  const map = kind === "speaking" ? speakingRecordings : shadowRecordings;
  const previous = map.get(id);
  if (previous?.url) URL.revokeObjectURL(previous.url);
  map.set(id, {
    url: URL.createObjectURL(file),
    createdAt: new Date().toISOString(),
    fallback: true
  });
  showToast("Audio loaded for playback.");
  render();
}

async function installPwa() {
  if (!deferredInstallPrompt) {
    showToast("Use your browser menu to add NederFlow to your home screen.");
    return;
  }
  deferredInstallPrompt.prompt();
  await deferredInstallPrompt.userChoice;
  deferredInstallPrompt = null;
  canInstallPwa = false;
  render();
}

function taskMinutes(duration, type) {
  const table = {
    5: { review: 5, listening: 5, reading: 5, grammar: 5, writing: 5, speaking: 5, shadowing: 5 },
    10: { listening: 6, reading: 6, review: 4, grammar: 4, writing: 4, speaking: 6, shadowing: 4 },
    15: { listening: 7, reading: 5, review: 3, grammar: 4, writing: 5, speaking: 7, shadowing: 4 },
    30: { listening: 12, reading: 8, review: 5, grammar: 5, writing: 8, speaking: 10, shadowing: 7 },
    45: { listening: 15, reading: 10, review: 8, grammar: 7, writing: 10, speaking: 12, shadowing: 8 },
    60: { listening: 20, reading: 14, review: 10, grammar: 8, writing: 12, speaking: 14, shadowing: 10 }
  };
  const key = [5, 10, 15, 30, 45, 60].reduce((best, item) =>
    Math.abs(item - duration) < Math.abs(best - duration) ? item : best
  );
  return table[key][type] || 5;
}

function buildSession(duration, context) {
  const material = selectMaterial({ context });
  const tasks = [];
  const add = (type, title, minutes) => {
    tasks.push({
      id: `${Date.now()}-${type}-${tasks.length}`,
      type,
      title,
      minutes,
      materialId: material.id,
      completed: false
    });
  };

  if (duration <= 5) {
    add("review", "Recycling sprint", 5);
  } else if (context === "public") {
    add("listening", "Commuter listening", taskMinutes(duration, "listening"));
    if (duration >= 15) add("reading", "News reading", taskMinutes(duration, "reading"));
    add("review", "Vocabulary recycling", taskMinutes(duration, "review"));
    if (duration >= 30) add("grammar", "Grammar-on-demand", taskMinutes(duration, "grammar"));
  } else if (context === "quiet") {
    add("listening", "Quiet listening", taskMinutes(duration, "listening"));
    add("reading", "News reading", taskMinutes(duration, "reading"));
    add("grammar", "Grammar-on-demand", taskMinutes(duration, "grammar"));
    if (duration >= 20) add("writing", "Short writing", taskMinutes(duration, "writing"));
    add("review", "Recycling review", taskMinutes(duration, "review"));
  } else {
    add("shadowing", "Shadowing practice", taskMinutes(duration, "shadowing"));
    add("speaking", "Speaking prompt", taskMinutes(duration, "speaking"));
    if (duration >= 20) add("listening", "Listening warm-up", taskMinutes(duration, "listening"));
    if (duration >= 30) add("writing", "Output transfer", taskMinutes(duration, "writing"));
    add("review", "Recycling review", taskMinutes(duration, "review"));
  }

  const total = tasks.reduce((sum, task) => sum + task.minutes, 0);
  if (total > duration) {
    const overflow = total - duration;
    tasks[tasks.length - 1].minutes = Math.max(3, tasks[tasks.length - 1].minutes - overflow);
  }

  return {
    id: `session-${Date.now()}`,
    date: todayKey(),
    duration,
    context,
    materialId: material.id,
    focus: getRecyclingFocus(5),
    tasks
  };
}

function completeTask(id) {
  const session = state.currentSession;
  if (!session) return;
  const task = session.tasks.find((item) => item.id === id);
  if (!task || task.completed) return;
  task.completed = true;
  state.profile.minutesToday += task.minutes;
  state.profile.totalMinutes += task.minutes;
  materials
    .find((material) => material.id === task.materialId)
    ?.focusTerms.forEach((term) => {
      const existing = state.vocab.find((item) => item.term === term);
      if (existing) {
        existing.seen += 1;
        existing.lastSeen = todayKey();
      }
    });

  if (session.tasks.every((item) => item.completed)) {
    state.sessions.unshift({
      id: session.id,
      date: session.date,
      duration: session.duration,
      context: session.context,
      materialId: session.materialId,
      completedAt: new Date().toISOString()
    });
    state.sessions = state.sessions.slice(0, 20);
  }
  saveState();
  showToast(`${task.minutes} minutes added to today's progress.`);
  render();
}

function handleDifficulty(skill, value) {
  const delta = value === "easy" ? 1 : value === "hard" ? -1 : 0;
  state.profile.difficulty[skill] = clamp((state.profile.difficulty[skill] || 2) + delta, 1, 9);
  if (value === "easy") state.profile.levels[skill] = adjustLevel(state.profile.levels[skill], 1);
  if (value === "hard") state.profile.levels[skill] = adjustLevel(state.profile.levels[skill], -1);
  saveState();
  showToast(value === "right" ? "Difficulty kept stable." : `Adjusted ${skill} difficulty.`);
  render();
}

function render() {
  ensureToday();
  const route = routeName();
  document.querySelectorAll("[data-nav]").forEach((item) => {
    item.classList.toggle("active", item.dataset.nav === route);
  });

  const app = document.getElementById("app");
  const drawer = state.ui.activeWord ? renderWordDrawer(state.ui.activeWord) : "";
  const pages = {
    dashboard: renderDashboard,
    placement: renderPlacement,
    setup: renderSetup,
    session: renderSession,
    reading: renderReading,
    vocabulary: renderVocabulary,
    grammar: renderGrammar,
    writing: renderWriting,
    progress: renderProgress
  };
  app.innerHTML = (pages[route] || renderDashboard)() + drawer;
}

function renderDashboard() {
  const profile = state.profile;
  const targetPercent = clamp(Math.round((profile.minutesToday / profile.dailyTarget) * 100), 0, 100);
  const idealPercent = clamp(Math.round((profile.minutesToday / profile.idealTarget) * 100), 0, 100);
  const focus = getRecyclingFocus(5);
  return `
    <section class="page-head">
      <div>
        <p class="eyebrow">Today</p>
        <h1>Your Dutch training flow</h1>
        <p class="lead">Build listening strength first, recycle old words and grammar, and move output practice into moments when speaking is actually possible.</p>
        <p class="hint">App version: ${APP_VERSION}</p>
      </div>
      <div class="actions">
        <button class="btn secondary" data-action="start-placement">${profile.placementComplete ? "Retake placement" : "Start placement"}</button>
        ${canInstallPwa ? `<button class="btn secondary" data-action="install-app">Install app</button>` : ""}
        <button class="btn primary" data-action="go-setup">Start session</button>
      </div>
    </section>

    <section class="grid four">
      <article class="card stat">
        <div><span>Today</span><strong>${profile.minutesToday} min</strong></div>
        <span class="pill ${profile.minutesToday >= profile.dailyTarget ? "good" : "warn"}">${profile.dailyTarget} min base</span>
      </article>
      <article class="card stat">
        <div><span>Ideal target</span><strong>${profile.idealTarget} min</strong></div>
        <span class="pill">${idealPercent}%</span>
      </article>
      <article class="card stat">
        <div><span>Vocabulary</span><strong>${state.vocab.length}</strong></div>
        <span class="pill hot">${dueVocab().length} to review</span>
      </article>
      <article class="card stat">
        <div><span>Grammar</span><strong>${state.grammarFocus.length}</strong></div>
        <span class="pill">${dueGrammar().length} to review</span>
      </article>
    </section>

    <section class="grid two" style="margin-top:16px">
      <article class="panel">
        <h2>Daily progress</h2>
        <div class="progress-bar" aria-label="Daily progress"><span style="width:${targetPercent}%"></span></div>
        <p class="hint" style="margin-top:10px">Base target: ${profile.dailyTarget} minutes. Stretch target: ${profile.stretchTarget} minutes.</p>
        <div class="mini-map" aria-hidden="true">
          ${[5, 10, 15, 30, 60].map((minute) => `<span class="${profile.minutesToday >= minute ? "active" : ""}">${minute}</span>`).join("")}
        </div>
      </article>
      <article class="panel">
        <h2>Current profile</h2>
        ${renderSkillList()}
      </article>
    </section>

    <section class="grid two" style="margin-top:16px">
      <article class="panel">
        <h2>Recycling focus</h2>
        <div class="pill-row">
          ${focus.map((item) => `<span class="pill good">${escapeHtml(item)}</span>`).join("")}
        </div>
        <p class="hint" style="margin-top:12px">These items are favored when the next session picks reading, listening, grammar, and output tasks.</p>
      </article>
      <article class="panel">
        <h2>Recommended next material</h2>
        ${renderMaterialSummary(selectMaterial())}
      </article>
    </section>
  `;
}

function renderSkillList() {
  return `
    <div class="skill-list">
      ${skillNames.map((skill) => {
        const level = state.profile.levels[skill];
        return `
          <div class="skill-row">
            <strong>${capitalize(skill)}</strong>
            <div class="progress-bar"><span style="width:${levelPercent(level)}%"></span></div>
            <span>${level}</span>
          </div>
        `;
      }).join("")}
    </div>
  `;
}

function renderMaterialSummary(material) {
  return `
    <div>
      <div class="pill-row">
        <span class="pill">${material.level}</span>
        <span class="pill">${material.theme}</span>
        ${material.sourceType ? `<span class="pill">${sourceTypeLabel(material.sourceType)}</span>` : ""}
        ${material.recyclingDensity ? `<span class="pill good">${material.recyclingDensity} recycling</span>` : ""}
      </div>
      <h3 style="margin-top:10px">${escapeHtml(material.title)}</h3>
      <p class="hint">${material.text.slice(0, 150)}...</p>
      <div class="pill-row">
        ${material.focusTerms.map((term) => `<button class="pill" data-action="open-word" data-term="${term}">${term}</button>`).join("")}
      </div>
    </div>
  `;
}

function sourceTypeLabel(type) {
  const labels = {
    "controlled-ai-training": "controlled training text",
    "curated-real-input": "curated real input",
    "user-imported": "user imported"
  };
  return labels[type] || type;
}

function renderPlacement() {
  return `
    <section class="page-head">
      <div>
        <p class="eyebrow">Placement</p>
        <h1>Find your starting levels</h1>
        <p class="lead">This quick check separates listening, reading, grammar, writing, and speaking so the training plan can start unevenly on purpose.</p>
      </div>
    </section>

    <form id="placementForm" class="panel">
      <div class="grid two">
        <div class="form-field">
          <div class="question-title">1. Listen and choose the meaning.</div>
          <button type="button" class="btn secondary" data-action="speak" data-text="De trein heeft tien minuten vertraging.">Play Dutch sentence</button>
          <div class="radio-stack">
            <label><input type="radio" name="listen" value="correct" required> The train has a ten-minute delay.</label>
            <label><input type="radio" name="listen" value="wrong"> The train leaves in ten minutes.</label>
            <label><input type="radio" name="listen" value="wrong"> The station closes in ten minutes.</label>
          </div>
        </div>

        <div class="form-field">
          <div class="question-title">2. Reading</div>
          <p class="hint">Hoewel het regent, ga ik toch naar de universiteit.</p>
          <div class="radio-stack">
            <label><input type="radio" name="reading" value="correct" required> Although it is raining, I am still going to the university.</label>
            <label><input type="radio" name="reading" value="wrong"> Because it is raining, I am not going to the university.</label>
            <label><input type="radio" name="reading" value="wrong"> It will rain at the university tomorrow.</label>
          </div>
        </div>

        <div class="form-field">
          <div class="question-title">3. Grammar</div>
          <p class="hint">Choose the correct word order.</p>
          <div class="radio-stack">
            <label><input type="radio" name="grammar" value="wrong" required> Ik kom later, omdat ik heb vertraging.</label>
            <label><input type="radio" name="grammar" value="correct"> Ik kom later, omdat ik vertraging heb.</label>
            <label><input type="radio" name="grammar" value="wrong"> Ik kom later, omdat heb ik vertraging.</label>
          </div>
        </div>

        <div class="form-field">
          <div class="question-title">4. Vocabulary</div>
          <p class="hint">What does aanvraag usually mean?</p>
          <div class="radio-stack">
            <label><input type="radio" name="vocab" value="wrong" required> Appointment</label>
            <label><input type="radio" name="vocab" value="correct"> Application or request</label>
            <label><input type="radio" name="vocab" value="wrong"> Delay</label>
          </div>
        </div>
      </div>

      <div class="form-field">
        <label for="placementWriting">5. Short writing sample</label>
        <textarea id="placementWriting" name="writing" placeholder="Write 2-3 Dutch sentences introducing your current Dutch learning goal." required></textarea>
      </div>

      <div class="form-field">
        <div class="question-title">6. Speaking confidence right now</div>
        <div class="radio-stack">
          <label><input type="radio" name="speaking" value="A2" required> I can handle simple daily situations slowly.</label>
          <label><input type="radio" name="speaking" value="A2+"> I can answer basic questions but need time.</label>
          <label><input type="radio" name="speaking" value="B1-"> I can describe plans and opinions with mistakes.</label>
        </div>
      </div>

      <div class="actions">
        <button class="btn primary" type="submit">Save placement profile</button>
        <button class="btn" type="button" data-action="go-dashboard">Cancel</button>
      </div>
    </form>
  `;
}

function renderSetup() {
  const duration = state.ui.duration;
  const context = state.ui.context;
  const preview = buildSession(duration, context);
  return `
    <section class="page-head">
      <div>
        <p class="eyebrow">Session builder</p>
        <h1>Tell NederFlow what this moment allows</h1>
        <p class="lead">The app builds one learning block at a time, then connects multiple blocks into the same daily memory loop.</p>
      </div>
    </section>

    <section class="grid two">
      <article class="panel">
        <h2>Available time</h2>
        <div class="choice-grid">
          ${[5, 10, 15, 30, 45, 60].map((item) => `
            <button class="choice ${duration === item ? "selected" : ""}" data-action="select-duration" data-duration="${item}">
              <strong>${item} minutes</strong>
              <span>${item <= 10 ? "Tiny sprint" : item >= 45 ? "Long commute" : "Focused block"}</span>
            </button>
          `).join("")}
        </div>
      </article>

      <article class="panel">
        <h2>Current context</h2>
        <div class="choice-grid">
          ${[
            ["public", "Public transport", "Listening, reading, review. No speaking."],
            ["quiet", "Quiet mode", "No speaking, but typing is fine."],
            ["speaking", "Speaking allowed", "Shadowing and AI-style dialogue."]
          ].map(([id, title, desc]) => `
            <button class="choice ${context === id ? "selected" : ""}" data-action="select-context" data-context="${id}">
              <strong>${title}</strong>
              <span>${desc}</span>
            </button>
          `).join("")}
        </div>
      </article>
    </section>

    <section class="panel" style="margin-top:16px">
      <div class="page-head" style="margin-bottom:10px">
        <div>
          <h2>Generated plan</h2>
          <p class="hint">Material: ${escapeHtml(getMaterial(preview.materialId).title)}. Recycling: ${preview.focus.map(escapeHtml).join(", ")}.</p>
        </div>
        <button class="btn primary" data-action="start-session">Start this session</button>
      </div>
      <div class="grid">
        ${preview.tasks.map((task) => renderTaskPreview(task)).join("")}
      </div>
    </section>
  `;
}

function renderTaskPreview(task) {
  return `
    <div class="task">
      <div>
        <div class="task-title">
          <h3>${escapeHtml(task.title)}</h3>
          <span class="pill">${task.minutes} min</span>
          <span class="pill">${task.type}</span>
        </div>
        <p class="hint">${taskDescription(task.type)}</p>
      </div>
    </div>
  `;
}

function taskDescription(type) {
  const map = {
    listening: "Dutch audio first, transcript second, then a comprehension check.",
    reading: "Read a level-matched news text and click useful words into your sentence bank.",
    review: "Recycle due vocabulary and grammar from previous sessions.",
    grammar: "Open one grammar point from the current material, learn it, and produce with it.",
    writing: "Write a practical short text and compare it with natural Dutch samples.",
    speaking: "Answer a material-specific prompt through typing or recording.",
    shadowing: "Listen and repeat lines when speaking is allowed."
  };
  return map[type] || "Focused practice.";
}

function renderSession() {
  const session = state.currentSession;
  if (!session) {
    return `
      <section class="empty">
        <h2>No active session</h2>
        <p>Build a session from your available time and context.</p>
        <button class="btn primary" data-action="go-setup">Build session</button>
      </section>
    `;
  }
  const material = getMaterial(session.materialId);
  const done = session.tasks.filter((task) => task.completed).length;
  const total = session.tasks.length;
  return `
    <section class="page-head">
      <div>
        <p class="eyebrow">${session.context.replace("-", " ")} session</p>
        <h1>${session.duration} minutes around ${escapeHtml(material.theme.toLowerCase())}</h1>
        <p class="lead">Current material: ${escapeHtml(material.title)}. Tasks completed: ${done}/${total}.</p>
      </div>
      <div class="actions">
        <button class="btn secondary" data-action="go-setup">New session</button>
      </div>
    </section>

    <section class="panel">
      <h2>Recycling focus</h2>
      <div class="pill-row">
        ${session.focus.map((item) => `<span class="pill good">${escapeHtml(item)}</span>`).join("")}
      </div>
    </section>

    <section class="grid" style="margin-top:16px">
      ${session.tasks.map((task) => renderTask(task, material)).join("")}
    </section>
  `;
}

function renderTask(task, material) {
  return `
    <article class="task ${task.completed ? "done" : ""}">
      <div>
        <div class="task-title">
          <h3>${escapeHtml(task.title)}</h3>
          <span class="pill">${task.minutes} min</span>
          <span class="pill">${task.type}</span>
          ${task.completed ? `<span class="pill good">done</span>` : ""}
        </div>
        <p class="hint">${taskDescription(task.type)}</p>
      </div>
      <div class="actions">
        <button class="btn secondary" data-action="difficulty" data-skill="${taskSkill(task.type)}" data-value="hard">Too hard</button>
        <button class="btn secondary" data-action="difficulty" data-skill="${taskSkill(task.type)}" data-value="right">Just right</button>
        <button class="btn secondary" data-action="difficulty" data-skill="${taskSkill(task.type)}" data-value="easy">Too easy</button>
        <button class="btn primary" data-action="complete-task" data-task-id="${task.id}" ${task.completed ? "disabled" : ""}>Complete</button>
      </div>
      <div class="task-body">
        ${renderTaskBody(task, material)}
      </div>
    </article>
  `;
}

function taskSkill(type) {
  if (type === "review") return "grammar";
  if (type === "shadowing") return "speaking";
  return skillNames.includes(type) ? type : "listening";
}

function renderTaskBody(task, material) {
  if (task.type === "listening") return renderListeningBlock(material);
  if (task.type === "reading") return renderReadingBlock(material);
  if (task.type === "review") return renderReviewBlock();
  if (task.type === "grammar") return renderGrammarDetail(material.grammarPoints[0]);
  if (task.type === "writing") return renderWritingBlock();
  if (task.type === "speaking") return renderSpeakingBlock(material);
  if (task.type === "shadowing") return renderShadowingBlock(material);
  return "";
}

function renderListeningBlock(material) {
  return `
    <div class="material">
      <div class="listen-box">
        <div class="actions">
          <button class="btn primary" data-action="speak-material" data-material-id="${material.id}">Play full audio</button>
          <button class="btn secondary" data-action="speak-material-slow" data-material-id="${material.id}">Play slower</button>
        </div>
        <p class="hint" style="margin-top:10px">Use the transcript only after your first listening pass.</p>
      </div>
      <details>
        <summary>Transcript</summary>
        <div style="margin-top:10px">
          ${material.transcript.map((line, index) => `
            <div class="transcript-line">
              <span class="line-number">${index + 1}</span>
              <span>${renderAnnotatedText(material, line)}</span>
            </div>
          `).join("")}
        </div>
      </details>
      ${renderQuestion(material.question, "listening")}
    </div>
  `;
}

function renderQuestion(question, skill) {
  return `
    <div class="feedback">
      <div class="question-title">${escapeHtml(question.prompt)}</div>
      <div class="radio-stack" style="margin-top:8px">
        ${question.options.map((option) => `
          <label><input type="radio" name="question-${skill}" value="${escapeHtml(option)}"> ${escapeHtml(option)}</label>
        `).join("")}
      </div>
      <button class="btn secondary" style="margin-top:10px" data-action="check-question" data-answer="${escapeHtml(question.answer)}" data-name="question-${skill}">Check answer</button>
    </div>
  `;
}

function renderReadingBlock(material) {
  return `
    <div class="split-view">
      <div>
        <div class="pill-row" style="margin-bottom:12px">
          <span class="pill">${material.level}</span>
          <span class="pill">${material.theme}</span>
          ${material.grammarPoints.map((id) => `
            <button class="pill grammar-chip" data-action="open-grammar" data-grammar-id="${id}">${grammarCatalog[id].title}</button>
          `).join("")}
        </div>
        <article class="article">${renderAnnotatedText(material)}</article>
      </div>
      <aside class="side-stack">
        <div class="card">
          <h3>Target terms</h3>
          <div class="pill-row">
            ${material.focusTerms.map((term) => `<button class="pill" data-action="open-word" data-term="${term}">${term}</button>`).join("")}
          </div>
        </div>
        <div class="card">
          <h3>After reading</h3>
          ${renderQuestion(material.question, "reading")}
        </div>
      </aside>
    </div>
  `;
}

function renderClickableText(text) {
  return text.split(/(\s+)/).map((part) => {
    if (/^\s+$/.test(part)) return part;
    const normalized = normalizeTerm(part);
    if (!normalized) return escapeHtml(part);
    const known = lexicon[normalized];
    return `<button class="word-token" data-action="open-word" data-term="${normalized}" title="${known ? "Open vocabulary card" : "Save this word"}">${escapeHtml(part)}</button>`;
  }).join("");
}

function renderAnnotatedText(material, text = material.text) {
  const spans = (material.grammarSpans || [])
    .map((span) => ({ ...span, index: text.indexOf(span.text) }))
    .filter((span) => span.index >= 0)
    .sort((a, b) => a.index - b.index || b.text.length - a.text.length);

  if (!spans.length) return renderClickableText(text);

  let cursor = 0;
  let output = "";
  spans.forEach((span) => {
    if (span.index < cursor) return;
    output += renderClickableText(text.slice(cursor, span.index));
    output += `
      <button class="grammar-inline" data-action="open-grammar" data-grammar-id="${span.id}" data-grammar-text="${escapeHtml(span.text)}" data-grammar-sentence="${escapeHtml(span.sentence)}" data-material-id="${material.id}" aria-label="Open grammar card for ${escapeHtml(grammarCatalog[span.id]?.title || span.id)}">
        ${escapeHtml(span.text)}
      </button>
    `;
    cursor = span.index + span.text.length;
  });
  output += renderClickableText(text.slice(cursor));
  return output;
}

function renderReviewBlock() {
  const vocab = dueVocab().slice(0, 3);
  const grammar = dueGrammar().slice(0, 2);
  const fallback = ["vertraging", "maatregelen", "hoewel"].filter((term) => !state.vocab.some((item) => item.term === term));
  return `
    <div class="grid two">
      <div class="card">
        <h3>Vocabulary to review</h3>
        ${vocab.length ? vocab.map(renderVocabMiniCard).join("") : `<p class="hint">No due saved words yet. Starter focus:</p><div class="pill-row">${fallback.map((term) => `<button class="pill" data-action="open-word" data-term="${term}">${term}</button>`).join("")}</div>`}
      </div>
      <div class="card">
        <h3>Grammar to review</h3>
        ${grammar.length ? grammar.map((item) => `<button class="pill grammar-chip" data-action="open-grammar" data-grammar-id="${item.id}">${grammarCatalog[item.id].title}</button>`).join("") : `<p class="hint">Click grammar chips in reading to add them to the recycling queue.</p>`}
      </div>
    </div>
  `;
}

function renderVocabMiniCard(item) {
  const cloze = createVocabCloze(item);
  const feedback = state.ui.vocabReviewFeedback?.term === item.term ? state.ui.vocabReviewFeedback : null;
  return `
    <div class="feedback" style="margin-bottom:8px">
      <strong>${escapeHtml(item.term)}</strong>
      <p class="hint" style="margin:5px 0">${escapeHtml(item.translation)} - ${escapeHtml(item.usage)}</p>
      ${cloze ? `
        <div class="form-field" style="margin:10px 0">
          <label for="vocab-review-${item.term}">Fill the missing Dutch word</label>
          <p>${escapeHtml(cloze.prompt)}</p>
          <input id="vocab-review-${item.term}" type="text" autocomplete="off" placeholder="Type the missing word">
        </div>
        <div class="actions">
          <button class="btn secondary" data-action="check-vocab-cloze" data-term="${item.term}" data-answer="${escapeHtml(cloze.answer)}" data-input-id="vocab-review-${item.term}">Check</button>
          <button class="btn secondary" data-action="show-vocab-answer" data-term="${item.term}" data-answer="${escapeHtml(cloze.answer)}">Show answer</button>
        </div>
        ${feedback ? `
          <div class="feedback ${feedback.ok ? "good" : "warn"}" style="margin-top:10px">
            <strong>${feedback.ok ? "Correct" : "Review again"}</strong>
            <p class="hint">${escapeHtml(feedback.message)}</p>
          </div>
        ` : ""}
      ` : ""}
      <div class="actions">
        <button class="btn secondary" data-action="mark-vocab" data-term="${item.term}" data-result="hard">Needs practice</button>
        <button class="btn secondary" data-action="mark-vocab" data-term="${item.term}" data-result="good">I know it</button>
      </div>
    </div>
  `;
}

function createVocabCloze(item) {
  const answer = normalizeTerm(item.term);
  const examples = [
    ...(item.examples || []),
    item.sourceSentence || ""
  ].filter(Boolean);
  const sentence = examples.find((example) => new RegExp(`\\b${escapeRegExp(answer)}\\b`, "i").test(example));
  if (!sentence) return null;
  return {
    answer,
    prompt: sentence.replace(new RegExp(`\\b${escapeRegExp(answer)}\\b`, "i"), "_____")
  };
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function renderWritingBlock() {
  const prompt = writingPrompts[Math.min(writingPrompts.length - 1, Math.floor((state.profile.difficulty.writing || 2) / 3))];
  return `
    <div class="feedback">
      <h3>${escapeHtml(prompt.title)}</h3>
      <p>${escapeHtml(prompt.prompt)}</p>
      <textarea id="sessionWriting" placeholder="Write in Dutch here..."></textarea>
      <div class="actions" style="margin-top:10px">
        <button class="btn secondary" data-action="review-writing" data-prompt-id="${prompt.id}" data-textarea="sessionWriting">Review writing</button>
      </div>
      ${state.ui.writingFeedback ? renderWritingFeedback(state.ui.writingFeedback) : ""}
    </div>
  `;
}

function renderSpeakingBlock(material) {
  const prompt = material.speakingPrompt || defaultSpeakingPrompt(material);
  const useful = (prompt.recycledItems || material.focusTerms || []).slice(0, 3);
  const recordingId = `speaking-${material.id}`;
  const recording = speakingRecordings.get(recordingId);
  const isRecording = activeSpeakingId === recordingId && speakingRecorder?.state === "recording";
  const directRecordingReady = hasDirectMicrophoneRecording();
  return `
    <div class="feedback">
      <h3>Speaking prompt: ${escapeHtml(prompt.title)}</h3>
      <p class="hint">Answer in Dutch. Try to use at least one recycled item: ${useful.map((item) => `<span class="pill">${escapeHtml(item)}</span>`).join(" ")}</p>
      <p><strong>Prompt:</strong> ${escapeHtml(prompt.prompt)}</p>
      <textarea id="speakingReply" placeholder="Type or speak your Dutch response here..."></textarea>
      <div class="speaking-recorder" style="margin-top:10px">
        ${directRecordingReady
          ? (isRecording
            ? `<button class="btn danger" data-action="stop-speaking-recording">Stop recording</button>`
            : `<button class="btn secondary" data-action="start-speaking-recording" data-recording-id="${recordingId}">Record answer</button>`)
          : `
            <label class="btn secondary" for="speaking-upload-${material.id}">Record/upload answer</label>
            <input class="visually-hidden" id="speaking-upload-${material.id}" type="file" accept="audio/*" capture data-upload-type="speaking" data-recording-id="${recordingId}">
          `}
        ${recording ? `<span class="hint">Your recording:</span><audio controls src="${recording.url}"></audio>` : ""}
        <button class="btn secondary" data-action="sample-speaking" data-material-id="${material.id}">Show sample answer</button>
      </div>
      ${directRecordingReady ? "" : `<p class="hint" style="margin-top:8px">Direct microphone recording needs HTTPS on most phones. This fallback lets your phone recorder or file picker provide the audio.</p>`}
      <div id="speakingSample"></div>
    </div>
  `;
}

function defaultSpeakingPrompt(material) {
  return {
    title: material.theme || "Today's material",
    prompt: "Wat is volgens jou het belangrijkste punt in deze tekst?",
    recycledItems: material.focusTerms || [],
    sample: "Ik denk dat het belangrijkste punt duidelijk is, omdat de tekst een praktisch probleem uitlegt."
  };
}

function renderShadowingBlock(material) {
  const level = selectedShadowingLevel();
  const lines = getShadowingLines(material, level);
  const ttsReady = hasTextToSpeech();
  return `
    <div class="material">
      <div class="feedback">
        <h3>Shadowing loop</h3>
        <p class="hint">Play one short line, repeat it aloud, record yourself, then listen back. These lines are separate from the article because reading-level sentences are often too hard for speaking practice.</p>
        <div class="actions" style="margin-top:10px">
          <button class="btn secondary" data-action="stop-source-audio">Stop source audio</button>
        </div>
        ${ttsReady ? "" : `
          <div class="feedback warn" style="margin-top:10px">
            <strong>Dutch source voice unavailable</strong>
            <p class="hint">This browser or phone does not currently expose a Dutch text-to-speech voice. NederFlow will not use an English voice for Dutch. You can still record and replay your own voice; source audio will need a Dutch system voice or a later real-audio backend.</p>
          </div>
        `}
        <div class="pill-row" style="margin-top:10px">
          ${["easy", "normal", "challenge"].map((item) => `
            <button class="pill ${level === item ? "good" : ""}" data-action="set-shadowing-level" data-shadowing-level="${item}">
              ${capitalize(item)}
            </button>
          `).join("")}
        </div>
        <div class="pill-row" style="margin-top:8px">
          ${[
            ["slow", "Slow"],
            ["normal", "Normal"],
            ["natural", "Natural"]
          ].map(([value, label]) => `
            <button class="pill ${state.ui.shadowingRate === value ? "good" : ""}" data-action="set-shadowing-rate" data-shadowing-rate="${value}">
              ${label}
            </button>
          `).join("")}
        </div>
      </div>
      ${lines.map((line, index) => `
        ${renderShadowLine(material, line, index)}
      `).join("")}
    </div>
  `;
}

function selectedShadowingLevel() {
  if (["easy", "normal", "challenge"].includes(state.ui.shadowingLevel)) {
    return state.ui.shadowingLevel;
  }
  const listeningRank = levelOrder.indexOf(state.profile.levels.listening);
  const speakingRank = levelOrder.indexOf(state.profile.levels.speaking);
  const outputRank = Math.min(
    listeningRank >= 0 ? listeningRank : 2,
    speakingRank >= 0 ? speakingRank : 2
  );
  if (outputRank <= levelOrder.indexOf("A2+")) return "easy";
  if (outputRank <= levelOrder.indexOf("B1")) return "normal";
  return "challenge";
}

function getShadowingLines(material, level) {
  const bank = material.shadowing || {};
  return bank[level] || bank.easy || material.transcript.slice(0, 4);
}

function renderShadowLine(material, line, index) {
  const id = `${material.id}-${index}`;
  const recording = shadowRecordings.get(id);
  const isRecording = activeShadowId === id && shadowRecorder?.state === "recording";
  const rate = shadowingRateValue();
  const ttsReady = hasTextToSpeech();
  const directRecordingReady = hasDirectMicrophoneRecording();
  return `
        <div class="transcript-line">
          <span class="line-number">${index + 1}</span>
          <span class="shadow-text">${renderAnnotatedText(material, line)}</span>
          <div class="shadow-controls">
            <button class="btn secondary" data-action="speak" data-text="${escapeHtml(line)}" data-rate="${rate}" ${ttsReady ? "" : "disabled"}>Play source</button>
            <button class="btn secondary" data-action="stop-source-audio">Stop source</button>
            ${directRecordingReady
              ? (isRecording
                ? `<button class="btn danger" data-action="stop-shadow-recording">Stop</button>`
                : `<button class="btn secondary" data-action="start-shadow-recording" data-recording-id="${id}">Record</button>`)
              : `
                <label class="btn secondary" for="shadow-upload-${id}">Record/upload</label>
                <input class="visually-hidden" id="shadow-upload-${id}" type="file" accept="audio/*" capture data-upload-type="shadow" data-recording-id="${id}">
              `}
            ${recording ? `<span class="hint">Your recording:</span><audio controls src="${recording.url}"></audio>` : ""}
          </div>
        </div>
  `;
}

function renderReading() {
  const material = currentMaterial();
  return `
    <section class="page-head">
      <div>
        <p class="eyebrow">Reading</p>
        <h1>${escapeHtml(material.title)}</h1>
        <p class="lead">Click words to save them. Click highlighted grammar structures when the sentence itself becomes the problem.</p>
      </div>
      <div class="actions">
        <button class="btn secondary" data-action="speak-material" data-material-id="${material.id}">Play article</button>
      </div>
    </section>
    <section class="panel">
      ${renderReadingBlock(material)}
    </section>
  `;
}

function renderVocabulary() {
  const starter = ["vertraging", "maatregelen", "afhankelijk", "besluiten", "aanvraag", "onderzoek"];
  return `
    <section class="page-head">
      <div>
        <p class="eyebrow">Vocabulary</p>
        <h1>Sentence-first vocabulary</h1>
        <p class="lead">Words are saved with phrases and source sentences so passive recognition can become active use.</p>
      </div>
    </section>

    <section class="panel">
      <h2>Saved words</h2>
      ${state.vocab.length ? `
        <div class="grid two">
          ${state.vocab.map((item) => renderVocabCard(item)).join("")}
        </div>
      ` : `
        <div class="empty">
          <p>No saved words yet. Add a few starter words or click words in Reading.</p>
          <div class="pill-row">
            ${starter.map((term) => `<button class="pill" data-action="open-word" data-term="${term}">${term}</button>`).join("")}
          </div>
        </div>
      `}
    </section>
  `;
}

function renderVocabCard(item) {
  const strength = clamp((item.strength || 1) * 20, 12, 100);
  return `
    <article class="card">
      <div class="stat">
        <div>
          <h3>${escapeHtml(item.term)}</h3>
          <p class="hint">${escapeHtml(item.translation)}</p>
        </div>
        <span class="pill">${item.nextReview || "soon"}</span>
      </div>
      <p>${escapeHtml(item.usage)}</p>
      <div class="progress-bar"><span style="width:${strength}%"></span></div>
      <ul class="example-list">
        ${(item.examples || []).slice(0, 2).map((example) => `<li>${escapeHtml(example)}</li>`).join("")}
      </ul>
      <div class="actions">
        <button class="btn secondary" data-action="mark-vocab" data-term="${item.term}" data-result="hard">Needs practice</button>
        <button class="btn secondary" data-action="mark-vocab" data-term="${item.term}" data-result="good">I know it</button>
      </div>
    </article>
  `;
}

function renderGrammar() {
  const activeId = state.ui.activeGrammar || "omdat";
  return `
    <section class="page-head">
      <div>
        <p class="eyebrow">Grammar</p>
        <h1>Grammar-on-demand</h1>
        <p class="lead">Open grammar from the sentence that blocked you, then recycle it into later reading, listening, and output tasks.</p>
      </div>
    </section>

    <section class="split-view">
      <aside class="panel">
        <h2>Grammar library</h2>
        <div class="grid">
          ${Object.entries(grammarCatalog).map(([id, item]) => `
            <button class="choice ${activeId === id ? "selected" : ""}" data-action="set-active-grammar" data-grammar-id="${id}">
              <strong>${escapeHtml(item.title)}</strong>
              <span>${escapeHtml(item.level)}</span>
            </button>
          `).join("")}
        </div>
      </aside>
      <article class="panel">
        ${renderGrammarDetail(activeId)}
      </article>
    </section>
  `;
}

function renderGrammarDetail(id) {
  const item = grammarCatalog[id] || grammarCatalog.omdat;
  const check = state.ui.grammarCheck?.id === id ? state.ui.grammarCheck : null;
  const source = state.ui.grammarSource?.id === id ? state.ui.grammarSource : null;
  const sourceMaterial = source?.materialId ? getMaterial(source.materialId) : null;
  return `
    <div>
      <div class="pill-row">
        <span class="pill grammar-chip">${escapeHtml(item.level)}</span>
        ${item.receptiveLevel ? `<span class="pill">recognition ${escapeHtml(item.receptiveLevel)}</span>` : ""}
        ${item.productiveLevel ? `<span class="pill">production ${escapeHtml(item.productiveLevel)}</span>` : ""}
        <button class="pill" data-action="add-grammar" data-grammar-id="${id}">Add to recycling</button>
      </div>
      <h2 style="margin-top:12px">${escapeHtml(item.title)}</h2>
      <p class="hint"><strong>Chinese:</strong> ${escapeHtml(item.titleZh || "")}</p>
      ${source ? `
        <div class="feedback" style="margin:12px 0">
          <h3>From your material</h3>
          ${sourceMaterial ? `<p class="hint">${escapeHtml(sourceMaterial.title)}</p>` : ""}
          ${source.phrase ? `<p><strong>Clicked structure:</strong> ${escapeHtml(source.phrase)}</p>` : ""}
          ${source.sentence ? `<p><strong>Original sentence:</strong> ${escapeHtml(source.sentence)}</p>` : ""}
        </div>
      ` : ""}
      <p><strong>Pattern:</strong> ${escapeHtml(item.pattern)}</p>
      <p>${escapeHtml(item.explanation)}</p>
      <p><strong>Chinese explanation:</strong> ${escapeHtml(item.explanationZh || "")}</p>
      <h3>Examples</h3>
      <ul class="example-list">
        ${item.examples.map((example, index) => `
          <li>
            <strong>${escapeHtml(example)}</strong>
            ${item.examplesEn?.[index] ? `<br><span class="hint">${escapeHtml(item.examplesEn[index])}</span>` : ""}
          </li>
        `).join("")}
      </ul>
      <div class="feedback">
        <h3>Practice</h3>
        <p>${escapeHtml(item.exercise.prompt)}</p>
        <div class="radio-stack">
          ${item.exercise.options.map((option) => `
            <label><input type="radio" name="grammar-${id}" value="${escapeHtml(option)}"> ${escapeHtml(option)}</label>
          `).join("")}
        </div>
        <button class="btn secondary" style="margin-top:10px" data-action="check-grammar" data-grammar-id="${id}">Check</button>
        ${check ? `<p class="hint" style="margin-top:10px">${check.correct ? "Correct. Nice." : `Not yet. Correct answer: ${escapeHtml(item.exercise.answer)}`}</p>` : ""}
      </div>
      <div class="form-field" style="margin-top:14px">
        <label for="grammarOutput-${id}">${escapeHtml(item.output)}</label>
        <textarea id="grammarOutput-${id}" placeholder="Write your own Dutch sentence..."></textarea>
        <div class="actions" style="margin-top:10px">
          <button class="btn secondary" data-action="check-grammar-output" data-grammar-id="${id}" data-textarea="grammarOutput-${id}">Check my sentence</button>
        </div>
        ${renderGrammarOutputFeedback(id)}
      </div>
    </div>
  `;
}

function renderGrammarOutputFeedback(id) {
  const feedback = state.ui.grammarOutputFeedback;
  if (!feedback || feedback.id !== id) return "";
  return `
    <div class="feedback ${feedback.ok ? "good" : "warn"}" style="margin-top:10px">
      <h3>${feedback.ok ? "Looks good" : "Needs revision"}</h3>
      <p><strong>English:</strong> ${escapeHtml(feedback.messageEn)}</p>
      <p><strong>Chinese:</strong> ${escapeHtml(feedback.messageZh)}</p>
      ${feedback.suggestion ? `<p><strong>Suggestion:</strong> ${escapeHtml(feedback.suggestion)}</p>` : ""}
      <p class="hint">This is rule-based preview feedback. Later, AI correction will check meaning, word order, idiomatic phrasing, and level-appropriate alternatives.</p>
    </div>
  `;
}

function renderWriting() {
  const prompt = writingPrompts[Math.min(writingPrompts.length - 1, Math.floor((state.profile.difficulty.writing || 2) / 3))];
  return `
    <section class="page-head">
      <div>
        <p class="eyebrow">Writing</p>
        <h1>Practical output</h1>
        <p class="lead">Start with useful emails and daily messages, then upgrade toward opinion and academic language.</p>
      </div>
    </section>

    <section class="grid two">
      <article class="panel">
        <h2>${escapeHtml(prompt.title)}</h2>
        <p>${escapeHtml(prompt.prompt)}</p>
        <textarea id="writingMain" placeholder="Write in Dutch here..."></textarea>
        <div class="actions" style="margin-top:10px">
          <button class="btn primary" data-action="review-writing" data-prompt-id="${prompt.id}" data-textarea="writingMain">Review writing</button>
        </div>
        ${state.ui.writingFeedback ? renderWritingFeedback(state.ui.writingFeedback) : ""}
      </article>
      <article class="panel">
        <h2>Recent writing</h2>
        ${state.writingHistory.length ? state.writingHistory.slice(0, 4).map((item) => `
          <div class="feedback" style="margin-bottom:10px">
            <strong>${escapeHtml(item.promptTitle)}</strong>
            <p class="hint">${escapeHtml(item.text.slice(0, 120))}${item.text.length > 120 ? "..." : ""}</p>
          </div>
        `).join("") : `<p class="hint">No writing saved yet.</p>`}
      </article>
    </section>
  `;
}

function renderWritingFeedback(feedback) {
  return `
    <div class="divider"></div>
    <div class="feedback good">
      <h3>Writing feedback preview</h3>
      <p><strong>Corrected version:</strong> ${escapeHtml(feedback.corrected)}</p>
      <p><strong>More natural:</strong> ${escapeHtml(feedback.natural)}</p>
      <p><strong>B2/C1 upgrade:</strong> ${escapeHtml(feedback.advanced)}</p>
      <p class="hint">Live AI correction will replace this sample feedback in a later version.</p>
    </div>
  `;
}

function renderProgress() {
  return `
    <section class="page-head">
      <div>
        <p class="eyebrow">Progress</p>
        <h1>Adaptive learning record</h1>
        <p class="lead">This page shows the data that will later drive difficulty, recycling, and personalized material selection.</p>
      </div>
    </section>

    <section class="grid two">
      <article class="panel">
        <h2>Skill levels</h2>
        ${renderSkillList()}
        <div class="divider"></div>
        <div class="actions">
          <button class="btn danger" data-action="reset-demo">Reset demo data</button>
        </div>
      </article>
      <article class="panel">
        <h2>Session history</h2>
        ${state.sessions.length ? state.sessions.map((session) => {
          const material = getMaterial(session.materialId);
          return `
            <div class="feedback" style="margin-bottom:10px">
              <strong>${session.duration} min - ${escapeHtml(session.context)}</strong>
              <p class="hint">${session.date} - ${escapeHtml(material.title)}</p>
            </div>
          `;
        }).join("") : `<p class="hint">No completed sessions yet.</p>`}
      </article>
    </section>

    <section class="panel" style="margin-top:16px">
      ${renderContentPolicy()}
    </section>
  `;
}

function renderContentPolicy() {
  const policy = contentLibrary.sourcePolicy;
  if (!policy) {
    return `
      <h2>Content library</h2>
      <p class="hint">Using built-in prototype content.</p>
    `;
  }
  return `
    <h2>Content library</h2>
    <p>${escapeHtml(policy.summary)}</p>
    <div class="grid three" style="margin-top:12px">
      ${policy.sources.map((source) => `
        <article class="card">
          <span class="pill">${escapeHtml(source.type)}</span>
          <h3 style="margin-top:10px">${escapeHtml(source.role)}</h3>
          <p class="hint">${escapeHtml(source.storage)}</p>
        </article>
      `).join("")}
    </div>
    <p class="hint" style="margin-top:12px">${materials.length} materials, ${Object.keys(grammarCatalog).length} grammar cards, ${Object.keys(lexicon).length} vocabulary entries.</p>
  `;
}

function renderWordDrawer(term) {
  const normalized = normalizeTerm(term);
  const entry = lexicon[normalized] || {
    translation: "No preset translation yet",
    usage: "Save it now, then add examples later from real material.",
    examples: [],
    tags: []
  };
  const saved = state.vocab.find((item) => item.term === normalized);
  const sourceSentence = findSourceSentence(normalized);
  return `
    <aside class="drawer">
      <div class="drawer-head">
        <div>
          <p class="eyebrow">Vocabulary card</p>
          <h2>${escapeHtml(normalized)}</h2>
        </div>
        <button class="x-btn" data-action="close-word" aria-label="Close">x</button>
      </div>
      <p><strong>English:</strong> ${escapeHtml(entry.translation)}</p>
      <p><strong>Usage:</strong> ${escapeHtml(entry.usage)}</p>
      ${sourceSentence ? `<p class="hint"><strong>Source:</strong> ${escapeHtml(sourceSentence)}</p>` : ""}
      <h3>Examples</h3>
      <ul class="example-list">
        ${(entry.examples.length ? entry.examples : [sourceSentence || "Add this word from a real sentence."]).map((example) => `<li>${escapeHtml(example)}</li>`).join("")}
      </ul>
      <div class="actions">
        <button class="btn primary" data-action="add-word" data-term="${normalized}">${saved ? "Refresh in recycling" : "Add to vocabulary"}</button>
        <button class="btn secondary" data-action="speak" data-text="${normalized}">Play word</button>
      </div>
      ${saved ? `<p class="hint" style="margin-top:10px">Saved. Strength ${saved.strength || 1}/5. Next review: ${saved.nextReview}.</p>` : ""}
    </aside>
  `;
}

function findSourceSentence(term) {
  for (const material of materials) {
    const line = material.transcript.find((sentence) => normalizeTerm(sentence).includes(term));
    if (line) return line;
  }
  return "";
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

document.addEventListener("click", (event) => {
  const target = event.target.closest("[data-action]");
  if (!target) return;
  const action = target.dataset.action;

  if (action === "start-placement") setRoute("placement");
  if (action === "go-setup") setRoute("setup");
  if (action === "go-dashboard") setRoute("dashboard");
  if (action === "install-app") {
    installPwa();
  }
  if (action === "select-duration") {
    state.ui.duration = Number(target.dataset.duration);
    saveState();
    render();
  }
  if (action === "select-context") {
    state.ui.context = target.dataset.context;
    saveState();
    render();
  }
  if (action === "set-shadowing-level") {
    state.ui.shadowingLevel = target.dataset.shadowingLevel;
    saveState();
    render();
  }
  if (action === "set-shadowing-rate") {
    state.ui.shadowingRate = target.dataset.shadowingRate;
    saveState();
    render();
  }
  if (action === "start-session") {
    state.currentSession = buildSession(state.ui.duration, state.ui.context);
    saveState();
    setRoute("session");
    render();
  }
  if (action === "complete-task") completeTask(target.dataset.taskId);
  if (action === "difficulty") handleDifficulty(target.dataset.skill, target.dataset.value);
  if (action === "open-word") {
    state.ui.activeWord = target.dataset.term;
    saveState();
    render();
  }
  if (action === "close-word") {
    state.ui.activeWord = null;
    saveState();
    render();
  }
  if (action === "add-word") {
    addVocab(target.dataset.term, findSourceSentence(target.dataset.term));
    state.ui.activeWord = target.dataset.term;
    saveState();
    render();
  }
  if (action === "open-grammar") {
    state.ui.activeGrammar = target.dataset.grammarId;
    state.ui.grammarSource = target.dataset.grammarText || target.dataset.grammarSentence ? {
      id: target.dataset.grammarId,
      phrase: target.dataset.grammarText || "",
      sentence: target.dataset.grammarSentence || "",
      materialId: target.dataset.materialId || ""
    } : null;
    addGrammarFocus(target.dataset.grammarId);
    saveState();
    setRoute("grammar");
  }
  if (action === "set-active-grammar") {
    state.ui.activeGrammar = target.dataset.grammarId;
    state.ui.grammarSource = null;
    saveState();
    render();
  }
  if (action === "add-grammar") {
    addGrammarFocus(target.dataset.grammarId);
    render();
  }
  if (action === "speak") speakDutch(target.dataset.text, Number(target.dataset.rate) || 0.9);
  if (action === "stop-source-audio") {
    stopSourceAudio();
  }
  if (action === "start-shadow-recording") {
    startShadowRecording(target.dataset.recordingId);
  }
  if (action === "stop-shadow-recording") {
    stopShadowRecording();
  }
  if (action === "start-speaking-recording") {
    startSpeakingRecording(target.dataset.recordingId);
  }
  if (action === "stop-speaking-recording") {
    stopSpeakingRecording();
  }
  if (action === "speak-material") {
    const material = getMaterial(target.dataset.materialId);
    speakDutch(material.transcript.join(" "), 0.92);
  }
  if (action === "speak-material-slow") {
    const material = getMaterial(target.dataset.materialId);
    speakDutch(material.transcript.join(" "), 0.72);
  }
  if (action === "check-question") {
    const selected = document.querySelector(`input[name="${target.dataset.name}"]:checked`);
    if (!selected) return showToast("Choose an answer first.");
    showToast(selected.value === target.dataset.answer ? "Correct." : `Not yet. Correct answer: ${target.dataset.answer}`);
  }
  if (action === "check-grammar") {
    const id = target.dataset.grammarId;
    const selected = document.querySelector(`input[name="grammar-${id}"]:checked`);
    if (!selected) return showToast("Choose an answer first.");
    const correct = selected.value === grammarCatalog[id].exercise.answer;
    state.ui.grammarCheck = { id, correct };
    const focus = state.grammarFocus.find((item) => item.id === id);
    if (focus) {
      focus.strength = clamp((focus.strength || 1) + (correct ? 1 : 0), 1, 5);
      focus.nextReview = addDays(correct ? focus.strength * 2 : 1);
    }
    saveState();
    render();
  }
  if (action === "check-grammar-output") {
    const id = target.dataset.grammarId;
    const textarea = document.getElementById(target.dataset.textarea);
    const text = textarea?.value || "";
    state.ui.grammarOutputFeedback = assessGrammarOutput(id, text);
    const focus = state.grammarFocus.find((item) => item.id === id);
    if (focus && state.ui.grammarOutputFeedback.ok) {
      focus.strength = clamp((focus.strength || 1) + 1, 1, 5);
      focus.nextReview = addDays(focus.strength * 2);
      focus.lastSeen = todayKey();
    }
    saveState();
    render();
  }
  if (action === "check-vocab-cloze") {
    const input = document.getElementById(target.dataset.inputId);
    const answer = normalizeTerm(target.dataset.answer);
    const guess = normalizeTerm(input?.value || "");
    const ok = guess === answer;
    state.ui.vocabReviewFeedback = {
      term: target.dataset.term,
      ok,
      message: ok ? "Good recall. This word moves later in your review cycle." : `Expected: ${answer}. This word stays in tomorrow's review.`
    };
    markVocab(target.dataset.term, ok ? "good" : "hard");
    saveState();
    showToast(ok ? "Correct. Word moved later in review." : `Not yet. Answer: ${answer}`);
    render();
  }
  if (action === "show-vocab-answer") {
    state.ui.vocabReviewFeedback = {
      term: target.dataset.term,
      ok: false,
      message: `Answer: ${normalizeTerm(target.dataset.answer)}. Try typing it before marking it known.`
    };
    markVocab(target.dataset.term, "hard");
    saveState();
    showToast(`Answer: ${normalizeTerm(target.dataset.answer)}`);
    render();
  }
  if (action === "mark-vocab") {
    const item = markVocab(target.dataset.term, target.dataset.result);
    if (item) {
      saveState();
      showToast(target.dataset.result === "good" ? "Moved later in the review cycle." : "Moved to tomorrow's review.");
      render();
    }
  }
  if (action === "review-writing") {
    const textarea = document.getElementById(target.dataset.textarea);
    const text = textarea?.value.trim() || "";
    if (!text) return showToast("Write a few Dutch sentences first.");
    const prompt = writingPrompts.find((item) => item.id === target.dataset.promptId) || writingPrompts[0];
    state.ui.writingFeedback = createWritingFeedback(text, prompt);
    state.writingHistory.unshift({
      date: todayKey(),
      promptTitle: prompt.title,
      text
    });
    state.writingHistory = state.writingHistory.slice(0, 12);
    saveState();
    render();
  }
  if (action === "sample-speaking") {
    const box = document.getElementById("speakingSample");
    if (box) {
      const material = getMaterial(target.dataset.materialId);
      const prompt = material.speakingPrompt || defaultSpeakingPrompt(material);
      box.innerHTML = `
        <div class="feedback good" style="margin-top:10px">
          ${escapeHtml(prompt.sample)}
        </div>
      `;
    }
  }
  if (action === "reset-demo") {
    state = defaultState();
    saveState();
    showToast("Demo data reset.");
    render();
  }
});

document.addEventListener("submit", (event) => {
  if (event.target.id !== "placementForm") return;
  event.preventDefault();
  const data = new FormData(event.target);
  const writing = String(data.get("writing") || "").trim();
  const writingWords = writing.split(/\s+/).filter(Boolean).length;
  const correct = {
    listen: data.get("listen") === "correct",
    reading: data.get("reading") === "correct",
    grammar: data.get("grammar") === "correct",
    vocab: data.get("vocab") === "correct"
  };

  state.profile.placementComplete = true;
  state.profile.levels.listening = correct.listen ? "A2+" : "A2";
  state.profile.levels.reading = correct.reading && correct.vocab ? "B1" : "A2+";
  state.profile.levels.grammar = correct.grammar ? "B1-" : "A2";
  state.profile.levels.writing = writingWords >= 18 ? "B1-" : "A2";
  state.profile.levels.speaking = String(data.get("speaking") || "A2");
  state.profile.difficulty.listening = correct.listen ? 3 : 2;
  state.profile.difficulty.reading = correct.reading ? 4 : 3;
  state.profile.difficulty.grammar = correct.grammar ? 4 : 2;
  state.profile.difficulty.writing = writingWords >= 18 ? 3 : 2;
  state.profile.difficulty.speaking = state.profile.levels.speaking === "B1-" ? 3 : 2;
  saveState();
  showToast("Placement profile saved.");
  setRoute("dashboard");
});

document.addEventListener("change", (event) => {
  const input = event.target;
  if (!input.matches?.("[data-upload-type]")) return;
  const file = input.files?.[0];
  saveUploadedRecording(input.dataset.uploadType, input.dataset.recordingId, file);
});

window.addEventListener("hashchange", render);

if ("speechSynthesis" in window) {
  loadVoices();
  window.speechSynthesis.onvoiceschanged = () => {
    loadVoices();
    render();
  };
}

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  canInstallPwa = true;
  render();
});

window.addEventListener("appinstalled", () => {
  deferredInstallPrompt = null;
  canInstallPwa = false;
  showToast("NederFlow installed.");
  render();
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch((error) => {
      console.warn("Service worker registration failed", error);
    });
  });
}

function createWritingFeedback(text, prompt) {
  const hasDelay = /vertraging|later|trein/i.test(text);
  const corrected = hasDelay
    ? "Mijn trein heeft vertraging. Daardoor kom ik ongeveer tien minuten later aan. Sorry voor het ongemak."
    : prompt.sample;
  return {
    corrected,
    natural: corrected.replace("Sorry voor het ongemak.", "Excuses voor het ongemak."),
    advanced:
      "Helaas heeft mijn trein vertraging, waardoor ik naar verwachting ongeveer tien minuten later aankom. Excuses voor het ongemak en bedankt voor uw begrip."
  };
}

function assessGrammarOutput(id, text) {
  const clean = text.trim();
  const lower = clean.toLowerCase();
  if (clean.length < 8) {
    return {
      id,
      ok: false,
      messageEn: "The sentence is too short to check. Write one complete Dutch sentence.",
      messageZh: "这个句子太短，还无法判断。请写一个完整的荷兰语句子。",
      suggestion: grammarCatalog[id]?.examples?.[0] || ""
    };
  }

  const checks = {
    omdat: () => {
      const hasOmdat = /\bomdat\b/i.test(clean);
      const afterOmdat = lower.split(/\bomdat\b/)[1] || "";
      const likelyVerbAtEnd = /\b(ben|bent|is|zijn|heb|hebt|heeft|hebben|kan|kunt|kunnen|wil|wilt|willen|moet|moeten|ga|gaat|gaan|kom|komt|komen|zit|zitten)\.?$/i.test(afterOmdat.trim());
      if (hasOmdat && likelyVerbAtEnd) {
        return good("You used omdat and the clause seems to end with a finite verb.", "你用了 omdat，而且从句看起来以变位动词结尾，方向是对的。");
      }
      if (hasOmdat) {
        return revise("You used omdat, but check whether the finite verb should move to the end of the clause.", "你用了 omdat，但需要检查从句里的变位动词是否放到了句尾。", "Ik kom later, omdat mijn trein vertraging heeft.");
      }
      return revise("Try to include omdat in your sentence.", "这个练习需要使用 omdat。", "Ik oefen vandaag, omdat ik mijn Nederlands wil verbeteren.");
    },
    hoewel: () => {
      const hasHoewel = /\bhoewel\b/i.test(clean);
      const hasToch = /\btoch\b/i.test(clean);
      if (hasHoewel && hasToch) {
        return good("You used hoewel with toch, which is a natural contrast pattern.", "你用了 hoewel 和 toch，这是很自然的让步转折结构。");
      }
      if (hasHoewel) {
        return good("You used hoewel. Adding toch in the main clause can make the contrast more natural.", "你用了 hoewel。主句里加上 toch 会让转折更自然。", "Hoewel ik weinig tijd heb, oefen ik toch Nederlands.");
      }
      return revise("Try to include hoewel to express although.", "这个练习需要用 hoewel 表达“虽然”。", "Hoewel ik moe ben, luister ik toch naar Nederlands.");
    },
    teInfinitive: () => {
      const hasTeInf = /\bte\s+[a-z]+en\b/i.test(clean);
      const hasTrigger = /\b(om|probeer|proberen|besluit|besluiten|hoop|hopen|vergeet|vergeten)\b/i.test(clean);
      if (hasTeInf && hasTrigger) {
        return good("You used a te + infinitive structure in a plausible way.", "你用了 te + 动词原形结构，看起来符合这个语法点。");
      }
      return revise("Try to use om ... te + infinitive or a verb like probeer + te + infinitive.", "请尝试使用 om ... te + 动词原形，或者 probeer + te + 动词原形。", "Ik probeer elke dag Nederlands te luisteren.");
    },
    separable: () => {
      const hasSeparated = /\b(vul|meld|sta|doe|neem|kom)\b.+\b(in|aan|op|mee|terug)\b/i.test(clean);
      const hasInfinitive = /\b(invullen|aanmelden|opstaan|meedoen|terugkomen)\b/i.test(clean);
      if (hasSeparated || hasInfinitive) {
        return good("You used a separable verb form or infinitive.", "你用了可分动词的形式或原形。");
      }
      return revise("Try a separable verb such as aanmelden, invullen, opstaan, or meedoen.", "请尝试使用 aanmelden、invullen、opstaan 或 meedoen 这样的可分动词。", "Ik meld me morgen aan voor de cursus.");
    },
    passive: () => {
      const hasPassive = /\ber\s+wordt\b/i.test(clean) || /\bwordt\b.+\b(gedaan|gemaakt|besproken|gebouwd|ingevoerd|gewerkt)\b/i.test(clean);
      if (hasPassive) {
        return good("You used a passive pattern with wordt.", "你用了 wordt 相关的被动结构。");
      }
      return revise("Try to use er wordt + past participle.", "请尝试使用 er wordt + 过去分词。", "Er wordt vandaag veel besproken.");
    },
    erWords: () => {
      const hasCompound = /\b(daarvoor|daarmee|daarover|daarvan|erover|ervoor|ermee|hiervoor|hiermee)\b/i.test(clean);
      if (hasCompound) {
        return good("You used an er/daar/hier compound.", "你用了 er/daar/hier 和介词合成的词。");
      }
      return revise("Try to use daarvoor, daarmee, erover, or another compound.", "请尝试使用 daarvoor、daarmee、erover 等合成词。", "Ik heb daarvoor meer informatie nodig.");
    }
  };

  return (checks[id] || (() => good("Sentence saved for review.", "句子已保存供复习。")))();

  function good(messageEn, messageZh, suggestion = "") {
    return { id, ok: true, messageEn, messageZh, suggestion };
  }

  function revise(messageEn, messageZh, suggestion = "") {
    return { id, ok: false, messageEn, messageZh, suggestion };
  }
}

render();

