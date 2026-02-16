// let loginData = {
//   url: 'https://rahulshettyacademy.com/client',
//   username: 'test7lYM@gmail.com',
//   password: 'Test@123',
//   incorrectPassword: 'Test',
//   emptyPassword: ' '
// }

//  console.log(loginData.url);
//  console.log(loginData.username);
//  console.log(loginData.password);
//  console.log(loginData.emptyPassword);

import {test, expect} from '@playwright/test'
 import { LoginPage } from '../pages/LoginPage'
import loginData from '../TestData/login.json'

let loginPage : LoginPage
test.beforeEach(async ({page})=>{
    loginPage = new LoginPage(page)
    await  loginPage.launchURL(loginData.url)
})

test("Valid Login Scenario" ,{tag:'@smoke'},async ()=>{
    await loginPage.loginIntoApplication(loginData.username, loginData.password)
    await expect(loginPage.homePageIdentifier).toBeVisible()
})

test("Invalid Login scenario", {tag:'@smoke'},async ()=>{
    await loginPage.invalidLogin(loginData.username, loginData.incorrectPassword)
    await expect(loginPage.errorMessage).toHaveText("Incorrect email or password.")
})

test("@smoke Check if the application is throwing error for empty password", async ()=>{
    await loginPage.validateEmptyPasswordScenario(loginData.username, loginData.emptyPassword)
    await expect(loginPage.emptyPassErrormsg).toBeVisible()
})


