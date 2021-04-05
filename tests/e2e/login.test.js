const puppeteer = require('puppeteer');
const expect = require('chai').expect;
const {click, typeText} = require('../../lib/helpers');

describe('Login Feature', () => {

    let browser;
    let page;

    before(async function() {
        browser = await puppeteer.launch({
            headless:false,
            slowMo:50,
            devtools:false,
            ignoreHTTPSErrors: true
        })
        page = await browser.newPage();
        await page.setDefaultTimeout(10000);
        await page.setDefaultNavigationTimeout(20000)
    })

    after(async function(){
        browser.close();
    })

    it('Login valid credentials', async function() {
        await page.goto('http://zero.webappsecurity.com/');
        await click(page,'#signin_button');
        await page.waitForSelector('#user_login');
        await typeText(page,'#user_login','username')
        await typeText(page,'#user_password','password')
        await click(page,'#user_remember_me');
        await click(page,'input[type=\'submit\'');
        await page.waitForSelector('#account_summary_tab');
    })

})