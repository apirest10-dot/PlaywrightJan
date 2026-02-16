import { test,expect } from "@playwright/test";

test("Using builtinLocators",async({page})=>{
await page.goto("https://facebook.com/")

const element = page.getByRole('button', { name: 'Create new account' })
 await element.click()
const element2 = page.getByRole("textbox",{name:'First name'})
await element2.fill("akhilesh")
await page.waitForTimeout(2000)
const sname = page.getByRole('textbox', { name: 'Surname' })
await sname.fill("Selenium")
const bday = page.getByTitle("Day")
await bday.selectOption("20");
await page.waitForTimeout(2000)
const bmonth = page.getByRole("combobox",{name:"Month"})
await bmonth.selectOption("Mar")
await page.waitForTimeout(2000)
const byear =page.getByLabel("Year")
 await byear.selectOption("1987")
 await page.waitForTimeout(2000)
 const radibtn = page.getByLabel("Male",{exact:true})
 await radibtn.check();
 const mnumber = page.getByLabel('Mobile number or email address')
 await mnumber.fill("pranga2010")
 const pass = page.getByRole('textbox', { name: 'New password' })
 await pass.fill("test23455")
 await page.waitForTimeout(2000)
 const button = page.getByRole('button', { name: 'Sign up' })
 await button.click()
})