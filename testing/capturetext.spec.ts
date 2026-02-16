import {  test,expect } from "@playwright/test";

test("Capture textcontent",async({page})=>{
    await page.goto("https://demoqa.com/automation-practice-form")
    //capture single lement text
    const singleelement =  await page.locator(".practice-form-wrapper h5").textContent()
    console.log(singleelement)
    //get all label names
    //[1,2,3,4,5,6,"TS"]
    const allemenettext = await page.locator('#userForm label').allTextContents();
    console.log(allemenettext)

})

test("facebook text",async({page})=>{
    await page.goto("https://www.facebook.com/r.php?entry_point=login")
    const pagetext =await page.getByText("Create a new account").textContent()
    console.log(pagetext)
const allements = await page.locator("//div[@class='placeholder']").allTextContents()
console.log(allements)
})