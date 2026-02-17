import { Locator, Page } from "playwright/test"
// Locators and methods  for login
export class LoginPage{
private page: Page
private username : Locator
private password : Locator
private loginButton : Locator
homePageIdentifier : Locator
errorMessage : Locator
constructor(page:Page)
{
    this.page = page
    this.username = page.locator('#txtUsername')
    this.password =page.locator('#txtPassword')
    this.loginButton = page.locator('#btnLogin')
    this.homePageIdentifier = page.locator("#content > div > div.head > h1")
    this.errorMessage = page.locator("#spanMessage")
}
//method for launching url
async launchUrl(url:string){
    await this.page.goto(url)
    await this.page.waitForTimeout(2000)

}
//metod for valid login
async validLogin(username:string,password: string)
{
   await this.username.fill(username)
   await this.password.fill(password)
   await this.loginButton.click()
   await this.page.waitForTimeout(2000)
}
async InvalidLogin(username:string,Incorrectpassword:string)
{
    await this.username.fill(username)
    await this.password.fill(Incorrectpassword)
    await this.page.waitForTimeout(2000)
    await this.loginButton.click()
    await this.page.waitForTimeout(2000)
}


}