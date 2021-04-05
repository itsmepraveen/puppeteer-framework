const puppeteer = require('puppeteer');
const expect = require('chai').expect;
const {click,getText, getCount, shouldNotExist} = require('../lib/helpers');

describe('my first browser launch using puppeteer', () => {

    let browser;
    let page;

    before(async function() {
        browser = await puppeteer.launch({
            headless:true,
            slowMo:50,
            devtools:false
        })
        page = await browser.newPage();
        await page.setDefaultTimeout(10000);
        await page.setDefaultNavigationTimeout(20000)
    })

    after(async function(){
        browser.close();
    })

    it('should lauch the browser', async function() {
        await page.goto('http://zero.webappsecurity.com/');
        await click(page,'#signin_button');
    })

    it('get text from the page', async function() {
        await page.goto('http://example.com/');
        const text = await getText(page,'h1');
    })

    it('get count from the page', async function() {
        await page.goto('http://example.com/');
        const count = await getCount(page,'p');
    })

    it('element not visible', async function() {
    await page.goto('http://zero.webappsecurity.com/');
    await page.click('#signin_button');
    await page.waitForTimeout(1000);
    await shouldNotExist(page,'#signin_button')
    })

})