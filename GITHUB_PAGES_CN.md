# 用 GitHub Pages 发布 NederFlow

目标：让手机直接打开一个 HTTPS 地址使用 NederFlow，不再依赖电脑本地服务器。

## 1. 创建仓库

1. 打开 GitHub。
2. 点击右上角 `+` -> `New repository`。
3. Repository name 可以填：

```text
nederflow
```

4. 选择 `Public`。
5. 点击 `Create repository`。

## 2. 上传文件

不要直接上传 `nederflow-pwa-release.zip` 这个压缩包本身。要先解压，然后上传里面的文件。

需要上传的文件包括：

```text
index.html
styles.css
app.js
content.js
manifest.webmanifest
service-worker.js
.nojekyll
netlify.toml
vercel.json
README.md
MOBILE_USE.md
PRODUCT_BLUEPRINT.md
DEPLOY.md
assets/icon.svg
```

在 GitHub 仓库页面：

1. 点击 `Add file`。
2. 点击 `Upload files`。
3. 把解压后的文件拖进去。
4. 点击 `Commit changes`。

## 3. 开启 GitHub Pages

1. 进入仓库的 `Settings`。
2. 左侧点击 `Pages`。
3. 在 `Build and deployment` 里：
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`
4. 点击 `Save`。

## 4. 获取手机访问地址

等 1-3 分钟，GitHub Pages 会生成网址，通常是：

```text
https://你的用户名.github.io/nederflow/
```

用手机打开这个地址即可。

## 5. 添加到手机主屏幕

### iPhone Safari

1. 打开 GitHub Pages 地址。
2. 点击分享按钮。
3. 选择 `Add to Home Screen`。

### Android Chrome

1. 打开 GitHub Pages 地址。
2. 点击右上角菜单。
3. 选择 `Add to Home screen` 或 `Install app`。

## 注意

- GitHub Pages 是 HTTPS，手机录音权限会比本地 `http://192.168...` 更稳定。
- 如果更新了文件，GitHub Pages 可能需要等一两分钟才刷新。
- 如果手机页面看起来没更新，可以强制刷新，或清理该网站缓存。
