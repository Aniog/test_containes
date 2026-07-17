const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });
  
  page.on('pageerror', error => {
    consoleErrors.push('PAGE ERROR: ' + error.message);
  });
  
  try {
    await page.goto('https://ta-01kxrjzxh093b7sdk7n9sjzxjs-12000-f2xsejue3zraiabsax687snxs.w.modal.host/', { waitUntil: 'domcontentloaded', timeout: 30000 });
    await page.waitForTimeout(3000);
    
    console.log('Console errors:', consoleErrors.length > 0 ? consoleErrors : 'None');
    
    const html = await page.evaluate(() => document.body.innerHTML.substring(0, 2000));
    console.log('Body HTML:', html);
    
  } catch (e) {
    console.log('Error:', e.message);
  }
  
  await browser.close();
})();
