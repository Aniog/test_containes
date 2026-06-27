import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');

/**
 * Vite plugin that pre-renders the GeneratorsHub page into the HTML response.
 * This ensures all content is in the HTML source for SEO and no-JS accessibility.
 */
export default function prerenderPlugin() {
  return {
    name: 'vite-plugin-prerender',
    enforce: 'post',

    async configureServer(viteDevServer) {
      viteDevServer.middlewares.use(async (req, res, next) => {
        // Only handle the root page
        if (req.url !== '/' && req.url !== '/index.html') {
          return next();
        }

        try {
          // Load the index.html template from project root
          const indexHtml = fs.readFileSync(
            path.resolve(projectRoot, 'index.html'),
            'utf-8'
          );

          // Load the SSR render module via Vite's SSR capability
          const { renderGeneratorsHub } = await viteDevServer.ssrLoadModule(
            '/src/ssr/render.js'
          );

          // Render the component to HTML
          const appHtml = renderGeneratorsHub();

          // Inject the rendered HTML into the root div
          let html = indexHtml.replace(
            '<div id="root"></div>',
            `<div id="root">${appHtml}</div>`
          );

          // Inject the vanilla JS client script before </body>
          const clientScript = fs.readFileSync(
            path.resolve(projectRoot, 'src/ssr/client.js'),
            'utf-8'
          );
          html = html.replace(
            '</body>',
            `<script>${clientScript}</script></body>`
          );

          // Transform the HTML with Vite (adds dev scripts, etc.)
          const transformedHtml = await viteDevServer.transformIndexHtml(
            req.url,
            html
          );

          res.setHeader('Content-Type', 'text/html');
          res.statusCode = 200;
          res.end(transformedHtml);
        } catch (e) {
          console.error('SSR prerender error:', e);
          // Fall back to normal client rendering
          next();
        }
      });
    },
  };
}
