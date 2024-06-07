
import { test, expect } from "@playwright/test"
import { describe } from "node:test"

import { SignUpForm } from "../../page-object/forms/signUpForm"
import { MainPage } from "../../page-object/pages/mainPage"

describe("Garage Page test with saved state", () => {

    let signUpForm: SignUpForm
    let mainPage: MainPage
    
    test("create user and save state form cookies", async ({ page }) => {

        signUpForm = new SignUpForm(page)
        mainPage = new MainPage(page)

        await page.goto("/")
        await mainPage.clickSignUpButton()
        await signUpForm.fieldName.fill('Eric')
        await signUpForm.fieldLastName.fill('Cartman')
        await signUpForm.fieldEmail.fill('emir+aqa@ua.fm')
        await signUpForm.fieldPassword.fill(process.env.USER_CORRECT_PASSWORD ?? '')
        await signUpForm.fieldRepeatPassword.fill('Qwerty12345')
        await signUpForm.buttonRegister.click()
        await page.context().storageState({

            path: "userState.json"
        })
    })
})