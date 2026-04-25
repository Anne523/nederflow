@echo off
cd /d "%~dp0"
powershell -NoProfile -ExecutionPolicy Bypass -Command "$ErrorActionPreference='Stop'; $out='nederflow-pwa-release.zip'; if (Test-Path $out) { Remove-Item $out -Force }; $files=@('index.html','styles.css','app.js','content.js','audio-manifest.js','manifest.webmanifest','service-worker.js','assets','README.md','MOBILE_USE.md','PRODUCT_BLUEPRINT.md','DEPLOY.md','AUDIO_PIPELINE.md','generate-source-audio-openai.js','update.html','version.txt','.nojekyll','netlify.toml','vercel.json'); Compress-Archive -Path $files -DestinationPath $out -Force; Write-Host \"Created $out\""
pause
