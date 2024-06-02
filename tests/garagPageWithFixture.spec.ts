import { expect } from "@playwright/test"
import { test } from "../fixture/garageFixture"


test.describe(" test garage page with fixture", () => {     
     
         test('check the text on garage page', async ({ garagePage  }) => {        
          await expect(garagePage.text).toBeVisible()
           })
         
           test('check the garage link', async ({ garagePage  }) => {        
            await expect(garagePage.garageLink).toBeVisible()
           })
         
           test('check the profile link', async ({ garagePage  }) => {        
            await expect(garagePage.profileLink).toBeVisible()
           })    
           
           test('add cars', async ({ garagePage }) => {
            
            await garagePage.addCarButton.click()           
            await garagePage.addCarBrand.selectOption('Audi')
            await garagePage.addCarModel.selectOption('TT')            
            await garagePage.addCarMileage.click()
            await garagePage.addCarMileage.fill('12345')
            await garagePage.addButton.click()
            await garagePage.addCarButton.click()           
            await garagePage.addCarBrand.selectOption('BMW')
            await garagePage.addCarModel.selectOption('X5')            
            await garagePage.addCarMileage.click()
            await garagePage.addCarMileage.fill('12345')
            await garagePage.addButton.click()
           })    
           test('remove  cars', async ({garagePage, page}) => {
            
            await garagePage.addCarButton.click()           
            await garagePage.addCarBrand.selectOption('Audi')
            await garagePage.addCarModel.selectOption('TT')            
            await garagePage.addCarMileage.click()
            await garagePage.addCarMileage.fill('12345')
            await garagePage.addButton.click()
            await garagePage.addCarButton.click()           
            await garagePage.addCarBrand.selectOption('BMW')
            await garagePage.addCarModel.selectOption('X5')            
            await garagePage.addCarMileage.click()
            await garagePage.addCarMileage.fill('12345')
            await garagePage.addButton.click()
            await page.getByRole('button', { name: '' }).first().click()
            await garagePage.buttonRemoveCar.click()
            await page.getByRole('button', { name: 'Remove' }).click()        
            await page.getByRole('button', { name: '' })                                                                                                                                                   .click()
            await garagePage.buttonRemoveCar.click()
            await page.getByRole('button', { name: 'Remove' }).click()            
           })
           
           test('check the image car', async ({ garagePage,page  }) => {
            
            await garagePage.addCarButton.click()
            await garagePage.addCarBrand.selectOption('BMW')
            await garagePage.addCarModel.selectOption('X5')            
            await garagePage.addCarMileage.click()
            await garagePage.addCarMileage.fill('12345')
            await garagePage.addButton.click()       
            await expect(page.locator(".car-logo_img")).toBeVisible()
             })
           test('check the name and model car', async ({ garagePage, page  }) => { 
            
            await garagePage.addCarButton.click()
            await garagePage.addCarBrand.selectOption('BMW')
            await garagePage.addCarModel.selectOption('X5')            
            await garagePage.addCarMileage.click()
            await garagePage.addCarMileage.fill('12345')
            await garagePage.addButton.click() 
            await expect(page.locator(".car_name")).toHaveText("BMW X5")
             })
        //    test.only('check the mileage', async ({ garagePage, page }) => { 
            
        //     await garagePage.addCarButton.click()
        //     await garagePage.addCarBrand.selectOption('BMW')
        //     await garagePage.addCarModel.selectOption('X5')            
        //     await garagePage.addCarMileage.click()
        //     await garagePage.addCarMileage.fill('12345')
        //     await garagePage.addButton.click()
        //     // const mileage = page.getByRole('spinbutton')
        //     const mileage = page.locator('input').value
        //     console.log(mileage)
        //     await expect(page.locator("input.value")).toBe("12345")
        //      })
           
             test('check the text after deleted all cars', async ({ garagePage  }) => {        
               await expect(garagePage.text).toBeVisible()
             })
})