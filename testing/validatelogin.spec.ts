            import {test, expect } from "@playwright/test";

            test("Validate valid data login",async({page})=>{
            //launch url
            await page.goto('http://orangehrm.qedgetech.com/')
            //verify login button visible
            await expect(page.locator("#btnLogin")).toBeVisible();
            const username =  page.locator("#txtUsername");
            await username.fill("Admin2");
            //verify username text having value
            //await expect(page.locator("#txtUsername")).toHaveValue("Admin1");
             //store password textbox into one varibale
            const password = await page.locator("#txtPassword")
            await password.fill("Qedge123!@#");
            //verify password value in textbox
            await expect(page.locator("#txtPassword")).toHaveValue("Qedge123!@#")
             await page.locator('[name="Submit"]').click()
            const expected ="dashboard";
            const Actual =  page.url();
            if(Actual.includes(expected))
            {
            console.log("Login success  ",expected,"      ",Actual);
            }
            else{
            //capture error message
            const errormessage = await page.locator("#spanMessage").textContent();
            console.log(errormessage,"   ",expected,"      ",Actual);
            }

            })