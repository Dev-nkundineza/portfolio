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

const images = listImageFiles();
const sources = readAllSource();

const unused = [];
for (const img of images) {
  const name = path.basename(img);
  const found = sources.some(s => s.text.includes(name) || s.text.includes(img));
  if (!found) unused.push(img);
}

console.log('Found', images.length, 'image files under src/assests/images');
if (unused.length === 0) {
  console.log('No unused image files detected.');
} else {
  console.log('Unused image files:');
  for (const u of unused) console.log(' -', u);
}

// Exit with list count as code
process.exit(unused.length === 0 ? 0 : 0);
