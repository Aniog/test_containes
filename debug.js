import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('BROWSER_LOG:', msg.text()));
  page.on('pageerror', err => console.log('BROWSER_ERROR:', err.toString()));
  
  await page.goto('http://localhost:12000', { waitUntil: 'networkidle0' });

  // Wait extra time.
  await new Promise(r => setTimeout(r, 4000));
  
  await browser.close();
})();