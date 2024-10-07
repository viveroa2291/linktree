const puppeteer = require('puppeteer');

async function scrapeSnapFollowers() {
    const browser = await puppeteer.launch({
        headless: "new"
    });
    const page = await browser.newPage(); console.log("Creating a new page...");

    await page.goto('https://www.snapchat.com/add/adx305'); console.log("Navigating to Snapchat");

    await page.waitForSelector('[data-testid="subscribersCountText"]'); console.log("Waiting for an element...");

    const subscribersCount = await page.$eval('[data-testid="subscribersCountText"]', element => element.textContent); 

    console.log("This is the subscriber count: " + subscribersCount);
    await browser.close();
    return subscribersCount.trim();
}

module.exports = { scrapeSnapFollowers };