window.NEDERFLOW_CONTENT = {
  version: "0.2",
  sourcePolicy: {
    summary:
      "Prototype materials are controlled AI-style training texts. Future real-world input should come from curated, lawful sources or user-provided text, then be adapted for CEFR level and recycling goals.",
    sources: [
      {
        type: "controlled-ai-training",
        role: "Main source for A2-B1 practice, recycling, short listening scripts, emails, and grammar-rich examples.",
        storage: "Stored in the app content library."
      },
      {
        type: "curated-real-input",
        role: "Future source for authentic Dutch news and public information.",
        storage: "Store links, metadata, short learning summaries, or licensed/open content only."
      },
      {
        type: "user-imported",
        role: "Texts pasted by the learner for personal study.",
        storage: "Can be processed into vocabulary, grammar, and review cards."
      }
    ]
  },
  levelOrder: ["A1", "A2", "A2+", "B1-", "B1", "B1+", "B2-", "B2", "B2+", "C1"],
  skillNames: ["listening", "reading", "grammar", "writing", "speaking"],
  lexicon: {
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
    },
    regeling: {
      translation: "arrangement, regulation",
      usage: "Common in formal letters and public information.",
      examples: [
        "De nieuwe regeling geldt vanaf januari.",
        "Kunt u de regeling kort uitleggen?"
      ],
      tags: ["formal", "policy"]
    },
    beschikbaar: {
      translation: "available",
      usage: "Used with zijn: beschikbaar zijn.",
      examples: [
        "Er zijn extra plekken beschikbaar.",
        "Ik ben maandagmiddag beschikbaar."
      ],
      tags: ["daily", "formal"]
    },
    verzetten: {
      translation: "to reschedule, move",
      usage: "Often used with afspraak: een afspraak verzetten.",
      examples: [
        "Ik wil mijn afspraak verzetten.",
        "Kunnen we de vergadering naar vrijdag verzetten?"
      ],
      tags: ["email", "daily"]
    },
    bijeenkomst: {
      translation: "meeting, gathering",
      usage: "Common in academic and community contexts.",
      examples: [
        "De bijeenkomst begint om tien uur.",
        "Tijdens de bijeenkomst bespreken we het onderzoek."
      ],
      tags: ["academic", "formal"]
    },
    toelichten: {
      translation: "to explain, clarify",
      usage: "Formal verb used in meetings and emails.",
      examples: [
        "Kunt u uw keuze toelichten?",
        "De onderzoeker licht de resultaten toe."
      ],
      tags: ["academic", "formal", "separable"]
    },
    verwacht: {
      translation: "expected",
      usage: "Past participle/adjective from verwachten.",
      examples: [
        "Er wordt veel drukte verwacht.",
        "Ik verwacht dat de les moeilijk wordt."
      ],
      tags: ["news", "daily"]
    }
  },
  grammarCatalog: {
    omdat: {
      title: "Subordinate clauses with omdat",
      titleZh: "omdat 引导的从句",
      level: "A2-B1",
      receptiveLevel: "A2+",
      productiveLevel: "B1",
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
      receptiveLevel: "B1-",
      productiveLevel: "B1+",
      pattern: "Hoewel + subordinate clause, main clause. Toch can add contrast.",
      explanation:
        "Hoewel introduces contrast and sends the finite verb to the end of its clause. Toch often appears in the main clause to mean still/anyway.",
      explanationZh:
        "hoewel 表示 although / 虽然，也会引导从句，所以从句里的变位动词放在句尾。toch 常出现在主句里，表示“还是、仍然、nevertheless”。",
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
      receptiveLevel: "B1-",
      productiveLevel: "B1",
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
      receptiveLevel: "A2",
      productiveLevel: "B1-",
      pattern: "Present: Ik meld me aan. Infinitive/end position: aanmelden.",
      explanation:
        "Many Dutch verbs split in main clauses. The prefix often moves to the end: aanmelden becomes Ik meld me aan.",
      explanationZh:
        "很多荷兰语动词是可分动词。在主句里，前缀常常被拆出来放到句尾，比如 aanmelden 变成 Ik meld me aan。",
      examples: [
        "Ik vul het formulier in.",
        "Studenten melden zich online aan.",
        "De onderzoeker licht de resultaten toe."
      ],
      examplesEn: [
        "I fill in the form.",
        "Students register online.",
        "The researcher explains the results."
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
      receptiveLevel: "B1",
      productiveLevel: "B2-",
      pattern: "Er wordt + past participle.",
      explanation:
        "Use er wordt when the action is more important than the person doing it. It is common in news and formal updates.",
      explanationZh:
        "er wordt + 过去分词是常见被动结构，用在新闻和正式表达里很多。当重点是“发生了什么”而不是“谁做的”时，经常用这个结构。",
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
      receptiveLevel: "B1",
      productiveLevel: "B2",
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
  },
  materials: [
    {
      id: "transport-delay",
      title: "More reliable morning trains",
      level: "A2+-B1",
      cefrBand: ["A2+", "B1"],
      theme: "Transport",
      sourceType: "controlled-ai-training",
      sourceNote: "Prototype learner text designed for commute listening and word-order recycling.",
      recyclingDensity: "medium",
      channels: ["listening", "reading", "public"],
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
      shadowing: {
        easy: [
          "Ik ben onderweg.",
          "De trein is laat.",
          "Ik kom later.",
          "Dat is vervelend."
        ],
        normal: [
          "Mijn trein heeft vertraging.",
          "Ik kom tien minuten later.",
          "Daardoor mis ik mijn afspraak.",
          "Ik neem vandaag de trein."
        ],
        challenge: [
          "Ik kom later, omdat mijn trein vertraging heeft.",
          "Hoewel het druk is, neem ik toch de trein.",
          "Daardoor wordt mijn reis minder rustig.",
          "Het plan kan de reis betrouwbaarder maken."
        ]
      },
      speakingPrompt: {
        title: "Your commute",
        prompt: "Zou dit plan jouw reis makkelijker maken? Waarom wel of waarom niet?",
        recycledItems: ["vertraging", "onderweg", "daardoor"],
        sample:
          "Ja, ik denk dat dit plan mijn reis makkelijker maakt, omdat mijn trein vaak vertraging heeft. Daardoor kom ik soms later aan."
      },
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
      cefrBand: ["B1"],
      theme: "City life",
      sourceType: "controlled-ai-training",
      sourceNote: "Prototype city-news text designed to recycle public-policy vocabulary.",
      recyclingDensity: "high",
      channels: ["listening", "reading", "public"],
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
      shadowing: {
        easy: [
          "Ik fiets naar het centrum.",
          "Er is weinig plek.",
          "Dat is handig.",
          "Ik reageer online."
        ],
        normal: [
          "De gemeente neemt maatregelen.",
          "Er komt meer plek voor fietsen.",
          "Inwoners kunnen reageren.",
          "Het plan is afhankelijk van het budget."
        ],
        challenge: [
          "Er wordt meer ruimte gemaakt voor fietsen.",
          "De gemeente besluit om nieuwe fietsenstallingen te bouwen.",
          "Inwoners kunnen online reageren op het plan.",
          "Hoewel het plan duur is, vinden veel mensen het nuttig."
        ]
      },
      speakingPrompt: {
        title: "Bike parking in the city",
        prompt: "Vind je meer fietsenstallingen in het centrum nuttig? Waarom?",
        recycledItems: ["maatregelen", "inwoners", "afhankelijk"],
        sample:
          "Ik vind het nuttig, omdat veel inwoners met de fiets naar het centrum gaan. De maatregelen kunnen helpen, maar het resultaat is afhankelijk van het budget."
      },
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
      cefrBand: ["B1", "B2-"],
      theme: "Education",
      sourceType: "controlled-ai-training",
      sourceNote: "Prototype education-news text for academic vocabulary and output transfer.",
      recyclingDensity: "high",
      channels: ["listening", "reading", "speaking"],
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
      shadowing: {
        easy: [
          "Ik leer Nederlands.",
          "Ik oefen elke dag.",
          "Spreken is moeilijk.",
          "Luisteren helpt."
        ],
        normal: [
          "Het onderzoek gaat over taallessen.",
          "Docenten proberen iets nieuws.",
          "Scholen kunnen zich aanmelden.",
          "Ik wil mijn spreken verbeteren."
        ],
        challenge: [
          "Hoewel ik weinig tijd heb, oefen ik toch elke dag.",
          "Het doel is om spreken en luisteren te verbeteren.",
          "Docenten proberen de lessen praktischer te maken.",
          "Scholen kunnen zich aanmelden voor een proefproject."
        ]
      },
      speakingPrompt: {
        title: "Language lessons",
        prompt: "Welke oefening helpt jou meer: spreken, luisteren of lezen? Waarom?",
        recycledItems: ["onderzoek", "verbeteren", "aanmelden"],
        sample:
          "Luisteren helpt mij het meest, omdat ik lezen makkelijker vind. Ik wil mijn spreken en luisteren stap voor stap verbeteren."
      },
      question: {
        prompt: "What is the goal of the project?",
        options: [
          "To improve speaking and listening step by step",
          "To replace Dutch lessons with English lessons",
          "To make students read less"
        ],
        answer: "To improve speaking and listening step by step"
      }
    },
    {
      id: "clinic-appointment",
      title: "Changing a clinic appointment",
      level: "A2+-B1",
      cefrBand: ["A2+", "B1-"],
      theme: "Healthcare",
      sourceType: "controlled-ai-training",
      sourceNote: "Prototype practical dialogue for appointments and polite requests.",
      recyclingDensity: "medium",
      channels: ["listening", "reading", "quiet"],
      tags: ["daily", "formal", "email"],
      focusTerms: ["afspraak", "verzetten", "beschikbaar"],
      grammarPoints: ["omdat", "teInfinitive"],
      grammarSpans: [
        {
          id: "omdat",
          text: "omdat ik dan college heb",
          sentence: "Ik wil mijn afspraak graag verzetten, omdat ik dan college heb."
        },
        {
          id: "teInfinitive",
          text: "om dinsdagmiddag te komen",
          sentence: "Is het mogelijk om dinsdagmiddag te komen?"
        }
      ],
      text:
        "Ik wil mijn afspraak graag verzetten, omdat ik dan college heb. Is het mogelijk om dinsdagmiddag te komen? Ik ben na twee uur beschikbaar. Als dat niet kan, hoor ik graag welke andere momenten mogelijk zijn. Alvast bedankt voor uw hulp.",
      transcript: [
        "Ik wil mijn afspraak graag verzetten, omdat ik dan college heb.",
        "Is het mogelijk om dinsdagmiddag te komen?",
        "Ik ben na twee uur beschikbaar.",
        "Als dat niet kan, hoor ik graag welke andere momenten mogelijk zijn.",
        "Alvast bedankt voor uw hulp."
      ],
      shadowing: {
        easy: [
          "Ik heb een afspraak.",
          "Ik wil graag komen.",
          "Dinsdag kan ik.",
          "Dank u wel."
        ],
        normal: [
          "Ik wil mijn afspraak verzetten.",
          "Ik ben na twee uur beschikbaar.",
          "Is dinsdagmiddag mogelijk?",
          "Alvast bedankt voor uw hulp."
        ],
        challenge: [
          "Ik wil mijn afspraak graag verzetten, omdat ik dan college heb.",
          "Is het mogelijk om dinsdagmiddag te komen?",
          "Als dat niet kan, hoor ik graag welke andere momenten mogelijk zijn.",
          "Ik ben na twee uur beschikbaar en wacht op uw reactie."
        ]
      },
      speakingPrompt: {
        title: "Rescheduling politely",
        prompt: "Hoe zou je beleefd uitleggen dat je een afspraak wilt verzetten?",
        recycledItems: ["afspraak", "verzetten", "beschikbaar"],
        sample:
          "Ik zou zeggen: ik wil mijn afspraak graag verzetten, omdat ik dan college heb. Ik ben dinsdagmiddag beschikbaar."
      },
      question: {
        prompt: "What does the speaker want to do?",
        options: [
          "Reschedule an appointment",
          "Cancel all classes",
          "Ask for a prescription"
        ],
        answer: "Reschedule an appointment"
      }
    },
    {
      id: "research-meeting",
      title: "Explaining a research meeting",
      level: "B1-B2",
      cefrBand: ["B1+", "B2-"],
      theme: "Academic life",
      sourceType: "controlled-ai-training",
      sourceNote: "Prototype academic-life text for formal explanation and meeting vocabulary.",
      recyclingDensity: "high",
      channels: ["reading", "writing", "speaking"],
      tags: ["academic", "formal", "opinion"],
      focusTerms: ["onderzoek", "bijeenkomst", "toelichten"],
      grammarPoints: ["passive", "erWords", "separable"],
      grammarSpans: [
        {
          id: "passive",
          text: "Er wordt kort uitgelegd",
          sentence: "Er wordt kort uitgelegd hoe de data zijn verzameld."
        },
        {
          id: "erWords",
          text: "daarover vragen stellen",
          sentence: "Daarna kunnen studenten daarover vragen stellen."
        },
        {
          id: "separable",
          text: "licht de resultaten toe",
          sentence: "De onderzoeker licht de resultaten toe."
        }
      ],
      text:
        "Tijdens de bijeenkomst licht de onderzoeker de eerste resultaten toe. Er wordt kort uitgelegd hoe de data zijn verzameld. Daarna kunnen studenten daarover vragen stellen. Hoewel het onderwerp vrij complex is, probeert de spreker duidelijke voorbeelden te geven. Het doel is om de discussie toegankelijker te maken.",
      transcript: [
        "Tijdens de bijeenkomst licht de onderzoeker de eerste resultaten toe.",
        "Er wordt kort uitgelegd hoe de data zijn verzameld.",
        "Daarna kunnen studenten daarover vragen stellen.",
        "Hoewel het onderwerp vrij complex is, probeert de spreker duidelijke voorbeelden te geven.",
        "Het doel is om de discussie toegankelijker te maken."
      ],
      shadowing: {
        easy: [
          "Ik ga naar de bijeenkomst.",
          "Het onderzoek is interessant.",
          "Ik heb een vraag.",
          "De uitleg is duidelijk."
        ],
        normal: [
          "De bijeenkomst gaat over het onderzoek.",
          "De onderzoeker licht de resultaten toe.",
          "Studenten kunnen vragen stellen.",
          "Ik wil daarover meer weten."
        ],
        challenge: [
          "Tijdens de bijeenkomst licht de onderzoeker de eerste resultaten toe.",
          "Er wordt kort uitgelegd hoe de data zijn verzameld.",
          "Daarna kunnen studenten daarover vragen stellen.",
          "Hoewel het onderwerp complex is, geeft de spreker duidelijke voorbeelden."
        ]
      },
      speakingPrompt: {
        title: "Research meeting",
        prompt: "Vind je het nuttig dat studenten vragen kunnen stellen over het onderzoek? Waarom?",
        recycledItems: ["onderzoek", "bijeenkomst", "toelichten"],
        sample:
          "Ja, dat vind ik nuttig. Tijdens de bijeenkomst kunnen studenten vragen stellen, en de onderzoeker kan het onderzoek verder toelichten."
      },
      question: {
        prompt: "What happens during the meeting?",
        options: [
          "A researcher explains early results",
          "Students take a final exam",
          "A clinic changes its opening hours"
        ],
        answer: "A researcher explains early results"
      }
    },
    {
      id: "municipal-letter",
      title: "A letter about a new regulation",
      level: "B1",
      cefrBand: ["B1"],
      theme: "Public information",
      sourceType: "controlled-ai-training",
      sourceNote: "Prototype formal notice for public-service reading practice.",
      recyclingDensity: "medium",
      channels: ["reading", "quiet", "writing"],
      tags: ["formal", "policy", "news"],
      focusTerms: ["regeling", "aanvraag", "verwacht"],
      grammarPoints: ["passive", "omdat", "erWords"],
      grammarSpans: [
        {
          id: "passive",
          text: "Er wordt een nieuwe regeling ingevoerd",
          sentence: "Er wordt een nieuwe regeling ingevoerd voor bewoners die een aanvraag doen."
        },
        {
          id: "omdat",
          text: "omdat er veel drukte wordt verwacht",
          sentence: "De gemeente vraagt bewoners om op tijd te reageren, omdat er veel drukte wordt verwacht."
        },
        {
          id: "erWords",
          text: "Daarvoor is een formulier nodig",
          sentence: "Daarvoor is een formulier nodig."
        }
      ],
      text:
        "Er wordt een nieuwe regeling ingevoerd voor bewoners die een aanvraag doen. De gemeente vraagt bewoners om op tijd te reageren, omdat er veel drukte wordt verwacht. Daarvoor is een formulier nodig. Het formulier is online beschikbaar vanaf maandag. Bewoners krijgen binnen drie weken antwoord.",
      transcript: [
        "Er wordt een nieuwe regeling ingevoerd voor bewoners die een aanvraag doen.",
        "De gemeente vraagt bewoners om op tijd te reageren, omdat er veel drukte wordt verwacht.",
        "Daarvoor is een formulier nodig.",
        "Het formulier is online beschikbaar vanaf maandag.",
        "Bewoners krijgen binnen drie weken antwoord."
      ],
      shadowing: {
        easy: [
          "Ik heb een formulier nodig.",
          "Het formulier staat online.",
          "Ik doe een aanvraag.",
          "Ik wacht op antwoord."
        ],
        normal: [
          "De nieuwe regeling begint maandag.",
          "Daarvoor is een formulier nodig.",
          "Het formulier is online beschikbaar.",
          "Bewoners krijgen snel antwoord."
        ],
        challenge: [
          "Er wordt een nieuwe regeling ingevoerd.",
          "De gemeente vraagt bewoners om op tijd te reageren.",
          "Daarvoor is een formulier nodig dat online beschikbaar is.",
          "Er wordt veel drukte verwacht bij de aanvraag."
        ]
      },
      speakingPrompt: {
        title: "Public information",
        prompt: "Vind je deze regeling duidelijk genoeg? Wat zou je nog willen weten?",
        recycledItems: ["regeling", "aanvraag", "formulier"],
        sample:
          "De regeling is redelijk duidelijk, maar ik wil weten wanneer mijn aanvraag wordt behandeld. Daarvoor heb ik meer informatie nodig."
      },
      question: {
        prompt: "What do residents need for the regulation?",
        options: [
          "An online form",
          "A train ticket",
          "A new appointment with a doctor"
        ],
        answer: "An online form"
      }
    }
  ],
  writingPrompts: [
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
    },
    {
      id: "academic-update",
      title: "Email: research meeting update",
      level: "B1-B2",
      prompt:
        "Write a short Dutch email to a supervisor. Explain that you will attend a research meeting and ask whether you should prepare anything.",
      sample:
        "Beste ..., morgen woon ik de bijeenkomst over het onderzoek bij. Kunt u laten weten of ik daarvoor iets moet voorbereiden? Alvast bedankt."
    }
  ]
};
