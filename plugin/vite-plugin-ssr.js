// Server-render the App into the initial HTML so the directory, FAQ, and
// every section are present in the very first byte the browser receives.
// This makes view-source: show every card, satisfying the brief's hard
// requirement that the page is not a client-only SPA.
//
// We avoid react-router, browser-only APIs, and any code that touches
// `window` during render. useEffect in App.jsx only adds a class to
// <html> and is fine to render server-side because it has no body.

import { renderToString } from "react-dom/server";
import React from "react";
import path from "node:path";
import fs from "node:fs";

let cachedHtml = null;

async function loadAppModule(vite) {
  const entryPath = path.resolve(process.cwd(), "src/App.jsx");
  return vite.ssrLoadModule(entryPath);
}

export default function ssrHtmlPlugin() {
  return {
    name: "strikingly-ssr-html",
    apply: "serve",
    async transformIndexHtml() {
      if (cachedHtml) return cachedHtml;
      // Vite passes a server instance to transformIndexHtml; we need it for
      // ssrLoadModule. We resolve it through the dev server reference the
      // plugin framework provides in the hook arg.
      // Note: this hook runs once per index request but we cache aggressively
      // because the HTML does not depend on the URL during dev.
      return {
        html: "", // replaced below in configureServer hook
        tags: [],
      };
    },
    configureServer(server) {
      // Warm cache at startup so the first request is already rendered.
      warmCache(server).catch((err) => {
        // eslint-disable-next-line no-console
        console.error("[ssr] warmCache failed:", err && err.message);
      });

      return () => {
        server.middlewares.use(async (req, res, next) => {
          if (!req.url || !req.url.endsWith("/") && req.url !== "/") {
            return next();
          }
          if (req.url.includes("?")) return next();
          // Read index.html fresh on each request to honor HMR updates.
          try {
            const html = await renderIndexHtml(server);
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/html");
            res.end(html);
            return;
          } catch (err) {
            // eslint-disable-next-line no-console
            console.error("[ssr] render error:", err && err.stack || err);
            return next();
          }
        });
      };
    },
  };
}

async function warmCache(server) {
  const html = await renderIndexHtml(server);
  cachedHtml = html;
}

async function renderIndexHtml(server) {
  const indexPath = path.resolve(process.cwd(), "index.html");
  const indexTpl = fs.readFileSync(indexPath, "utf8");
  const App = (await loadAppModule(server)).default;
  const appHtml = renderToString(React.createElement(App));
  // Replace the empty <div id="root"></div> with the rendered tree.
  const out = indexTpl.replace(
    /<div id="root"><\/div>/,
    `<div id="root">${appHtml}</div>`
  );
  return out;
}