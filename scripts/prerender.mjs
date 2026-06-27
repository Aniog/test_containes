import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer as createViteServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

async function prerender() {
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
    root,
  });

  try {
    const { render } = await vite.ssrLoadModule('/src/entry-server.jsx');
    const html = await render();

    const indexHtmlPath = path.join(root, 'index.html');
    let indexHtml = fs.readFileSync(indexHtmlPath, 'utf-8');
    
    // Find the root div and replace everything between its opening and closing tag
    // Use a marker approach: find <div id="root"> and the matching </div> at the end
    const startMarker = '<div id="root">';
    const endMarker = '</div>';
    
    const startIndex = indexHtml.indexOf(startMarker);
    if (startIndex === -1) {
      throw new Error('Could not find <div id="root"> in index.html');
    }
    
    // Find the last </div> before the closing body/html tags
    const afterStart = startIndex + startMarker.length;
    const scriptTag = '<script type="module" src="/src/main.jsx"></script>';
    const scriptIndex = indexHtml.indexOf(scriptTag);
    if (scriptIndex === -1) {
      throw new Error('Could not find script tag in index.html');
    }
    
    // The root div's closing tag is the last </div> before the script tag
    const beforeScript = indexHtml.substring(0, scriptIndex);
    const lastDivClose = beforeScript.lastIndexOf(endMarker);
    if (lastDivClose === -1) {
      throw new Error('Could not find closing </div> for root element');
    }
    
    const newHtml = indexHtml.substring(0, startIndex) + 
                    startMarker + html + endMarker +
                    indexHtml.substring(lastDivClose + endMarker.length);
    fs.writeFileSync(indexHtmlPath, newHtml);
    console.log('Pre-rendered HTML injected into index.html');
  } finally {
    await vite.close();
  }
}

prerender().catch((err) => {
  console.error('Pre-render failed:', err);
  process.exit(1);
});
