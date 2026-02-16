import { test,expect } from "@playwright/test";

test("counting items",async({page})=>{
    await page.goto("https://www.ebay.com/")
    //store listbox into one varibale
    const listbox = await page.locator("#gh-cat");
    //get all items in listbox with option tag
  const options = await listbox.locator("option").count()
    // const options = await listbox.locator("option").count();
    console.log(`Options in listbox ${options}`)
    const all_items = await listbox.allTextContents();
//assert item count in listbox
await expect(listbox).toHaveCount(options)

})

test('Print all items in a list box', async ({ page }) => {
  await page.goto('https://www.ebay.com/'); // Replace with your actual URL

  // Get all option elements within the select element
  const options = await page.locator('#gh-cat').all();

  console.log('List box items:');
  
  // Iterate through the options and print their text content
  for (const option of options) {
    const text = await option.textContent();
    console.log(text);
  }
});



test("get all items from listbox",async({page})=>{
  await page.goto("https://www.ebay.com/")
  //get all optins in listbox
  await page.locator("#gh-cat").click()
  await page.waitForTimeout(2000)
  const alloptions = await page.locator("#gh-cat").all();
  for (const each of alloptions) {
    {
      console.log(await each.textContent())
    }
    }
})
test("Ebay printvaluesindd", async ({page})=>{
await page.goto("https://www.ebay.com/")
await page.locator("select[name='_sacat']").click()
const counofalldd=await page.locator("#gh-cat option")
const countcheck=await counofalldd.count()
 console.log(countcheck)
 for(let i=0;i<countcheck;i++){
 const printallddvalues=await counofalldd.nth(i).textContent()
console.log(`Value: ${i+1} ${printallddvalues}`)
}
})

test("Handling Multi listboxes",async({page})=>{
  await page.goto("https://demoqa.com/select-menu")
  await page.waitForTimeout(2000)
  //count no of items
  const multilist = await page.locator("#cars");
  const alloptions = await multilist.locator("option");
  const all_items = await alloptions.count()
  console.log("No of items are::"+all_items)
   await page.waitForTimeout(2000)
  //select items in multi listbox with value
  await page.locator("#cars").selectOption(["volvo","opel","audi"])
  await page.waitForTimeout(2000)
  //select item in listbox with label
  await page.locator("#cars").selectOption([{label:"Saab"},{label:"Audi"},{label:"Volvo"}])
  await page.waitForTimeout(2000)
  //select items in listbox with index
  await page.locator("#cars").selectOption([{index:0},{index:3}])
  await page.waitForTimeout(2000)
})

test("Handling MultiListbox",async({page})=>{
  await page.goto("file:///D:/MultiListboxHtmlpage.html")
  await page.waitForTimeout(3000)
  //count no of items in listbox
  const multilistbox = await page.locator("select[name='multiSelection']");
  const alloptions = await multilistbox.locator("option")
  const all_items = await alloptions.count()
    console.log("No of items are::"+all_items)
  await page.locator("select[name='multiSelection']").selectOption(["green","blue","yellow"])
  await page.waitForTimeout(3000)
  await page.locator("select[name='multiSelection']").selectOption([{label:"purple"},{label:"black"},{label:"golden"}])
  await page.waitForTimeout(3000)
  await page.locator("select[name='multiSelection']").selectOption([{index:0},{index:8},{index:4}])
  await page.waitForTimeout(3000)
     const eactitem = await multilistbox.textContent();
    console.log(`Each Item name ${eactitem}`)
  })

  test("Seelcting all Items in Multilistbox",async({page})=>{
//launch url
await page.goto("https://demoqa.com/select-menu")
await page.waitForTimeout(3000)
//idetify multi select dropdown and click
await page.locator('div.css-2b097c-container').last().click()
await page.waitForTimeout(3000)
//count items inside listbox
const elements = await page.locator("//div[@class=' css-11unzgr']//div").count()
console.log("No of items in Listbox  "+elements)
for(let i=0;i<elements;i++)
{
    await page.waitForTimeout(1000)
    await page.locator('#react-select-4-option-'+i).click();
    await page.waitForTimeout(3000)
}
})
