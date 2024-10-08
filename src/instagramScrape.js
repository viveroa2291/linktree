const puppeteer = require('puppeteer');

async function scrapeInstaFollowers() {
    const browser = await puppeteer.launch({
        headless: 'new'
    });
    const page = await browser.newPage();

    await page.goto('https://www.instagram.com/adxadan/');

    await page.waitForSelector('.html-span.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x1hl2dhg.x16tdsg8.x1vvkbs');
    
    // const followerCount = await page.$eval('.html-span.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x1hl2dhg.x16tdsg8.x1vvkbs', element => element.textContent);

    const multiElements = await page.$$('.html-span.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x1hl2dhg.x16tdsg8.x1vvkbs');

    if(multiElements.length >= 2) {
        const followerCount = await multiElements[1].evaluate(element => element.textContent);    
        console.log('This is the Instagram follower count: ' + followerCount);
        await browser.close();
        return followerCount.trim();
    }
    else {
        console.log('No follower count found');
        await browser.close();
        return null;
    }

}

module.exports = { scrapeInstaFollowers };