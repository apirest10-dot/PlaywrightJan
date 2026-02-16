import { test,expect } from "@playwright/test";
test("Login with Id",async({page})=>{
    //launch url
    await page.goto("http://orangehrm.qedgetech.com/")
    //enter username and password
    await page.locator("form div input").first().fill("Admin")
    await page.waitForTimeout(2000)
    await page.locator("input#txtPassword").fill("Qedge123!@#")
    await page.waitForTimeout(2000)
    await page.locator("#btnLogin").click()
    await page.waitForTimeout(2000)
  
    //verify dashboard text is visible
//    await expect(page.locator("h1")).toBeVisible();
await expect(page.locator("h1")).toHaveText("Dashboard")

})


test("Login Test",async({page})=>{
await page.goto("http://orangehrm.qedgetech.com")
await page.locator("[id*='txt']").first().fill("Admin")
await page.locator("[id*='txt']").last().fill("Qedge123!@#")
await page.locator("[type*='sub']").click()
})