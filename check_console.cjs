const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  
  page.on('console', msg => {
    console.log(`[${msg.type()}] ${msg.text()}`);
  });
  
  page.on('pageerror', error => {
    console.log(`[pageerror] ${error.message}`);
  });

  await page.goto('http://localhost:12000', { waitUntil: 'networkidle0' });
  await browser.close();
})();
