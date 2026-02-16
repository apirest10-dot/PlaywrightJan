import { test,expect } from '@playwright/test';
test("take screenshot full page",async({page})=>{
    await page.goto("http://orangehrm.qedgetech.com/")
    await page.screenshot({path : 'FullPage.png'})
    })

test("take screenshot for element",async({page})=>{
    await page.goto("http://orangehrm.qedgetech.com/")
    await page.locator("#txtUsername").fill("Admin");
    await page.locator("#txtUsername").screenshot({path: 'txtUsername.png'})
     await page.locator("#txtPassword").fill("Admin");
      await page.locator("#btnLogin").click()


})
