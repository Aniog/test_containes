/**
 * Vite plugin: pre-render the GeneratorsHubPage into the served HTML so
 * the page's directory is in the static source (view-source:) from the
 * first byte, not only after client-side JS hydrates.
 *
 * Uses the `transformIndexHtml` hook so Vite's HMR client injection,
 * source-map injection, and other dev-server HTML transformations still
 * run on top of the SSR'd output.
 *
 * Hydration is preserved: the same React tree renders on the client.
 * Vanilla-JS enhancements (search filter, show-all, FAQ accordion) attach
 * to the hydrated DOM in the existing initGeneratorsPage function.
 */
import fs from 'node:fs';
import path from 'node:path';

const ROUTES_TO_SSR = new Set(['/', '/generators', '/generators/']);

function shouldSsr(url) {
  if (!url) return false;
  const pathname = url.split('?')[0].split('#')[0] || '/';
  if (ROUTES_TO_SSR.has(pathname)) return true;
  if (pathname.startsWith('/generators')) return true;
  return false;
}

function generatorsPrerenderPlugin() {
  let ssrRenderPromise = null;
  const cache = new Map(); // url -> string

  async function loadRender(server) {
    if (!ssrRenderPromise) {
      ssrRenderPromise = (async () => {
        const mod = await server.ssrLoadModule('/src/entry-server.jsx');
        return mod.render;
      })();
    }
    return ssrRenderPromise;
  }

  return {
    name: 'generators-prerender',
    apply: 'serve',

    async transformIndexHtml(html, ctx) {
      try {
        if (!ctx || !ctx.server) return html;
        const reqUrl = ctx.originalUrl || ctx.filename || '';
        if (!shouldSsr(reqUrl)) return html;

        if (cache.has(reqUrl)) {
          return cache.get(reqUrl);
        }

        const render = await loadRender(ctx.server);
        const appHtml = render();
        const out = html.replace(
          '<div id="root"></div>',
          `<div id="root">${appHtml}</div>`
        );
        cache.set(reqUrl, out);
        return out;
      } catch (err) {
        // If SSR fails for any reason, fall through to the default index
        // HTML so the dev server still works. This keeps the server
        // resilient against any module that touches the DOM at import
        // time.
        console.error('[generators-prerender] SSR failed:', err && err.message);
        return html;
      }
    },
  };
}

// Production-build companion: a separate plugin instance that runs only
// during `vite build` and writes the SSR'd HTML into dist/index.html after
// the regular client bundle has been emitted. The dev server's
// prerender covers the live preview host used by the user; this build-time
// hook is a no-op for now (left for future deployment-time SSR integration
// such as Vercel/Netlify functions) and does not interfere with the
// regular client build.
export function generatorsBuildPrerenderPlugin() {
  return {
    name: 'generators-build-prerender',
    apply: 'build',
  };
}

export default generatorsPrerenderPlugin;
