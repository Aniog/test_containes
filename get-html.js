const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:12000/');
  await new Promise(r => setTimeout(r, 1000));
  const html = await page.content();
  console.log(html);
  await browser.close();
})();
