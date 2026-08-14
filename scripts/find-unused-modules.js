const fs = require('fs');
const path = require('path');

const repoRoot = path.resolve(__dirname, '..');
const srcDir = path.join(repoRoot, 'src');

function walk(dir) {
  const files = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const it of items) {
    const full = path.join(dir, it.name);
    if (it.isDirectory()) {
      if (['node_modules', 'build', 'assests/images/archive-unused-20260814', '.git'].includes(it.name)) continue;
      files.push(...walk(full));
    } else {
      files.push(full);
    }
  }
  return files;
}

function listSourceFiles() {
  const all = walk(srcDir);
  return all.filter(f => /\.(js|jsx|ts|tsx|css)$/.test(f));
}

function relative(p) { return path.relative(repoRoot, p).replace(/\\/g,'/'); }

const files = listSourceFiles();
const fileContents = files.map(f => ({ path: relative(f), text: fs.readFileSync(f,'utf8') }));

// Candidate modules: js/jsx/css files under src (excluding index files and entry points)
const candidates = files.filter(f => {
  const base = path.basename(f);
  if (/\.(test)\./.test(base)) return false;
  // keep main entry and app
  if (['App.js','index.js','serviceWorker.js','reportWebVitals.js'].includes(base)) return false;
  return true;
}).map(relative);

const unused = [];
for (const c of candidates) {
  const name = path.basename(c);
  // search for imports/requires or direct mentions in other files
  const found = fileContents.some(fc => {
    if (fc.path === c) return false;
    // check import by path or by filename
    if (fc.text.includes(name)) return true;
    // check for path import
    const p1 = c.replace(/src\//, '');
    if (fc.text.includes(p1)) return true;
    return false;
  });
  if (!found) unused.push(c);
}

console.log('Scanned', files.length, 'source files.');
if (unused.length === 0) {
  console.log('No unused modules detected.');
  process.exit(0);
}

console.log('Unused modules:');
unused.forEach(u => console.log(' -', u));

// Archive them
const archiveDir = path.join(srcDir, `archive-unused-modules-${new Date().toISOString().slice(0,10).replace(/-/g,'')}`);
if (!fs.existsSync(archiveDir)) fs.mkdirSync(archiveDir);
for (const u of unused) {
  const src = path.join(repoRoot, u);
  const dest = path.join(archiveDir, path.basename(u));
  try {
    fs.renameSync(src, dest);
    console.log('Archived', u, '→', relative(dest));
  } catch (err) {
    console.error('Failed to archive', u, err.message);
  }
}
console.log('Archived', unused.length, 'modules to', relative(archiveDir));
