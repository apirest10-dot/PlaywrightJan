import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { DashboardPage } from '../pages/DashBoardPage'
import products from '../TestData/products.json'

let loginPage : LoginPage
let dashboardPage : DashboardPage

test.beforeEach(async ({page})=>{
    loginPage = new LoginPage(page)
    dashboardPage = new DashboardPage(page)
})

for(let data of products){
test(`Add the product to cart for ${data.productName}`,{tag:'@smoke'}, async ()=>{
    await  loginPage.launchURL(data.url)
    await loginPage.loginIntoApplication(data.username, data.password)
    await dashboardPage.searchAndAddProductToCart(data.productName)
    await expect(dashboardPage.addToCartSuccessMsg).toHaveText("Product Added To Cart")
    
})

test("Search and validate the product for"+ data.productName,{tag:['@smoke','@regression']}, async ()=>{
    await  loginPage.launchURL(data.url)
    await loginPage.loginIntoApplication(data.username, data.password)
    await dashboardPage.searchAndViewProductDetails(data.productName)
    const productText = await dashboardPage.viewPageProductName.innerText()
    await expect(productText.toLowerCase()).toBe(data.productName.toLowerCase())
})
}

// Json or Excel

// JSON - Javascript Object Notation

// let i = [10,20,30,40]

// console.log(products[0])
// console.log(products[1])
// console.log(products[2])

//console.log(products[2].productName);






// for of loop
// for(let each of products){
//     console.log(each.password);
// }

// Excel - 
// Allure -
// github
// jenkins
// AI

