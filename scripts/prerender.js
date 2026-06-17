import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// We need to use require-based babel register for JSX
async function prerender() {
  // Set up babel registration for JSX using require
  const babelRegister = require('@babel/register');
  const register = babelRegister.default || babelRegister;
  register({
    presets: ['@babel/preset-env', '@babel/preset-react'],
    extensions: ['.jsx', '.js'],
    ignore: [/node_modules/],
  });

  const React = require('react');
  const { renderToString } = require('react-dom/server');

  // Import the App component after babel is configured
  const AppModule = require('../src/App.jsx');
  const App = AppModule.default || AppModule;

  // Read the built index.html
  const distDir = path.resolve(__dirname, '../dist');
  const indexPath = path.join(distDir, 'index.html');

  if (!fs.existsSync(indexPath)) {
    console.error('index.html not found in dist/. Run "npm run build" first.');
    process.exit(1);
  }

  let indexHtml = fs.readFileSync(indexPath, 'utf-8');

  // Render the App component to HTML string
  const appHtml = renderToString(React.createElement(App));

  // Inject the rendered HTML into the #root div
  indexHtml = indexHtml.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`
  );

  // Write the modified index.html
  fs.writeFileSync(indexPath, indexHtml);

  console.log('Prerendered HTML injected into dist/index.html');
}

prerender().catch(err => {
  console.error('Prerender failed:', err);
  process.exit(1);
});
