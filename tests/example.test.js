const puppeteer = require('puppeteer');
const expect = require('chai').expect;

describe('my first browser launch using puppeteer', () => {

    let browser;
    let page;

    before(async function() {
        browser = await puppeteer.launch({
            headless:false,
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
        // const browser = await puppeteer.launch(
        //     {
        //         headless:false,
        //         slowMo:50,
        //         devtools:false
        //     });
        // const page = await browser.newPage();
        
        // await page.goto('http://example.com/');
        //     await page.waitForXPath('//h1');
    //     await page.waitForSelector('h1');
    //    // await page.reload();
    //    await page.goto('http://dev.to');
    //    await page.waitForSelector('#page-content-inner');
    //    await page.goBack();
    //    await page.waitForSelector('h1');
    //    await page.goForward();
    //    await page.waitForSelector('#page-content-inner');
    //     await browser.close();

    // await page.goto('https://devexpress.github.io/testcafe/example/');
    // await page.type('#developer-name','Hello',{delay:500});
    // await page.click('#tried-test-cafe',{clickCount:1});
    // await page.select('#preferred-interface','JavaScript API');
    // await page.type('#comments','hello this is praveen', {delay:100});
    // await page.click('#submit-button');
    // await page.waitForSelector('.result-content');
    // await browser.close();

    // await page.goto('https://devexpress.github.io/testcafe/example/');
    // const title = await page.title();
    // const url = await page.url();
    
    // await page.goto('http://example.com/');
    // const text = await page.$eval('h1', element => element.textContent);
    // const count = await page.$$eval('p', element => element.length);
    // const title = await page.title();
    // const url = await page.url();
    // console.log('title'+title);
    // console.log('count'+count);
    // console.log('text'+text);
    // console.log('url'+url);

    // expect(title).to.be.a('string','Example Domains');
    // expect(count).to.equal(2);
    // expect(text).to.be.a('string','Example Domain');
    // expect(url).to.include('example.com');


    // await page.goto('http://zero.webappsecurity.com/');
    // await page.waitForSelector('#searchTerm');
    // await page.type('#searchTerm', 'hello');
    // await page.keyboard.press('Enter');
    // await page.waitForTimeout(2000);

    await page.goto('http://zero.webappsecurity.com/');
    await page.click('#signin_button');
    //await page.waitForTimeout(()=> !document.querySelector('#signin_button'));
    await page.waitForSelector('signin_button', {
        hidden:true,
        timeout:3000
    });

    //

    // browser.close();
    })

});