import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import React from 'react';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import App from './src/App.jsx';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const html = renderToString(
  React.createElement(
    StaticRouter,
    { location: '/generators' },
    React.createElement(App)
  )
);

const template = fs.readFileSync(
  path.resolve(__dirname, 'dist', 'index.html'),
  'utf-8'
);

const result = template.replace(
  '<div id="root"></div>',
  `<div id="root">${html}</div>`
);

fs.writeFileSync(
  path.resolve(__dirname, 'dist', 'generators.html'),
  result
);

console.log('Static HTML generated at dist/generators.html');