# NederFlow Product Blueprint

## Product goal

NederFlow helps an A2-B1 Dutch learner move toward C1 through adaptive, context-aware, short learning sessions. The learner has stronger reading ability than listening, speaking, and writing, so the product turns real Dutch input into repeated exposure and active output.

## Product language

- UI language: English.
- Target language: Dutch.
- Support language: English by default, with optional Chinese support for difficult grammar explanations later.

## Core principles

1. Diagnose first, then train.
2. Adjust difficulty continuously.
3. Build sessions around available time and speaking context.
4. Recycle previously learned vocabulary, usage patterns, and grammar.
5. Turn input into output through writing, speaking, and shadowing.

## Key flows

### Placement

The first-use placement check separates listening, reading, grammar, writing, and speaking. The result is a skill profile rather than a single level.

### Session builder

Before each session, the learner chooses:

- Available time: 5, 10, 15, 30, 45, or 60 minutes.
- Context: public transport, quiet mode, or speaking allowed.

The product generates a session plan from these constraints.

### Public transport mode

This mode excludes speaking and shadowing. It focuses on listening, reading, vocabulary review, and grammar micro-practice.

### Recycling engine

Saved words and grammar points receive review dates and strength scores. Future sessions favor materials that contain those items or related structures.

### Vocabulary

Vocabulary is stored as sentence-first knowledge:

- Term.
- English meaning.
- Usage note.
- Example sentences.
- Source sentence.
- Review strength and next review date.

### Grammar-on-demand

Grammar is entered from real reading or listening material. Each grammar card includes:

- The clicked structure and original source sentence.
- Explanation.
- Pattern.
- Examples.
- Micro-exercise.
- Output prompt.
- Recycling state.

### Writing

Writing begins with practical communication: messages, emails, appointments, and short opinions. Later versions should provide AI correction, natural rewriting, and B2/C1 upgrades.

### Speaking and shadowing

Speaking and shadowing appear only when the learner chooses a speaking-allowed context. Shadowing trains pronunciation, rhythm, and listening-to-speaking transfer.

## MVP scope

The v0.1 prototype uses local sample content and browser local storage. It proves the learning loop before adding AI, account sync, real news ingestion, and speech recognition.

## v0.2 content architecture

The app now separates content from app logic through `content.js`. The content library contains:

- Source policy metadata.
- Lexicon entries.
- Grammar cards.
- Reading/listening materials.
- Writing prompts.

Prototype materials are controlled training texts rather than open-web scraped content. This keeps CEFR level, vocabulary recycling, grammar targeting, and copyright risk under control. Future authentic input should come from curated lawful sources, open/licensed material, or learner-imported text.

The material selector now scores content by:

- Match with due vocabulary.
- Match with due grammar.
- Distance from the learner's current levels.
- Current learning context, such as public transport or speaking allowed.
- Recycling density and content source type.
