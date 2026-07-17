const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  // Capture console messages
  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.log('CONSOLE ERROR:', msg.text());
    }
  });
  
  page.on('pageerror', error => {
    console.log('PAGE ERROR:', error.message);
  });
  
  try {
    await page.goto('https://ta-01kxrjzxh093b7sdk7n9sjzxjs-12000-f2xsejue3zraiabsax687snxs.w.modal.host/', { waitUntil: 'networkidle', timeout: 30000 });
    const content = await page.content();
    console.log('Page loaded. Content length:', content.length);
    
    // Check if React root has content
    const rootContent = await page.evaluate(() => {
      const root = document.getElementById('root');
      return root ? root.innerHTML.substring(0, 500) : 'No root element';
    });
    console.log('Root content:', rootContent);
    
  } catch (e) {
    console.log('Error:', e.message);
  }
  
  await browser.close();
})();
