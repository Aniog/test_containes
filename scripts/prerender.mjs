import { createServer } from 'vite';
import { renderToString } from 'react-dom/server';
import React from 'react';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const distDir = path.resolve(root, 'dist');

async function prerender() {
  const server = await createServer({
    root,
    server: { middlewareMode: true },
    appType: 'custom',
  });

  try {
    const { default: App } = await server.ssrLoadModule('/src/App.jsx');
    const html = renderToString(React.createElement(App));

    const indexPath = path.join(distDir, 'index.html');
    let template = fs.readFileSync(indexPath, 'utf-8');

    // Inject rendered HTML into <div id="root">
    const replaced = template.replace(
      /<div id="root"><\/div>/,
      `<div id="root">${html}</div>`
    );

    fs.writeFileSync(indexPath, replaced, 'utf-8');
    console.log('Prerender complete.');
  } finally {
    await server.close();
  }
}

prerender().catch((err) => {
  console.error(err);
  process.exit(1);
});
