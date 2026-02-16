import {test, expect } from "@playwright/test";

test("Handling multiple windows",async({page})=>{
    await page.goto("https://gmail.com")
    await page.waitForTimeout(2000)
    //wait for popup event to appear on the page without using await
    const page1 = page.waitForEvent("popup")
    //click link to open new tab in parent window
    await page.getByText("Help").click()
    await page.getByText("Privacy").last().click()
    ////create page fixture for page1 
    const newpage =await page1
    //click Community link in new page1
    await newpage.getByText("Community").nth(3).click();
    await page.waitForTimeout(2000)
    //get title in new page window and close
    console.log(await newpage.title())
     await page.waitForTimeout(2000)
     newpage.close()
      const newpage2 =await page1
     await newpage2.getByText("Technologies").first().click()
     console.log(await newpage2.title())
     await page.waitForTimeout(2000)
     //goto parent window enter email
     await page.waitForTimeout(2000)
     await page.locator("#identifierId").fill("pranga2010@gmail.com");
     await page.waitForTimeout(2000)
     //get parent title and close
     console.log(await page.title())
     await page.waitForTimeout(2000)
     page.close();

})

test('window handling by browser fixture', async ({browser})=>{

const context = await browser.newContext() 
const page = await context.newPage();

await page.goto("https://demo.automationtesting.in/Windows.html")
await page.waitForTimeout(2000)
const page1 =  context.waitForEvent('page')
    await page.waitForTimeout(2000)
await page.getByRole('button', {name :'click'}).click() 
await page.waitForTimeout(2000)
const newPage = await page1
await newPage.getByText('Downloads').click()
await expect(newPage.getByText('Selenium Clients and WebDriver Language Bindings')).toBeVisible()
await page.waitForTimeout(2000)
await page.getByText('Home').click()
await expect(page.getByPlaceholder('Email id for Sign Up')).toBeVisible()

})