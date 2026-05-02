# LaTeX Starter Template (Not Working)

A minimal, modular LaTeX setup with auto-build, live preview, and Docker support.
Clone it, write, and hit save — everything else just works.

---

sudo apt install latexmk
sudo apt install texlive-latex-base texlive-latex-extra

## ✨ Features

- Modular structure (`sections/`, `preamble.tex`)
- Auto compile on save
- Output in `/build`
- Works locally **or** with Docker
- VS Code ready (with LaTeX Workshop)

---

## 🚀 Quick Start

### Option 1 — Local (fastest)

Make sure you have LaTeX + latexmk installed.

```bash
latexmk -pdf -pvc main.tex
```

Then open:

```
build/main.pdf
```

---

### Option 2 — Docker (no setup headaches)

```bash
docker build -t latex-template .
docker run --rm -v $(pwd):/app latex-template
```

PDF will appear in:

```
build/main.pdf
```

---

## 💻 VS Code Setup (Recommended)

Install: **LaTeX Workshop**

Then just:

- Open the folder
- Start editing `main.tex`
- Save → PDF auto builds + opens

No config needed.

---

## 📁 Project Structure

```
.
├── main.tex
├── preamble.tex
├── sections/
│   ├── intro.tex
│   └── ...
├── assets/
├── build/
├── .latexmkrc
├── Dockerfile
└── .vscode/
```

---

## 🛠 Commands

```bash
# Auto build (watch mode)
latexmk -pvc main.tex

# Clean temp files
latexmk -c

# One-time build
latexmk -pdf main.tex
```

---

## 🧠 Philosophy

This template is built for one thing:

> Write LaTeX without fighting your tools.

No bloated configs. No manual compiling. No setup pain.

---

## 🤝 Contributing

Feel free to improve it, fork it, or break it and fix it better.
