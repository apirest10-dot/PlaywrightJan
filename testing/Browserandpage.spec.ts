// import {test,expect} from '@playwright/test'

// // // //browser fixture
// // // test("Browser Fixture",async({browser})=>{
// // // const context = await browser.newContext()// To create a browser context
// // // const page = await browser.newPage()//To create a fresh page in browser for automation.
// // // await page.goto("https://google.com")

// // // })
// // // //using page fixture
// // test("page fixture",async({page})=>{
// //    await page.goto("https://gmail.com")
// //    await page.locator("").fill("admin")
    
// // })

// import { TIMEOUT } from "dns/promises"
// test("fisdapLogIn",async({page})=>{
// await page.goto("https://fisdap-members.jblearning.com/login")
// await page.waitForTimeout(5000)
// await page.locator("input#ua-username.form-control").fill("fisdaptest1")
// await page.waitForTimeout(5000)
// await page.locator("input#ua-password").fill("Changeme@12")
// await page.waitForTimeout(5000)
// await page.locator('button.btn.btn-lg.btn-primary.btn-block.ua-submit.text-uppercase').click({clickCount:1})
// await page.waitForTimeout(5000)
// //const isVisible = await page.isVisible('img.notification-bell');
// //await expect(page.locator("span.user_name")).toBeVisible()
// //expect(isVisible)
// await expect(page).toHaveURL('https://fisdap-members.jblearning.com/my-fisdap');

// })