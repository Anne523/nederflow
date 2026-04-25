# Deploy NederFlow Without Your Computer

NederFlow is a static PWA. To use it on your phone without keeping the computer server open, deploy these files to an HTTPS static host.

## Recommended Option: Netlify Drop

This is the easiest no-code route.

1. Create or open a Netlify account.
2. Go to Netlify Drop.
3. Drag the deployment package or this project folder into the page.
4. Netlify gives you an HTTPS URL.
5. Open that URL on your phone.
6. Add it to the home screen.

## Option: Vercel

1. Create or open a Vercel account.
2. Create a new static project.
3. Upload/import this folder.
4. Keep build command empty.
5. Set output directory to `.` if asked.
6. Open the generated HTTPS URL on your phone.

## Option: GitHub Pages

1. Create a GitHub repository.
2. Upload the files in this folder.
3. In repository settings, enable Pages from the main branch root.
4. Open the generated HTTPS URL on your phone.

Chinese step-by-step instructions are available in `GITHUB_PAGES_CN.md`.

## What Works Better After HTTPS Deployment

- No computer server is needed.
- PWA install/add-to-home-screen is more reliable.
- Service worker offline caching is allowed.
- Direct microphone recording is more likely to work.

## Files Required For Deployment

At minimum:

- `index.html`
- `styles.css`
- `app.js`
- `content.js`
- `audio-manifest.js`
- `manifest.webmanifest`
- `service-worker.js`
- `assets/icon.svg`
- `assets/icon-192.png`
- `assets/icon-512.png`

If you generated real source audio, also upload:

- `assets/audio/`

Optional but useful:

- `README.md`
- `MOBILE_USE.md`
- `PRODUCT_BLUEPRINT.md`
- `.nojekyll`
- `netlify.toml`
- `vercel.json`
