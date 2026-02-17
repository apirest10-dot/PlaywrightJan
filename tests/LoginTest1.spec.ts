import { test,expect } from "@playwright/test"
import { LoginPage } from "../pages/LoginPage1"
import data from '../TestData/LoginJsonData.json'

// // const url : string = "http://orangehrm.qedgetech.com/"
// // const username: string = "Admin"
// // const password: string = "Qedge123!@#"
// // const incorrectPassword : string = "Test@12"
 let loginPage :LoginPage

   test.beforeEach(async ({page})=>{
  loginPage = new LoginPage(page)
    
})
for(let login of data){
test(`Check the login using valid credentials for ${login.username}`, async ()=>{
    await loginPage.launchUrl(login.url)
    await loginPage.validLogin(login.username,login.password)
      await expect(loginPage.homePageIdentifier).toBeVisible()
});

test(`Check the login using invalid credentials ${login.incorrectPassword}`, async ()=>{
    await loginPage.launchUrl(login.url)
    await loginPage.InvalidLogin(login.username, login.incorrectPassword)
    await expect(loginPage.errorMessage).toContainText("Invalid credentials")
});

}

// for (const login of data) {
//   // Use a unique title for the describe block
//   test.describe(`Login tests for user: ${login.username}`, () => {

//     test('Check valid credentials', async ({ page }) => {
//       await loginPage.launchUrl(login.url);
//       await loginPage.validLogin(login.username, login.password);
//       await expect(loginPage.homePageIdentifier).toBeVisible();
//     });

//     test('@regression Check invalid credentials', async ({ page }) => {
//       await loginPage.launchUrl(login.url);
//       await loginPage.InvalidLogin(login.username, login.incorrectPassword);
//       await expect(loginPage.errorMessage).toContainText("Invalid credentials");
//     });
//   });
// }

   






// //console.log(data)
// console.log(data.url)
// console.log(data.username)
// console.log(data.password)
// console.log(data.incorrectPassword)
