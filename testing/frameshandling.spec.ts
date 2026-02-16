import {test, expect } from "@playwright/test";

test("Handling frames1",async({page})=>{
//launch the url - original
await page.goto("https://jqueryui.com/droppable/")
await page.waitForTimeout(2000)
//identify iframe and store by using frameLocator method
const frames = await page.frameLocator(".demo-frame");
const dragelement = frames.locator("#draggable");
const dropelement = frames.locator("#droppable");
await page.waitForTimeout(2000)
await dragelement.dragTo(dropelement);
//verify dropped text is visibale
await expect(frames.getByText("Dropped!")).toContainText("Dropped!");
await page.waitForTimeout(2000)
//click button in main page
await page.getByText("Button").click();
await page.waitForTimeout(5000)

})

test("Handling frames2",async({page})=>{
await page.goto("https://jqueryui.com/checkboxradio/")
await page.waitForTimeout(2000)
//identify frame and store by using page.framelocator method
const frames = await page.frameLocator(".demo-frame")
await expect(frames.getByText("2 Star")).toBeChecked({checked:false})
await page.waitForTimeout(2000)
//click check box inside frame
await frames.getByText("2 Star").last().click();
await expect(frames.getByText("2 Star")).toBeChecked({checked:true})
await page.waitForTimeout(5000)
const checkboxes = await frames.locator(".ui-checkboxradio-label");
const allelements = await checkboxes.count();
console.log("No of radio buttons are  "+allelements)

for(let i=0;i<allelements;i++)
{
const elementtext = await checkboxes.nth(i).textContent();
console.log("Each elemnt name "+elementtext);
}
await page.waitForTimeout(5000)

})
