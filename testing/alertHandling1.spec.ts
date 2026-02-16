import {test, expect } from "@playwright/test";
test("Handliung alert",async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    await page.waitForTimeout(3000)
    page.on('dialog',async(dialog)=>{
        const alerttype = dialog.type()
        console.log("alert type  "+alerttype)
        const alert_message = dialog.message()
        console.log(alert_message)
        dialog.accept()
    })
    await page.getByText('Click for JS Alert', { exact: true }).click()
    await page.waitForTimeout(3000)
    await expect(page.locator("#result")).toContainText("You successfully clicked an alert")
    await page.waitForTimeout(3000)
})

test("Handling confirm dialog",async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    //register to dialog
    page.on('dialog',async(dialog)=>{
        //return type of alert
        console.log(dialog.type())
        //print dialog message
        console.log(dialog.message())
           await page.waitForTimeout(5000)
        //click cancel button
        dialog.dismiss()

    })
    //click for js confirm
    await page.getByText("Click for JS Confirm").click()
    await page.waitForTimeout(5000)
    //assert text is displayed
    await expect(page.locator("#result")).toContainText("You clicked: Cancel")
    await page.waitForTimeout(5000)
    //capture text
    const elementText = await page.locator("#result").textContent();
    console.log(elementText)
    await page.waitForTimeout(5000)
})
test("Handling Prompt",async({page})=>{
     await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
     await page.waitForTimeout(5000)
    //register to dialog
    page.on('dialog',async(dialog)=>{
        //return type of alert
        console.log(dialog.type())
        //return message
        console.log(dialog.message())
        await page.waitForTimeout(5000)
        dialog.accept("Ranga")
        await page.waitForTimeout(5000)
                
    })
    //click for js prompt
    await page.getByText("Click for JS Prompt").click()
    await page.waitForTimeout(5000)
    const element = await page.locator("#result");
    await expect(element).toBeVisible();
    const textmessage = await element.textContent();
    console.log(textmessage);
})