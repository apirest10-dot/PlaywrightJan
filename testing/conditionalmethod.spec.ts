import { test,expect } from "@playwright/test";

test("Check Element hidden",async({page})=>{
    await page.goto("http://orangehrm.qedgetech.com/")
    //verify usernma etextbox is hidden or not
    const username = page.locator("#txtUsername");
    const hidden = await username.isHidden()
    console.log(hidden)
 })

test("check element disbaled",async({page})=>{
    await page.goto("https://google.com")
    //verify gmail link is disabled or enabled
    // const gmaillink = page.getByText("Gmail");
    // const elementstatus = await gmaillink.isDisabled();
    // console.log(elementstatus)

    const gmaillink = page.getByText("Demo");
    const elementstatus = await gmaillink.isDisabled();
    console.log(elementstatus)
  
})
test("check element editable",async({page})=>{
    await page.goto("http://orangehrm.qedgetech.com/")
    //verify username is Editable or not
    const username = await page.locator("#txtUsername")
    const elementEdit =  await username.isEditable()
    console.log(elementEdit)

    
  
})

test("check element editableinweb",async({page})=>{
    await page.goto("http://webapp.qedgetech.com/")

    await page.getByLabel('User Name', { exact: true }).fill("admin")
    await page.getByLabel('Password', { exact: true }).fill("master")
    await page.locator('#btnsubmit').click();
    await page.waitForTimeout(2000)
    await page.getByText('Suppliers').nth(1).click();
    await page.waitForTimeout(2000)
    await page.locator("(//span[@data-caption='Add'])[1]").click()
     await page.waitForTimeout(2000)
    //verify username is Editable or not
    const snumber = await page.locator("#x_Supplier_Number")
    const elementEdit =  await snumber.isEditable()
    console.log(elementEdit)
    await page.waitForTimeout(2000)
    
  
})

 test("check element editable1",async({page})=>{
    await page.goto("http://orangehrm.qedgetech.com/")
  //verify username textbox is enabled
  const username = page.locator("#txtUsername");
  const username_enabled =await username.isEnabled();
  console.log(username_enabled)
  //verify password textbox is enable
  const password = page.locator("#txtPassword")
  const password_Enabled = await password.isEnabled()
  console.log(password_Enabled)
  if(username_enabled==true)
  {
   await username.fill("Admin")
  }
  
  if(password_Enabled==true)
  {
    await password.fill("Qedge123!@#")
  }
 await page.locator("#btnLogin").click()
  
 })



