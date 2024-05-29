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
           
           test.only('add car', async ({garagePage, page}) => {
            await garagePage.addCarButton.click()           
            await page.getByLabel('Brand').selectOption('1: 2')
            await page.getByLabel('Model').selectOption('13: 9')            
            await page.locator('#addCarMileage').click()
            await page.locator('#addCarMileage').fill('12345')
            await page.getByRole('button', { name: 'Add' }).click()
           })    
        //    test('remove  car', async ({garagePage, page}) => {
        //     await garagePage.addCarButton.click()           
        //     await page.getByLabel('Brand').selectOption('1: 2')
        //     await page.getByLabel('Model').selectOption('13: 9');
        //     await page.getByLabel('Mileage').click();
        //     await page.getByLabel('Mileage').fill('12345');
        //     await page.getByRole('button', { name: 'Add' }).click();
        //     await page.getByRole('button', { name: '' }).click();
        //     await page.getByRole('button', { name: 'Remove car' }).click();
        //     await page.getByRole('button', { name: 'Remove' }).click();
        //    })    
})