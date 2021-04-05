const puppeteer = require('puppeteer');

describe('device emulation', ()=>{
    let browser;
    let page;

    before(async function(){
        browser = await puppeteer.launch({
            headless: false,
            devtools:false,
            slowMo: 50

        });
        const incognito = await browser.createIncognitoBrowserContext();
        page = await incognito.newPage();
        await page.setDefaultTimeout(10000);
        await page.setDefaultNavigationTimeout(20000);
       
    })

    after(async function() {
        await browser.close();

    })

    it('open in browser', async function() {
        await page.goto('http://example.com/');
        await page.setViewport({width:1650, height:1050});
        await page.waitForTimeout(2000);

    });

    it('open in iPad', async function() {
        const tab = puppeteer.devices['iPad landscape'];
        await page.emulate(tab);
        await page.goto('http://example.com/');
        await page.waitForTimeout(2000);
    });

    it('open in iPhone', async function() {
        const iphone = puppeteer.devices['iPhone X'];
        await page.emulate(iphone);
        await page.goto('http://example.com/');
        await page.waitForTimeout(2000);
    });
})