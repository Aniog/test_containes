// Server-renders the /generators page so the initial HTML contains
// every card, every link, the breadcrumb, and the FAQ — all the SEO
// content a quality rater and a screen reader need.
//
// The plugin replaces Vite's dev-server response for the matched path
// with a fully-rendered document that mounts the same React tree on
// hydration. With or without JS, the same content is visible.

import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { pathToFileURL } from 'node:url';

const MATCH_PATH = '/generators';
const MATCH_PATH_TRAILING = '/generators/';

function injectHead(html, headInjection) {
  if (!headInjection) return html;
  return html.replace('</head>', `${headInjection}\n  </head>`);
}

function injectBodyClose(html, bodyInjection) {
  if (!bodyInjection) return html;
  return html.replace('</body>', `${bodyInjection}\n  </body>`);
}

export default function ssrGeneratorsPlugin() {
  let viteRoot = '';
  return {
    name: 'strk-ssr-generators',
    apply: 'serve',
    configResolved(config) {
      viteRoot = config.root;
    },
    async configureServer(server) {
      const ssrModuleUrl = '/src/ssr-generators.entry.jsx';

      // Use a CJS require for React/react-dom/server because Vite's
      // ssrLoadModule is ESM-only and react ships CJS.
      const require = createRequire(import.meta.url);
      const rootPath = path.join(viteRoot, 'package.json');
      const rootRequire = createRequire(pathToFileURL(rootPath).href);
      const React = rootRequire('react');
      const ReactDOMServer = rootRequire('react-dom/server');

      async function renderToString(url) {
        try {
          const mod = await server.ssrLoadModule(ssrModuleUrl);
          const app = React.createElement(mod.default, { url });
          const markup = ReactDOMServer.renderToString(app);
          return { markup, mod };
        } catch (err) {
          console.error('[strk-ssr-generators] render failed:', err);
          return null;
        }
      }

      async function buildDocument(url) {
        const result = await renderToString(url);
        if (!result) return null;
        const { markup, mod } = result;

        // Load the original index.html template.
        const indexPath = path.join(viteRoot, 'index.html');
        let html = fs.readFileSync(indexPath, 'utf-8');

        // Inject SSR markup inside <div id="root">.
        html = html.replace(
          /<div id="root"><\/div>/,
          `<div id="root">${markup}</div>`,
        );

        // Build per-route head and replace any pre-existing default
        // <title> in the template. Drop favicon/link rel defaults
        // already there is fine; we just want our title + meta to win.
        const headHtml = (mod && typeof mod.getHeadHtml === 'function')
          ? mod.getHeadHtml(url)
          : '';
        html = html.replace(/<title>[^<]*<\/title>/, '');
        html = injectHead(html, headHtml);

        // Strip the default main.jsx script tag from the template so it
        // doesn't try to mount a different App on top of the SSR markup.
        // We use the dedicated /src/ssr-generators.client.js module below
        // for progressive enhancement (vanilla JS only).
        html = html.replace(
          /<script\s+type="module"\s+src="\/src\/main\.jsx"\s*><\/script>/,
          '',
        );

        // Inject the client enhancement script as a separate module so
        // it loads and progressively enhances the SSR markup.
        html = injectBodyClose(
          html,
          `<script type="module" src="/src/ssr-generators.client.js"></script>`,
        );

        return html;
      }

      server.middlewares.use(async (req, res, next) => {
        try {
          const url = req.url || '/';
          // Strip query string for matching.
          const pathname = url.split('?')[0].split('#')[0];
          if (
            pathname !== MATCH_PATH &&
            pathname !== MATCH_PATH_TRAILING
          ) {
            return next();
          }

          const documentHtml = await buildDocument(url);
          if (!documentHtml) {
            return next();
          }

          res.statusCode = 200;
          res.setHeader('Content-Type', 'text/html; charset=utf-8');
          res.end(documentHtml);
        } catch (err) {
          console.error('[strk-ssr-generators] middleware error:', err);
          next(err);
        }
      });
    },
  };
}
