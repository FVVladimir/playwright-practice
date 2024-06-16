import { test, expect } from "@playwright/test"
import { GaragePage } from "../page-object/pages/garagePage"

test.describe("garagePage test with changed request", () => {

    let garagePage: GaragePage

    test.use({ storageState: "./userState.json" })   
    
    test.beforeEach(async ({page}) => {        
       
        garagePage = new GaragePage(page)
        await page.goto('/panel/garage')
        
    })

    test('change name and last name t0 joe biden', async ({page}) => {   
        
        const req = {

            "status": "ok",
            "data":[
                {           
                    lastName : "biden",
                    name :"joe",
                    photoFilename : "default-user.png",
                    userId : 129002
            }
            ]
        } 
        await page.route("**/api/users/profile", route => route.fulfill({
            status: 200,
            body: JSON.stringify(req)
        }) )
    })   
})