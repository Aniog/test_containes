import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './src/App.jsx';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const distDir = path.resolve(__dirname, 'dist');
const templatePath = path.resolve(distDir, 'index.html');
const outputPath = path.resolve(distDir, 'generators.html');

// Read built template
let template = fs.readFileSync(templatePath, 'utf-8');

// Render the /generators route to string
const appHtml = renderToString(
  <StaticRouter location="/generators">
    <App />
  </StaticRouter>
);

// Inject into template
const html = template.replace(
  '<div id="root"></div>',
  `<div id="root">${appHtml}</div>`
);

// Ensure generators directory exists
const generatorsDir = path.resolve(distDir, 'generators');
if (!fs.existsSync(generatorsDir)) {
  fs.mkdirSync(generatorsDir, { recursive: true });
}

// Write output
fs.writeFileSync(outputPath, html, 'utf-8');
fs.writeFileSync(path.resolve(generatorsDir, 'index.html'), html, 'utf-8');

console.log('Pre-rendered /generators route to dist/generators/index.html');
console.log('Pre-rendered /generators route to dist/generators.html');