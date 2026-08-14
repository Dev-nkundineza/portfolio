const fs = require('fs');
const path = require('path');

const repoRoot = path.resolve(__dirname, '..');
const imagesDir = path.join(repoRoot, 'src', 'assests', 'images');
const searchDir = path.join(repoRoot, 'src');

function walk(dir) {
  const files = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const it of items) {
    const full = path.join(dir, it.name);
    if (it.isDirectory()) files.push(...walk(full));
    else files.push(full);
  }
  return files;
}

function listImageFiles() {
  if (!fs.existsSync(imagesDir)) return [];
  const items = fs.readdirSync(imagesDir, { withFileTypes: true });
  const files = [];
  for (const it of items) {
    const full = path.join(imagesDir, it.name);
    if (it.isDirectory()) {
      const sub = walk(full);
      files.push(...sub);
    } else {
      files.push(full);
    }
  }
  return files.map(f => path.relative(repoRoot, f).replace(/\\/g, '/'));
}

function readAllSource() {
  const files = walk(searchDir).filter(f => /\.(js|jsx|ts|tsx|html|css|json)$/.test(f));
  const contents = files.map(f => ({ path: path.relative(repoRoot, f).replace(/\\/g, '/'), text: fs.readFileSync(f, 'utf8') }));
  return contents;
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

const images = listImageFiles();
const sources = readAllSource();
const unused = [];
for (const img of images) {
  const name = path.basename(img);
  const found = sources.some(s => s.text.includes(name) || s.text.includes(img));
  if (!found) unused.push(img);
}

if (unused.length === 0) {
  console.log('No unused image files detected.');
  process.exit(0);
}

const date = new Date().toISOString().slice(0,10).replace(/-/g,'');
const archiveDir = path.join(imagesDir, `archive-unused-${date}`);
ensureDir(archiveDir);

for (const u of unused) {
  const src = path.join(repoRoot, u);
  const filename = path.basename(u);
  const dest = path.join(archiveDir, filename);
  try {
    fs.renameSync(src, dest);
    console.log('Moved', u, '→', path.relative(repoRoot, dest));
  } catch (err) {
    console.error('Failed to move', u, err.message);
  }
}

console.log('Archived', unused.length, 'files to', path.relative(repoRoot, archiveDir));
