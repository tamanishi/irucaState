const puppeteer = require('puppeteer');
require('dotenv').config();

module.exports.state =
    async(state) => {
        await (async() => {
            try {
                const browser = await puppeteer.launch();
                const page = await browser.newPage();
                await page.goto(process.env.IRUCA_URL);
                await page.waitFor(2000);
                await page.click(process.env.MEMBER_ID);
                const roomStatusBtn = await page.$('button[value="' + state + '"]');
                await page.waitFor(300);
                await roomStatusBtn.click();
                await page.waitFor(1000);
                await browser.close();
            } catch(e) {
                console.log(e);
            }
        })();
    };
