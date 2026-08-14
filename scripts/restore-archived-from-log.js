const fs = require('fs');
const path = require('path');

const repoRoot = path.resolve(__dirname, '..');
// Path to the terminal output file we read earlier. Update if different.
const logFile = '/home/user/.vscode-server/data/User/workspaceStorage/505080ae9db096f3b9ef8c84f8566c46/GitHub.copilot-chat/chat-session-resources/b5c81ff4-acb2-438f-bd2b-99fc1eae593a/call_iKRmH8DEYUj3vB2Kkak4jZRO__vscode-1786698775043/content.txt';

if (!fs.existsSync(logFile)) {
  console.error('Log file not found:', logFile);
  process.exit(1);
}

const text = fs.readFileSync(logFile, 'utf8');
const lines = text.split(/\r?\n/);

const moves = [];
for (const line of lines) {
  const m = line.match(/^Archived\s+(\S+)\s+→\s+(\S+)/);
  if (m) {
    const orig = m[1];
    const arch = m[2];
    moves.push({ orig, arch });
  }
}

if (moves.length === 0) {
  console.log('No archived entries found in log.');
  process.exit(0);
}

for (const mv of moves) {
  const origPath = path.join(repoRoot, mv.orig);
  const archPath = path.join(repoRoot, mv.arch);
  if (!fs.existsSync(archPath)) {
    console.warn('Archive file missing:', archPath);
    continue;
  }
  const origDir = path.dirname(origPath);
  if (!fs.existsSync(origDir)) fs.mkdirSync(origDir, { recursive: true });
  try {
    fs.renameSync(archPath, origPath);
    console.log('Restored', mv.arch, '→', mv.orig);
  } catch (err) {
    console.error('Failed to restore', mv.arch, err.message);
  }
}

console.log('Restore complete.');
