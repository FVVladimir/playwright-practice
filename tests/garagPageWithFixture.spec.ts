import { expect } from "@playwright/test";
import { test } from "../fixture/garageFixture";

import { MainPage } from "../page-object/pages/mainPage";
import { SignUpForm } from "../page-object/forms/signUpForm";

let mainPage : MainPage
let signUpForm : SignUpForm


test.beforeEach(async({ page }) => {

   mainPage = new MainPage(page)
   signUpForm = new SignUpForm(page)
     
     await page.goto("/")
     await mainPage.clickSignUpButton()        
     await expect(page.getByText('Registration')).toBeVisible()      
  })

   // test.afterAll(async () => {
      
   // })


test.describe(" test garage page with fixture", () => {       

        test('test registration with correct data', async ({ page }) => {      
        
          await signUpForm.fieldName.fill('Eric')
          await signUpForm.fieldLastName.fill('Cartman')
          await signUpForm.fieldEmail.fill('emir+aqa@ua.fm')
          await signUpForm.fieldPassword.fill(process.env.USER_CORRECT_PASSWORD ?? '')
          await signUpForm.fieldRepeatPassword.fill('Qwerty12345')
          await signUpForm.buttonRegister.click()
          await expect(page).toHaveURL('https://qauto.forstudy.space/panel/garage')          
      })
     
         test('check the text', async ({ garagePage  }) => {        
         await garagePage.text.toBeVisible()
      })
      //    test('check the add car button', async ({ page }) => {        
        
      // })
      //    test('check the garage link', async ({ page }) => {        
          
      // })

      //   test('check th profile link', async ({ page }) => {         
      // })
})