import { expect } from "@playwright/test"
import { test } from "../fixture/garageFixture"


test.describe(" test garage page with fixture", () => {     
     
         test('check the text', async ({ garagePage  }) => {        
          await expect(garagePage.text).toBeVisible()
           })
         
           test('check the garage link', async ({ garagePage  }) => {        
            await expect(garagePage.garageLink).toBeVisible()
           })
         
           test('check the profile link', async ({ garagePage  }) => {        
            await expect(garagePage.profileLink).toBeVisible()
           })    
})