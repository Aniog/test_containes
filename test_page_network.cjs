const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  page.on('request', request => console.log('>>', request.method(), request.url()));
  page.on('response', response => console.log('<<', response.status(), response.url()));

  try {
    await page.goto('http://localhost:12000/', { waitUntil: 'networkidle', timeout: 30000 });
    console.log('Network loaded in 30s');
  } catch (e) {
    console.error('Timeout or error:', e);
  }
  
  await browser.close();
})();
