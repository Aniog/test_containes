import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const staticPath = path.join(root, 'public', 'generators.html');
const indexPath = path.join(root, 'index.html');

const staticHtml = fs.readFileSync(staticPath, 'utf8');
const indexHtml = fs.readFileSync(indexPath, 'utf8');

const bodyMatch = staticHtml.match(/<body[^>]*>([\s\S]*)<\/body>/i);
if (!bodyMatch) {
  throw new Error('Could not find <body> in generators.html');
}
const bodyContent = bodyMatch[1].trim();

const newIndex = indexHtml.replace(
  /<div id="root"><\/div>/,
  `<div id="root">\n${bodyContent}\n</div>`
);

fs.writeFileSync(indexPath, newIndex, 'utf8');
console.log('Injected static fallback into index.html');
