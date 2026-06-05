import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function createServer() {
  const app = express();

  // Load Vite in dev mode
  const vite = await (await import('vite')).createServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });

  // Use Vite's connect instance as middleware
  app.use(vite.middlewares);

  // SSR handler - use {path} parameter for Express v5 compatibility
  app.use('/{*path}', async (req, res, next) => {
    const url = req.originalUrl;

    // Skip non-HTML requests
    if (req.headers.accept && !req.headers.accept.includes('text/html')) {
      return next();
    }

    try {
      let template = fs.readFileSync(
        path.resolve(__dirname, 'index.html'),
        'utf-8',
      );

      template = await vite.transformIndexHtml(url, template);

      const { render } = await vite.ssrLoadModule('/src/entry-server.jsx');

      const appHtml = render(url);

      const html = template.replace(`<div id="root"></div>`, `<div id="root">${appHtml}</div>`);

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });

  app.listen(8080, '0.0.0.0', () => {
    console.log('SSR server running on http://localhost:8080');
  });
}

createServer();