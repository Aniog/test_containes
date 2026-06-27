/**
 * Prerender plugin using Puppeteer
 * Launches a headless browser to render the React app and captures the HTML
 */
import { readFile, writeFile } from 'fs/promises';
import { resolve } from 'path';

export default function prerenderPlugin(options = {}) {
  const routes = options.routes || ['/'];
  
  return {
    name: 'vite-plugin-prerender',
    apply: 'build',
    
    async closeBundle() {
      try {
        // Dynamic import puppeteer
        const puppeteer = await import('puppeteer');
        
        // Start a preview server
        const { createServer } = await import('vite');
        const server = await createServer({
          root: resolve(__dirname, '..'),
          preview: true,
          server: {
            port: 4173
          }
        });
        
        await server.listen();
        console.log('Preview server started on port 4173');
        
        // Give server time to start
        await new Promise(r => setTimeout(r, 2000));
        
        const browser = await puppeteer.default.launch({
          headless: true,
          args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        
        for (const route of routes) {
          const page = await browser.newPage();
          await page.goto(`http://localhost:4173${route}`, {
            waitUntil: 'networkidle0',
            timeout: 30000
          });
          
          // Get the rendered HTML
          const html = await page.content();
          
          // Read current index.html
          const indexPath = resolve(__dirname, '../dist/index.html');
          const currentHtml = await readFile(indexPath, 'utf-8');
          
          // Extract body content from puppeteer output
          const bodyMatch = html.match(/<body>([\s\S]*)<\/body>/);
          if (bodyMatch) {
            const bodyContent = bodyMatch[1];
            
            // Replace the root div content
            let newHtml = currentHtml.replace(
              /<div id="root">[\s\S]*?<\/div>/,
              bodyContent.match(/<div id="root">[\s\S]*?<\/div>/)?.[0] || '<div id="root"></div>'
            );
            
            await writeFile(indexPath, newHtml, 'utf-8');
            console.log(`✅ Prerendered ${route} successfully`);
          }
          
          await page.close();
        }
        
        await browser.close();
        await server.close();
        
      } catch (err) {
        console.error('Prerender error:', err.message);
        console.log('Continuing without prerendering...');
      }
    }
  };
}
