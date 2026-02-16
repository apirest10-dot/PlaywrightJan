import {test, expect } from "@playwright/test";
test("Handling mouse hover",async({page})=>{
await page.goto("https://www.spicejet.com/")
//mouse hover to add on element
await page.getByText('Add-ons', { exact: true }).hover()
//assert extra seats text is visible
await expect(page.getByTestId("test-id-Extra Seat")).toBeVisible()
await page.waitForTimeout(3000)

})

test("perform multiple actions",async({page})=>{
await page.goto("https://www.flipkart.com/")
//mouse hover to fashion
await page.getByText("Fashion",{exact:true}).hover();
await page.waitForTimeout(2000);
//click all link
await page.getByText("All",{exact:true}).click();
await page.waitForTimeout(2000);
//mouse hover to Electrinic
await page.getByText("Electronics",{exact:true}).hover();
await page.waitForTimeout(2000);
    //click Apple link
await page.getByText("Apple",{exact:true}).click();
console.log(await page.title())
await page.waitForTimeout(2000);
//mouse hover baby and kids
await page.getByText("Baby & Kids",{exact:true}).hover()
//click puzzle link
await page.getByText("Puzzles",{exact:true}).click()
console.log( await page.title())
await page.waitForTimeout(2000);
})

test("Scrollin",async({page})=>{
    await page.goto("https://www.amazon.in/")
    const facebooklink = page.getByText("Facebook",{exact:true})
     //await facebooklink.click();
     await facebooklink.scrollIntoViewIfNeeded()
     await page.waitForTimeout(3000);
     await facebooklink.click()


})
test('Scroll to bottom and back to top on Amazon', async ({page}) => {
  // Step 1: Navigate to Amazon India
  await page.goto('https://www.tatacliq.com/');
  await page.waitForTimeout(5000); 

  // Step 2: Scroll to the bottom using evaluate
  await page.evaluate(() => {
    window.scrollTo(0, document.body.scrollHeight);
    
  });
  console.log('Scrolled to bottom');
  await page.waitForTimeout(2000); // Wait 2 seconds to observe scroll

  // Step 3: Scroll back to the top using evaluate
  await page.evaluate(() => {
    window.scrollTo(0, 0);
  });
  console.log('Scrolled back to top');
  await page.waitForTimeout(2000);

  await page.evaluate(() => {
        window.scrollBy(0, 1000); // Scrolls down 500 pixels
      });
      await page.waitForTimeout(2000);


});
