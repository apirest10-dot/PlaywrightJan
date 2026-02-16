import {test, expect } from "@playwright/test";
const path = require('path')
test("Handling hidden elements",async({page})=>{
await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
await page.waitForTimeout(2000)
//assert element is visible or not
await expect(page.locator("#displayed-text")).toBeVisible();
await page.waitForTimeout(2000)
await page.locator("#hide-textbox").click()
await expect(page.locator("#displayed-text")).not.toBeVisible()
//await expect(page.locator("#displayed-text")).toBeHidden()
await page.waitForTimeout(2000)
await page.locator("#show-textbox").click();
//assert element is visible or not
await expect(page.locator("#displayed-text")).toBeVisible();
await page.waitForTimeout(5000)

})

test("Upload single file",async({page})=>{
await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")
await page.waitForTimeout(3000)
//setInputFiles() use this method to upload single or multiple files
await page.locator("#filesToUpload").setInputFiles("D:/MyResult.xlsx")
await expect(page.locator('#fileList li')).toContainText("MyResult")
await page.waitForTimeout(5000)
})
test("Handling multiplefiles upload",async({page})=>{
await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")
//store path of files into two varibales
const path1 = path.join(__dirname,"./TestData/MyResult.xlsx")
const path2 = path.join(__dirname,"./TestData/MyFile.xlsx")
const path3 = path.join(__dirname,"./TestData/JiraProject.csv")
await page.locator('#filesToUpload').setInputFiles([path1,path2,path3])
await page.waitForTimeout(2000)
 await expect( page.getByText('MyResult.xlsx')).toContainText("MyResult.xlsx");
 await expect ( page.getByText('MyFile.xlsx')).toContainText('MyFile.xlsx')
 await expect ( page.getByText('JiraProject.csv')).toContainText('JiraProject.csv')
const firstfile = await page.getByText('MyResult.xlsx').textContent();
const secondfile= await page.getByText('MyFile.xlsx').textContent();
const thirdfile= await page.getByText('JiraProject.csv').textContent();
console.log(firstfile+"         "+secondfile+"     "+thirdfile)
await page.waitForTimeout(5000)
     
})

test('Multiple file upload', async function({page}){

    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")
    // setInputFiles()

    const directoryPath = path.join(__dirname,'../TestData/')
    console.log(directoryPath);

    await page.locator('#filesToUpload').setInputFiles(
        ["/JanPlayWrightProject/tests/TestData/JiraProject.csv",
        "/JanPlayWrightProject/tests/TestData/MyFile.xlsx"])

    await expect(page.locator('#fileList li').first()).toContainText("JiraProject")
    await expect(page.locator('#fileList li').last()).toContainText("MyFile")


    await page.waitForTimeout(5000)

})