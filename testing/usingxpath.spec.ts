import { test,expect } from "@playwright/test";
test("Validate Register",async({page})=>{
await page.goto("https://flights.qedgetech.com/")
await page.waitForTimeout(4000)
await page.locator("//a[text()='Register ']").click()
await page.locator("(//form[@name='submenus']//following::input)[1]").fill("testing")
await page.locator("(//form[@name='submenus']//following::input)[2]").fill("87654321")
await page.locator("(//form[@name='submenus']//following::input)[3]").fill("test234@gmail.com")
await page.locator("(//form[@name='submenus']//following::input)[5]").fill("admin123")
await page.locator("//form[@name='submenus']//following::select").selectOption("Male")
await page.waitForTimeout(4000)
await page.locator("(//form[@name='submenus']//following::input)[6]").click()
await page.locator("(//form[@name='submenus']//following::input)[6]").fill("20-12-1978")
await page.waitForTimeout(4000)
await page.locator("//form[@name='submenus']//following::input[@id='flexCheckChecked']").check()
await page.locator("(//form[@name='submenus']//following::input)[8]").click()

})

test("fisdapLogIn",async({page})=>{
await page.goto("https://fisdap-members.jblearning.com/login")
await page.waitForTimeout(5000)
await page.locator("input#ua-username.form-control").fill("fisdaptest1")
await page.waitForTimeout(5000)
await page.locator("input#ua-password").fill("Changeme@12")
await page.waitForTimeout(5000)
await page.locator('button.btn.btn-lg.btn-primary.btn-block.ua-submit.text-uppercase').click({clickCount:1})
await page.waitForTimeout(5000)
//const isVisible = await page.isVisible('img.notification-bell');
await expect(page.getByText('MyFisdap Dashboard', { exact: true })).toBeVisible({timeout:5000})
//await expect(page).toHaveURL('https://fisdap-members.jblearning.com/my-fisdap');

})
