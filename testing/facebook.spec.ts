import{test, expect} from "@playwright/test"
test("Register",async({page})=>{
    //launch url
     await page.goto("https://facebook.com")
     await page.locator(':text("Create new account")').click()
     await page.locator("[name^='firstname']").fill("Akhilesh")
     await page.locator('input[name="lastname"]').fill("Testing")
     await page.locator("#day").selectOption("10")
     await page.waitForTimeout(1000)
     await page.locator("#month").selectOption("Dec")
     await page.waitForTimeout(1000)
     await page.locator("#year").selectOption("1978")
     await page.waitForTimeout(1000)
     await page.locator('[name="sex"]').nth(1).check()
     await page.waitForTimeout(1000)
     await page.locator("[name='reg_email__']").fill("pranga2010@gmail.com")
     await page.locator('[name="reg_passwd__"]').fill("test@#$")
     await page.locator("[name*='websubmit']").click()

})

