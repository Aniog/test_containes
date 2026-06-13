import fs from 'fs';

const html = fs.readFileSync('index.html', 'utf8');
const css = fs.readFileSync('dist/output.css', 'utf8');

const finalHtml = html.replace('<style id="tailwind-css"></style>', '<style>' + css + '</style>');
fs.writeFileSync('dist/index.html', finalHtml);
console.log('Final static HTML generated at dist/index.html');
