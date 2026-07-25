console.log("Started");
const puppeteer = require('puppeteer');

(async () => {
  try {
    const browser = await puppeteer.launch({
      headless: "new",
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    
    await page.goto('http://localhost:12000', { waitUntil: 'networkidle0' });
    const html = await page.evaluate(() => document.body.innerHTML);
    console.log("DOM output:", html.substring(0, 500));
    console.log("length: ", html.length);
    await browser.close();
  } catch (err) {
    console.error(err);
  }
})();
