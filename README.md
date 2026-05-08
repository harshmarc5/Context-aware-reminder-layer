# ⚡ TabSpark — Priority Reminder New Tab

> A smart Chrome extension that replaces your new tab page with a Google-style dashboard — with sparkling reminders that pulse every time you open a tab, so you never forget what matters.

![TabSpark Preview](https://img.shields.io/badge/Chrome-Extension-4285F4?style=for-the-badge&logo=googlechrome&logoColor=white)
![Manifest V3](https://img.shields.io/badge/Manifest-V3-34A853?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-EA4335?style=for-the-badge)

---

## 🧠 The Problem It Solves

Ever kept 20 tabs open because you were scared to forget something? TabSpark turns your new tab page into a **persistent, ambient reminder system** — no new app, no behavior change needed. Just open a tab, and your pending tasks spark at you.

---

## ✨ Features

| Feature | Description |
|---|---|
| ⚡ **Spark Animation** | Pending reminders pulse with a glowing red dot + shimmer sweep |
| 🔍 **Google Search** | Full search bar — type and press Enter, works like Google |
| 🎙️ **Voice Search** | Mic button opens Google voice search |
| 🔎 **Google Lens** | Lens button opens Google Lens for image search |
| 🤖 **AI Search** | Gradient pill button opens an AI-powered search modal |
| 📌 **Reminders** | Add tasks with title, link, and tag (Study / Job / Urgent etc.) |
| ✅ **Mark Done** | Tick a reminder — spark goes silent, card dims |
| 🔗 **Open Link** | Attach any URL to a reminder and open it with one click |
| 🏷️ **Tags** | Color-coded labels: Study, Job, Urgent, Health, Finance, Personal |
| 🔢 **Pending Badge** | Red count badge shows how many tasks are still pending |
| 🔗 **Quick Shortcuts** | One-click links: YouTube, Gmail, Maps, LinkedIn, Drive, GitHub, Claude |
| 💾 **Persistent Storage** | Everything saves via `chrome.storage.local` — survives restart |

---

## 📸 Preview

```
┌─────────────────────────────────────────────────────┐
│  Gmail    Images   ⊞   D                            │
│                                                     │
│              G  (Google logo)                       │
│                                                     │
│  [🔍 Search Google or type a URL   🎙️ 🔎 ✦ AI]    │
│                                                     │
│       [ Google Search ]  [ I'm Feeling Lucky ]      │
│                                                     │
│  ⚡ REMINDERS  1           + Add                    │
│  ┌─────────────────────────────────────────────┐   │
│  │● HPCL Mock Interview    github.com  💼 Job  │   │
│  │  ↗  ✓  ✕                                   │   │
│  └─────────────────────────────────────────────┘   │
│                                                     │
│   YT   PS   GM   MAP   LI   GD   GH   AI           │
└─────────────────────────────────────────────────────┘
```

---

## 🚀 Installation (Developer Mode)

Since this is not yet on the Chrome Web Store, install it manually:

### Step 1 — Download
```bash
git clone https://github.com/YOUR_USERNAME/tabspark.git
```
Or download the ZIP from GitHub → **Code → Download ZIP** → unzip it.

### Step 2 — Open Chrome Extensions
Open Chrome and go to:
```
chrome://extensions
```

### Step 3 — Enable Developer Mode
Toggle **Developer Mode** ON (top-right corner of the extensions page).

### Step 4 — Load the Extension
Click **"Load unpacked"** → select the `tabspark` folder (the one with `manifest.json` inside).

### Step 5 — Done ✅
Open a new tab — TabSpark is now your homepage!

---

## 📁 File Structure

```
tabspark/
├── manifest.json     # Chrome Extension config (Manifest V3)
├── newtab.html       # Full UI — Google-style layout
├── newtab.js         # All logic — search, reminders, storage, shortcuts
├── icons/            # Extension icons (placeholder)
└── README.md         # This file
```

---

## 🛠️ Tech Stack

- **Vanilla JS** — No frameworks, no dependencies
- **Chrome Extension Manifest V3** — Latest Chrome standard
- **chrome.storage.local** — Persistent data across sessions
- **Pure SVG icons** — No external image requests (CSP-safe)
- **CSS animations** — Spark pulse, shimmer sweep, card slide-in

---

## 🗺️ Roadmap

- [ ] Custom shortcut editor (add/remove your own)
- [ ] Light / Dark mode toggle
- [ ] Recurring reminders (daily / weekly)
- [ ] Weather widget
- [ ] Drag to reorder reminders
- [ ] Chrome Web Store release

---

## 🤝 Contributing

Pull requests are welcome! Here's how:

```bash
# 1. Fork the repo on GitHub
# 2. Clone your fork
git clone https://github.com/YOUR_USERNAME/tabspark.git

# 3. Create a branch
git checkout -b feature/your-feature-name

# 4. Make your changes, then commit
git add .
git commit -m "feat: describe your change"

# 5. Push and open a Pull Request
git push origin feature/your-feature-name
```

---

## 📄 License

MIT License — free to use, modify, and distribute.

---

## 💡 Inspiration

Built from a real problem: keeping 20+ tabs open all day just to not forget an HPCL mock interview. TabSpark makes "keeping important tabs open as a memory aid" a first-class feature.

---

*Made with ⚡ — because forgetting important things is expensive.*
