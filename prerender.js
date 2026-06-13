import { readFileSync, writeFileSync } from 'fs';
import { renderToString } from 'react-dom/server';
import React from 'react';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { createServer } from 'vite';

const __dirname = dirname(fileURLToPath(import.meta.url));

async function prerender() {
  // Use Vite's SSR module loading
  const vite = await createServer({
    root: __dirname,
    server: { middlewareMode: true },
    appType: 'custom',
  });

  const AppModule = await vite.ssrLoadModule('/src/App.jsx');
  const App = AppModule.default;

  const appHtml = renderToString(React.createElement(App));

  // Read the built HTML template
  const distHtml = readFileSync(resolve(__dirname, 'dist/index.html'), 'utf-8');

  const result = distHtml.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`
  );

  writeFileSync(resolve(__dirname, 'dist/index.html'), result);
  console.log('Prerendered successfully');

  await vite.close();
}

prerender().catch((err) => {
  console.error('Prerender failed:', err);
  process.exit(1);
});
