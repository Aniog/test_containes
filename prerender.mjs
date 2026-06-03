import { renderToString } from 'react-dom/server';
import React from 'react';
import { StaticRouter } from 'react-router-dom/server.js';
import GeneratorsPage from './src/pages/GeneratorsPage.jsx';
import fs from 'fs';

const html = renderToString(
  React.createElement(StaticRouter, { location: '/generators' },
    React.createElement(GeneratorsPage)
  )
);

const template = fs.readFileSync('./dist/index.html', 'utf-8');
const result = template.replace('<div id="root"></div>', `<div id="root">${html}</div>`);
fs.writeFileSync('./dist/index.html', result);
console.log('Prerendered successfully, output size:', result.length);
