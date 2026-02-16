import {test, expect } from "@playwright/test";


test("counting links in webpage",async({page})=>{
    await page.goto("https://facebook.com")
const link =page.locator('a')
const linkCount = await link.count()
console.log(`Total number of links: ${linkCount}`);
for(let i=0;i<linkCount;i++)
{
const linkElement = link.nth(i);
const linkText = await linkElement.textContent();

const linkurl= await linkElement.getAttribute("href")
console.log(`Link ${i + 1}: ${linkText}`);
//console.log(linkText)
console.log(linkurl);
}
})

test("validate checkbox and radio buttons",async({page})=>{
   await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
   await page.locator("[value='radio2']").click();
   //await page.locator("[value='radio2']").check()
   await page.setChecked("[value='radio2']", true); // to check
   //how to verify check is checked or not
   await expect(page.locator("[value='radio2']")).toBeChecked();
})

test("validate checkbox ",async({page})=>{
   await page.goto('https://mail.rediff.com/cgi-bin/login.cgi')
   await page.setChecked("#remember",true);
      //await expect(page.locator("[value='radio2']")).toBeChecked();
})