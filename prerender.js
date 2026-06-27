import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './src/App.jsx';

const __dirname = dirname(fileURLToPath(import.meta.url));

const distDir = resolve(__dirname, 'dist');
if (!existsSync(distDir)) {
  mkdirSync(distDir, { recursive: true });
}

const template = readFileSync(resolve(__dirname, 'index.html'), 'utf-8');

const appHtml = renderToString(React.createElement(App));

const finalHtml = template.replace(
  '<div id="root"></div>',
  `<div id="root">${appHtml}</div>`
);

writeFileSync(resolve(distDir, 'index.html'), finalHtml);
console.log('Pre-rendered dist/index.html');
