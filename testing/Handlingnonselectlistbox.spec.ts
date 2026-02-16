import { test,expect } from "@playwright/test";

test("Handling non select listbox",async({page})=>{
    await page.goto("https://demoqa.com/select-menu")
    //identify element with div tag
    await page.locator("#withOptGroup").click()
    await page.waitForTimeout(3000)
    //select one item from listbox
    await page.locator("#react-select-2-option-0-1").click();
    await page.waitForTimeout(3000)
    await page.locator("#withOptGroup").click()
     await page.waitForTimeout(3000)
    await page.locator("#react-select-2-option-1-1").click();
    await page.waitForTimeout(3000)
})
test("Handling multilistbox with div tag",async({page})=>{
    await page.goto("https://demoqa.com/select-menu")
    await page.waitForTimeout(3000)
    //identify listbox and click
    await page.locator("div.css-2b097c-container").last().click()
    await page.waitForTimeout(3000)
    await page.locator("#react-select-4-option-3").click();
    await page.waitForTimeout(3000)
    await page.locator("#react-select-4-option-1").click()
    await page.waitForTimeout(3000)

})
test("Handling Multilistbox all items",async({page})=>{
    await page.goto("https://demoqa.com/select-menu")
    await page.waitForTimeout(3000)
    //identify listbox and click
    await page.locator("div.css-2b097c-container").last().click()
    //count no of items 
    const multioptions = await page.locator("//div[@class=' css-11unzgr']//div").count()
    console.log(`No of items ${multioptions}`)
       for(let i=0;i<multioptions;i++)
    {
         await page.waitForTimeout(3000)
        await page.locator("#react-select-4-option-"+i).click()
        
    }
     
})