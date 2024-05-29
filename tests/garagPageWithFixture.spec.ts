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
           test.only('add car', async ({garagePage}) => { 

            await garagePage.addCarButton.click()           
            await garagePage.getByLabel('Brand').selectOption('1: 2')
            // await garagePage.getByLabel('Model').selectOption('13: 9');
            // await garagePage.getByLabel('Mileage').click();
            // await garagePage.getByLabel('Mileage').fill('12345');
            // await garagePage.getByRole('button', { name: 'Add' }).click();
            // await page.getByRole('button', { name: '' }).click();
            // await page.getByRole('button', { name: 'Remove car' }).click();
            // await page.getByRole('button', { name: 'Remove' }).click();

           })    
})