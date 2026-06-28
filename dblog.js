import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  
  page.on('console', msg => {
    console.log('LOG:', msg.text());
  });

  await page.goto('http://localhost:12000/#products', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 2000));
  await browser.close();
})();
