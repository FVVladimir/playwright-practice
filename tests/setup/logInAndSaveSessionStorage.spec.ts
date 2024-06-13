
import { test } from "@playwright/test"
import { SignUpForm } from "../../page-object/forms/signUpForm"
import { MainPage } from "../../page-object/pages/mainPage"

test.describe("Garage Page test with saved state", () => {

    let signUpForm: SignUpForm
    let mainPage: MainPage
    
    test("create user and save state form cookies", async ({ page }) => {

        signUpForm = new SignUpForm(page)
        mainPage = new MainPage(page)        

        await page.goto("/")
        await page.getByRole('button', { name: 'Sign In' }).click()
        await page.locator('#signinEmail').fill('emir+aqa@ua.fm')
        await page.locator('#signinPassword').fill('Qwerty12345')
        await page.getByRole('button', { name: 'Login' }).click()      
        await page.context().storageState({

            path: "userState.json"
        })        
    })
})