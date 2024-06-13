import { test, expect } from "@playwright/test"
import { GaragePage } from "../page-object/pages/garagePage"

test.describe("garagePage test with saved state", () => {

    let garagePage: GaragePage

    test.use({ storageState: "./userState.json" })
    
    test.beforeEach(async ({page}) => {        
       
        garagePage = new GaragePage(page)
        await page.goto("panel/garage")
        
    })

    test('check the text on garage page', async () => {   

        await expect(garagePage.text).toBeVisible()
    })

    test('check the garage link', async () => {
        await expect(garagePage.garageLink).toBeVisible()
    })

    test('check the profile link', async () => {
        await expect(garagePage.profileLink).toBeVisible()
    })
})