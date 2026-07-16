import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function checkFile(filepath) {
  const content = fs.readFileSync(filepath, 'utf-8');
  const imports = content.match(/from\s+['"]([^'"]+)['"]/g) || [];
  for (const imp of imports) {
    const match = imp.match(/from\s+['"]([^'"]+)['"]/);
    if (match && match[1].startsWith('@/')) {
      const rel = match[1].slice(2);
      const candidates = [
        path.resolve(__dirname, 'src', rel),
        path.resolve(__dirname, 'src', rel + '.jsx'),
        path.resolve(__dirname, 'src', rel + '.js'),
      ];
      const found = candidates.some(c => fs.existsSync(c));
      if (!found) {
        console.log('MISSING:', filepath, '->', match[1]);
      }
    }
  }
}

function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) walk(full);
    else if (full.endsWith('.jsx') || full.endsWith('.js')) checkFile(full);
  }
}

walk(path.join(__dirname, 'src'));
console.log('Done checking imports');
