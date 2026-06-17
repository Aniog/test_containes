import puppeteer from 'puppeteer';
import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST_DIR = resolve(__dirname, '..', 'dist');
const INDEX_HTML = resolve(DIST_DIR, 'index.html');

async function prerender() {
  console.log('Starting pre-rendering...');

  let html = readFileSync(INDEX_HTML, 'utf-8');

  const express = (await import('express')).default;
  const app = express();
  app.use(express.static(DIST_DIR));
  app.get('/{*splat}', (req, res) => {
    res.sendFile(resolve(DIST_DIR, 'index.html'));
  });

  const server = app.listen(0);
  const port = server.address().port;
  console.log(`Static server running on port ${port}`);

  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
    });

    const page = await browser.newPage();
    await page.goto(`http://localhost:${port}/`, { waitUntil: 'networkidle0', timeout: 30000 });

    await page.waitForSelector('h1', { timeout: 10000 });
    await new Promise(r => setTimeout(r, 2000));

    const renderedHtml = await page.content();

    await browser.close();

    const rootMatch = renderedHtml.match(/<div id="root">([\s\S]*?)<\/div>\s*<script/);
    if (rootMatch) {
      const rootContent = rootMatch[1];
      html = html.replace(
        '<div id="root"></div>',
        `<div id="root">${rootContent}</div>`
      );
      writeFileSync(INDEX_HTML, html);
      console.log('Pre-rendering complete! Content injected into index.html');
    } else {
      console.error('Could not find #root content in rendered HTML');
    }
  } catch (err) {
    console.error('Pre-rendering failed:', err);
  } finally {
    server.close();
  }
}

prerender();
