# 贵志的猫 — 个人主页

基于 GitHub Pages 的个人博客与项目展示站点。
🔗 [xmgzxmgz.github.io](https://xmgzxmgz.github.io)

## 特性

- 🎨 深色 / 亮色主题，首屏前解析、无闪白，偏好写入 localStorage
- 📱 响应式，桌面与移动端分别调过排版
- ⚡ 零外部依赖：不加载任何 Web Font、CDN 或前端框架，首屏无第三方请求
- 📝 技术文章（AI、计算机视觉、数据可视化、机器学习）
- 💼 项目作品展示
- 🔍 完整 SEO：canonical、Open Graph、Twitter Card、JSON-LD、sitemap、自定义 404
- ♿️ 语义化标签、跳转链接、`:focus-visible` 焦点环、`prefers-reduced-motion`

## 目录结构

```
.
├── index.html                首页（样式内联，无额外请求）
├── 404.html                  自定义 404
├── assets/
│   ├── base.css              设计令牌 / 明暗主题 / 全局骨架
│   ├── prose.css             文章正文排版
│   ├── favicon.svg
│   └── og-cover.png          1200×630 社交分享封面
├── posts/                    文章（共用 assets/prose.css）
├── projects/                 项目页与内嵌演示
├── sitemap.xml
└── robots.txt
```

## 本地预览

```bash
python3 -m http.server 8080
# 打开 http://localhost:8080
```

> 直接双击 `index.html` 用 `file://` 打开时，以 `/` 开头的路径（如 `404.html` 里的资源引用）会失效，建议用上面的本地服务器。

## 新增一篇博文

1. 在 `posts/` 下复制任一现有文章作为模板，改标题、`.meta` 日期与标签；
2. 在 `assets/base.css` 之外无需新增样式，正文元素（`h2`、`pre`、`table`、`blockquote`、`.layer` 分层图、`arch-box`）均已定义；
3. 在 `index.html` 的 `#writing` 区块里加一张 `.card-post` 卡片（记得写 `data-cat`）；
4. 同步更新 `sitemap.xml`。

## 技术栈

原生 HTML + CSS + JavaScript，GitHub Pages 托管。

## License

MIT
