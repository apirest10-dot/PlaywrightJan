import { test,expect } from "@playwright/test";

test("Handling Righ Click",async({page})=>{
    await page.goto("https://demo.guru99.com/test/simple_context_menu.html")
    await page.waitForTimeout(4000)
    //right click to mouse on element
    await page.getByText("right click me").click({button:"right"})
    await page.waitForTimeout(4000)
    
    page.on('dialog',async(dialog)=>{
       await page.waitForTimeout(4000)
       console.log(dialog.type()) 
       await page.waitForTimeout(4000)
       console.log(dialog.message())
       await page.waitForTimeout(4000)
       dialog.accept();
    })
    //click on quit on right click
    await page.getByText("Quit").click({force:true})
    await page.waitForTimeout(4000)
})
test("Double click element",async({page})=>{
    await page.goto("https://demo.guru99.com/test/simple_context_menu.html")
    await page.waitForTimeout(3000);
    page.on('dialog',async(dialog)=>{
        console.log(dialog.type())
        await page.waitForTimeout(3000);
        console.log(dialog.message())
        await page.waitForTimeout(3000);
        dialog.accept()
    })
     //double click element
    //await page.getByText("Double-Click Me To See Alert").click({clickCount:2})
    await page.getByText("Double-Click Me To See Alert").dblclick()

})