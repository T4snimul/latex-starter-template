const express = require("express");
const { exec } = require("child_process");
const chokidar = require("chokidar");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 8000;

const SRC = path.join(__dirname, "src");
const BUILD = path.join(__dirname, "build");

// ensure build exists
if (!fs.existsSync(BUILD)) {
  fs.mkdirSync(BUILD);
}

// serve build (PDF lives here)
app.use(express.static(BUILD));

let isBuilding = false;
let timer = null;

// -------------------
// BUILD FUNCTION
// -------------------
function build() {
  if (isBuilding) return;

  isBuilding = true;
  console.log("📦 Building LaTeX...");

  exec(
    `latexmk -pdf -interaction=nonstopmode -halt-on-error -file-line-error -output-directory=build src/main.tex`,
    (err, stdout, stderr) => {
      isBuilding = false;

      if (err) {
        console.error("❌ Build failed:\n", stderr);
        return;
      }

      console.log("✅ Build complete");
    },
  );
}

// initial build
build();

// -------------------
// WATCHER (debounced)
// -------------------
chokidar.watch(SRC, { ignoreInitial: true }).on("all", (event, file) => {
  console.log(`✏️ ${event}: ${file}`);

  clearTimeout(timer);

  timer = setTimeout(() => {
    build();
  }, 300);
});

// -------------------
// VIEWER ROUTE
// -------------------
app.get("/", (req, res) => {
  res.sendFile(path.join(SRC, "viewer.html"));
});

// -------------------
app.listen(PORT, () => {
  console.log(`🚀 http://localhost:${PORT}`);
});
