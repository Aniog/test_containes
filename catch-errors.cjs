const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  
  page.on('response', resp => {
    if (!resp.ok()) {
      console.log('NET ERROR:', resp.status(), resp.url());
    }
  });

  await page.goto('http://localhost:12000', { waitUntil: 'networkidle0' });
  await browser.close();
})();
