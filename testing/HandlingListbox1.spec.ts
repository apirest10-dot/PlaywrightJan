import { test,expect } from "@playwright/test";
test("Hanling listbox with select tag",async({page})=>{
    //launch url
    await page.goto("https://practice.expandtesting.com/dropdown")
    //select option in listbo xwith value
    await page.locator("#country").selectOption("India");
    await page.waitForTimeout(3000);
    //select item in listbox with label
    await page.locator("#country").selectOption({label:"Italy"})
     await page.waitForTimeout(3000);
     //select item in listbox using index
     await page.locator("#country").selectOption({index:50})
     await page.waitForTimeout(3000);
     await page.locator("#country").selectOption({value:"HT"})
    //assert listbox having value
    await expect(page.locator("#country")).toHaveValue("HT")
    await page.waitForTimeout(3000);
   })