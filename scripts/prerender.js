// Prerender script using Vite's SSR capabilities
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '../dist');

async function prerender() {
  // 1. Build the client first
  const { build } = await import('vite');
  
  // 2. Build SSR version
  await build({
    root: path.resolve(__dirname, '..'),
    build: {
      ssr: true,
      outDir: 'dist-ssr',
      rollupOptions: {
        input: path.resolve(__dirname, '../src/entry-server.jsx'),
      },
    },
  });

  // 3. Import the SSR entry
  const { render } = await import('../dist-ssr/entry-server.js');
  const appHtml = render();

  // 4. Read the client-built index.html and inject the prerendered content
  const indexPath = path.join(distDir, 'index.html');
  let indexHtml = fs.readFileSync(indexPath, 'utf-8');
  
  indexHtml = indexHtml.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`
  );

  fs.writeFileSync(indexPath, indexHtml);
  
  // 5. Clean up SSR build
  fs.rmSync(path.resolve(__dirname, '../dist-ssr'), { recursive: true, force: true });
  
  console.log('Prerendered HTML injected into dist/index.html');
}

prerender().catch(err => {
  console.error('Prerender failed:', err);
  process.exit(1);
});
