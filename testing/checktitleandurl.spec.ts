import {test, expect } from "@playwright/test";
//1.title : it returns title of the page loaded by playwright
//syntax:
//const varibale = await page.title();
//2.url: it returns url of the page which is loaded by playwright
//syntax:
//const varibale = await page.url();
test("Return title nad url",async({page})=>{
    await page.goto("https://tatacliq.com")
    //print page title and length of title
    const page_Title =await page.title();
    console.log(page_Title)
    console.log(page_Title.length)
    //print page url and lenght of url
    const page_Url = await page.url()
    console.log(page_Url)
    console.log(page_Url.length)

})