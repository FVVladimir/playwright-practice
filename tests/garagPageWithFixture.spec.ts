import { expect } from "@playwright/test";
import { test } from "../fixture/garagFixture";

import { MainPage } from "../page-obgect/pages/mainPage";
import { SignUpForm } from "../page-obgect/forms/signUpForm";


test.describe(" test garag page with fixture", () => {

    let mainPage : MainPage
    let signUpForm : SignUpForm
         
    test.beforeEach(async({ garagePage, page }) => {

          mainPage = new MainPage(page)
          signUpForm = new SignUpForm(page)

            
            await page.goto("/")
            await mainPage.clickSignUpButton()        
            await expect(page.getByText('Registration')).toBeVisible()
            await signUpForm.fieldName.fill('Eric')
            await signUpForm.fieldLastName.fill('Cartman')
            await signUpForm.fieldEmail.fill('emir+aqa@ua.fm')
            await signUpForm.fieldPassword.fill(process.env.USER_CORRECT_PASSWORD ?? '')
            await signUpForm.fieldRepeatPassword.fill('Qwerty12345')
            await signUpForm.buttonRegister.click()
            await expect(page).toHaveURL('https://qauto.forstudy.space/panel/garage')
         })
})