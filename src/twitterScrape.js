const puppeteer = require('puppeteer');

async function scrapeTwitterFollowers() {
    const browser = await puppeteer.launch({
        headless: "new",
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();

    await page.goto('https://x.com/adan_vivero', { waitUntil: 'networkidle2'});

    // await page.waitForSelector('.css-1jxf684.r-bcqeeo.r-1ttztb7.r-qvutc0.r-poiln3', {timeout: 60000});
    await page.waitForFunction(
        `document.querySelector('.css-1jxf684.r-bcqeeo.r-1ttztb7.r-qvutc0.r-poiln3') && window.getComputedStyle(document.querySelector('.css-1jxf684.r-bcqeeo.r-1ttztb7.r-qvutc0.r-poiln3')).display !== 'none'`,
        { timeout: 60000 } // Increased timeout to 60 seconds
    );

    const followerCount = await page.$eval('.css-1jxf684.r-bcqeeo.r-1ttztb7.r-qvutc0.r-poiln3', element => element.textContent);
    console.log('This is the Twitter follower count: ' + followerCount);

    await browser.close();
    return followerCount.trim();
}

module.exports = { scrapeTwitterFollowers };