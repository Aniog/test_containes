// Setup babel to transpile JSX
require('@babel/register')({
  presets: [
    ['@babel/preset-react', { runtime: 'automatic' }],
    '@babel/preset-env',
  ],
  extensions: ['.js', '.jsx'],
  cache: false,
});

const fs = require('fs');
const path = require('path');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

// Babel register handles the transpilation
const App = require('./src/App.jsx').default;

const distDir = path.join(__dirname, 'dist');
const indexPath = path.join(distDir, 'index.html');

const html = fs.readFileSync(indexPath, 'utf-8');

// Render App to HTML string
const appHtml = ReactDOMServer.renderToString(
  React.createElement(App)
);

// Replace root div with rendered HTML
const finalHtml = html.replace(
  '<div id="root"></div>',
  `<div id="root">${appHtml}</div>`
);

fs.writeFileSync(indexPath, finalHtml);
console.log('Prerendered successfully. Content length:', finalHtml.length);
