# NederFlow v0.1

NederFlow is a mobile-friendly prototype for a personal Dutch learning coach. The interface language is English, while the target language content is Dutch.

## What is included

- Placement check split by listening, reading, grammar, and writing.
- Session builder based on available time and context.
- Public transport mode with no speaking tasks.
- Optional extensive-listening links for real public Dutch sources.
- Reading practice with clickable vocabulary.
- Inline grammar highlights inside reading text.
- Vocabulary cards with English meaning, usage, examples, and review dates.
- Active-recall vocabulary review with cloze sentences and answer checking.
- Grammar-on-demand cards with source context, English/Chinese explanation, translated examples, exercises, and output prompts.
- A simple recycling queue for words and grammar points.
- Practical writing prompts with writing feedback preview.
- Progress tracking in browser local storage.
- A separate `content.js` library with source-policy metadata and reusable materials.

## How to run

Open `index.html` in a browser. No build step or package installation is required. The page loads `content.js` first, then `app.js`.

Microphone recording depends on browser security rules. If recording is blocked when opening the file directly, run a tiny local server from this folder and open the local URL instead.

## Phone testing

For phone testing on the same Wi-Fi network:

1. Double-click `start-phone-server.cmd`.
2. Keep the server window open.
3. Open `http://YOUR-IP:4173` on the phone.

The detected Wi-Fi address during setup was `http://192.168.2.3:4173`.

If the phone cannot open the URL, use the address printed in the server window and allow Windows Firewall access on Private networks.

## Use Without Computer

Deploy the app to an HTTPS static host. See `DEPLOY.md`.
For GitHub Pages in Chinese, see `GITHUB_PAGES_CN.md`.

Fastest route:

1. Run `make-release-package.cmd`.
2. Upload `nederflow-pwa-release.zip` or the project folder to Netlify Drop, Vercel, or GitHub Pages.
3. Open the HTTPS URL on your phone.
4. Add it to your home screen.

The app is PWA-ready through `manifest.webmanifest` and `service-worker.js`. True home-screen installation and offline caching are most reliable when the app is served from HTTPS, such as a later GitHub Pages, Netlify, or Vercel deployment.

## Content strategy

The current materials are controlled training texts designed for the prototype. They are not scraped from the open web. Future versions should combine:

- AI-generated controlled practice for level matching and recycling.
- Curated lawful real-world input for authenticity.
- User-imported texts for personal study.

External listening links point to public Dutch sources such as NOS Jeugdjournaal, NPO Radio 1, and Oefenen.nl. NederFlow links out to those sources instead of copying or scraping their content. In v0.6.3, those links are deliberately treated as optional extensive listening, not as the main A2-B1 training path.

## Next implementation steps

1. Expand the controlled A2-B1 reading and writing library.
2. Add AI vocabulary and grammar explanations for unknown words.
3. Add AI writing correction.
4. Connect a database so progress syncs across devices.
5. Replace prototype placement scoring with a more rigorous adaptive test.
