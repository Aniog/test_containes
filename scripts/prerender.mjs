import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

async function prerender() {
  const distDir = path.resolve('dist');
  const outFile = path.join(distDir, 'index.html');

  // Build first
  console.log('Building...');
  const { execSync } = await import('child_process');
  execSync('npm run build', { stdio: 'inherit' });

  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://127.0.0.1:12000', { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);

  const html = await page.content();
  await browser.close();

  const rootMatch = html.match(/<div id="root">([\s\S]*?)<\/div>/);
  if (!rootMatch) {
    console.error('Could not find #root in prerendered HTML');
    process.exit(1);
  }

  const prerenderedBody = rootMatch[1];
  const originalHtml = fs.readFileSync(outFile, 'utf-8');
  const finalHtml = originalHtml.replace(
    /<div id="root"><\/div>/,
    `<div id="root">${prerenderedBody}</div>`
  );

  fs.writeFileSync(outFile, finalHtml);
  console.log('Prerendered dist/index.html');
}

prerender().catch((err) => {
  console.error(err);
  process.exit(1);
});
