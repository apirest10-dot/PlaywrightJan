import {test, expect } from "@playwright/test";
test("Verify checkbox",async({page})=>{
   await page.goto("https://mail.rediff.com/cgi-bin/login.cgi")
   await page.waitForTimeout(5000)
   //verify checkbox is checked or unchecked
   const locator = page.locator("#remember");
   const checkbox_Status:boolean = await locator.isChecked();
   console.log(checkbox_Status)
   //assert check box is checked
   expect (await locator).toBeChecked({checked:true})
    await locator.click()
    await page.waitForTimeout(5000)

})

test("Verify checkbox1",async({page})=>{
   await page.goto("https://www.facebook.com/r.php?entry_point=login")
   await page.waitForTimeout(5000)
   //verify checkbox is checked or unchecked
   const locator = page.getByLabel('Male', { exact: true })
   const checkbox_Status:boolean = await locator.isChecked();
   console.log(checkbox_Status)
   //assert check box is checked
  await expect (locator).toBeChecked({checked:true})
   // await locator.click()
    await page.waitForTimeout(5000)

})

test("Counting radio buttons",async({page})=>{
     await page.goto("https://www.facebook.com/r.php?entry_point=login")
     await page.waitForTimeout(2000)
     //get collection of radio buttons
     const locator = page.locator("//label[@class='_58mt']")
     const all_checkboxes = await locator.count();
     console.log(`No of radio buttons: ${all_checkboxes}`)
     for(let i=0;i<all_checkboxes;i++)
     {
         const checkboxes = locator.nth(i)
         const checkbox_name = await checkboxes.textContent()
         console.log(checkbox_name)

     }

})

test("Counting radio buttons1",async({page})=>{
     await page.goto("file:///D:/R%20R%20sir%20data/checkbox_1.html")
     await page.waitForTimeout(2000)
     //get collection of radio buttons
     const locator = page.locator("//input[@type='checkbox']")
     const all_checkboxes = await locator.count();
     console.log(`No of checkbox : ${all_checkboxes}`)
     for(let i=0;i<all_checkboxes;i++)
     {
        
         const checkboxes = locator.nth(i)
         const is_checked = await locator.isChecked();
         const checkbox_name = await checkboxes.getAttribute("value")
           console.log( checkbox_name)

     }

})