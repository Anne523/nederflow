# NederFlow Mobile Use

## Current mobile status

NederFlow is now PWA-ready and mobile-first enough for real phone testing:

- Responsive layout.
- Bottom navigation on small screens.
- App manifest.
- Service worker for offline caching when browser security allows it.
- Microphone recording in shadowing and speaking prompt modules.

## Test on your phone from this computer

1. Keep this computer and your phone on the same Wi-Fi network.
2. Double-click `start-phone-server.cmd` in this folder.
3. Keep the server window open.
4. Open the local network URL on your phone.

Example URL format:

```text
http://192.168.x.x:4173
```

The server window prints the exact phone URL. It usually looks like:

```text
http://192.168.2.3:4173
```

If the phone cannot open it:

- Make sure the phone is on the same Wi-Fi, not mobile data.
- If Windows Firewall asks, choose Allow on Private networks.
- If no firewall popup appears, right-click `allow-phone-firewall-admin.cmd` and choose Run as administrator.
- Open `http://127.0.0.1:4173` on the computer first to confirm the server is running.
- Also open `http://192.168.2.3:4173` on the computer. If that works, the server is listening correctly.
- Check whether the server window printed a different IP address.
- Some guest Wi-Fi networks block device-to-device access.
- On iPhone, check whether Vivaldi has Local Network permission in Settings.
- Try Safari/Chrome once to rule out a Vivaldi-specific local-network permission issue.

## Install as an app

The app can be installed from browsers that support PWA installation. For reliable install and offline mode, it should eventually be served over HTTPS. A later deployment to GitHub Pages, Netlify, or Vercel would solve that.

## Browser notes

- Chrome/Edge on Android: best PWA support.
- Safari on iPhone: use Share -> Add to Home Screen.
- Microphone recording may require HTTPS or a browser-approved local context.
- The `Play source` button uses the browser's built-in text-to-speech API. Some mobile browsers do not expose it on local network pages. If it says text-to-speech is unavailable, recording and replaying your own voice can still work, but source audio needs a supported browser or a later real-audio backend.
- Direct in-page microphone recording usually requires HTTPS on phones. When you open the app through `http://192.168...`, NederFlow shows `Record/upload` instead. Use it to open the phone's recorder or choose an audio file, then replay it inside the app.
