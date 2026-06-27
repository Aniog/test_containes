import fs from 'fs';
import { renderToStaticMarkup } from 'react-dom/server';
import { createElement } from 'react';
import React from 'react';
// We'll use esbuild/register or something to run App.jsx, but since it's tricky, we can just fetch from the dev server

async function buildStatic() {
  try {
    const res = await fetch('http://localhost:12000/');
    const html = await res.text();
    fs.writeFileSync('./dist/index.html', html);
    console.log('Successfully wrote to dist/index.html');
  } catch (err) {
    console.error('Failed to fetch from server', err);
  }
}

if (!fs.existsSync('./dist')) {
  fs.mkdirSync('./dist');
}
buildStatic();