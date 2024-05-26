import { test as base } from '@playwright/test'

import { GaragePage } from '../page-object/pages/garagePage'
import { MainPage } from "../page-object/pages/mainPage";
import { SignUpForm } from "../page-object/forms/signUpForm";


export const test = base.extend({
    
    garagePage: async ({ page }, use) => {        
        
        let garagePage = new GaragePage(page)
        let mainPage = new MainPage(page)
        let signUpForm = new  SignUpForm(page)

        await page.goto("/")
        await mainPage.clickSignUpButton()        
        await signUpForm.fieldName.fill('Eric')
        await signUpForm.fieldLastName.fill('Cartman')
        await signUpForm.fieldEmail.fill('emir+aqa@ua.fm')
        await signUpForm.fieldPassword.fill(process.env.USER_CORRECT_PASSWORD ?? '')
        await signUpForm.fieldRepeatPassword.fill('Qwerty12345')
        await signUpForm.buttonRegister.click()
          
        await use(garagePage)

        await page.getByRole('button', { name: 'User photo My profile' }).click()
        await page.getByRole('link', { name: 'Settings', exact: true }).click()
        await page.getByRole('button', { name: 'Remove my account' }).click()
        await page.getByRole('button', { name: 'Remove' }).click()
    }
  })