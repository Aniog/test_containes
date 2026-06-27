import { renderToString } from 'react-dom/server';
import React from 'react';
import path from 'path';
import fs from 'fs';

const VIRTUAL_ID = 'virtual:ssr-app';

export default function ssrPlugin() {
  return {
    name: 'strikingly-ssr',
    enforce: 'pre',
    resolveId(id) {
      if (id === VIRTUAL_ID) return VIRTUAL_ID;
      return null;
    },
    load(id) {
      if (id === VIRTUAL_ID) {
        return `import App from '${path.resolve(process.cwd(), 'src/App.jsx').replace(/\\/g, '/')}';
export default App;`;
      }
      return null;
    },
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url !== '/' && !req.url.startsWith('/?') && req.url !== '/index.html') {
          return next();
        }
        if (req.url.startsWith('/@') || req.url.startsWith('/src/') || req.url.startsWith('/node_modules/')) {
          return next();
        }
        try {
          const indexHtml = fs.readFileSync(path.resolve(process.cwd(), 'index.html'), 'utf-8');
          const { default: App } = await server.ssrLoadModule(VIRTUAL_ID);
          const appHtml = renderToString(React.createElement(App));
          const html = indexHtml.replace(
            '<div id="root"></div>',
            `<div id="root">${appHtml}</div>`
          );
          res.statusCode = 200;
          res.setHeader('Content-Type', 'text/html');
          res.end(html);
        } catch (err) {
          console.error('[ssr] error:', err);
          next();
        }
      });
    },
  };
}
