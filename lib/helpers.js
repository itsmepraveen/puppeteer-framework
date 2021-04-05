module.exports = {
    click: async function(page,selector) {
        try{ 
            await page.waitForSelector(selector);
            await page.click(selector);

        } catch(error) {
            throw new Error(`Unable to click on this selector ${selector}`);
        }
    },
    getText: async function(page,selector) {
        try{ 
            await page.waitForSelector(selector);
            return await page.$eval(selector, element => element.innerHTML)

        } catch(error) {
            throw new Error(`Unable to get text from this selector ${selector}`);
        }
    },
    getCount: async function(page,selector) {
        try{ 
            await page.waitForSelector(selector);
            return await page.$$eval(selector, element => element.length)

        } catch(error) {
            throw new Error(`Unable to get count from this selector ${selector}`);
        }
    },
    typeText: async function(page,selector,text) {
        try{ 
            await page.waitForSelector(selector);
            await page.type(selector,text);

        } catch(error) {
            throw new Error(`Unable to type into this selector ${selector}`);
        }
    },
    waitForText: async function(page,selector,text) {
        try{ 
            await page.waitForSelector(selector);
            await page.waitForFunction((selector,text) => {
                document.querySelector(selector).innerHTML.includes(text),
                {},
                selector,
                text
            });
        } catch(error) {
            throw new Error(`Text ${text} not found for this selector ${selector}`);
        }
    },
    shouldNotExist: async function(page,selector) {
        try{ 
            await page.waitForSelector(selector, {hidden:true});        
        } catch(error) {
            throw new Error(`Selector ${selector} is visible, but should not be`);
        }
    }
 }