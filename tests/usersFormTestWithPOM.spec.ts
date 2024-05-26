import { test, expect} from '@playwright/test';
import { MainPage } from '../page-object/pages/mainPage';
import { SignUpForm } from '../page-object/forms/signUpForm';
import { SignInForm } from '../page-object/forms/signInForm';
import { OuterHeader } from '../page-object/component/outerHeader';
import { InnerHeader } from '../page-object/component/innerHeader';
import { GaragePage } from '../page-object/pages/garagePage';


test.beforeEach( async ({page}) => {
    console.log("holla i am a global before each")
})
test.afterAll( async ({page}) => {
    console.log("holla i am a global after all")
})



test.describe("Registration user", () => {    
    
    let mainPage : MainPage
    let signUpForm : SignUpForm
    
    test.beforeEach(async ({ page }) => {        
        
        mainPage = new MainPage(page)
        signUpForm = new SignUpForm(page)        
        
        await page.goto('/')
        await mainPage.clickSignUpButton()        
        await expect(page.getByText('Registration')).toBeVisible()
        console.log("holla i am before each from registration user")
    });

    test('test registration with correct data', async ({ page }) => {      
        
        await signUpForm.fieldName.fill('Eric')
        await signUpForm.fieldLastName.fill('Cartman')
        await signUpForm.fieldEmail.fill('emir+aqa@ua.fm')
        await signUpForm.fieldPassword.fill(process.env.USER_CORRECT_PASSWORD ?? '')
        await signUpForm.fieldRepeatPassword.fill('Qwerty12345')
        await signUpForm.buttonRegister.click()
        await expect(page).toHaveURL('https://qauto.forstudy.space/panel/garage')
    })
})

test.describe('Registation form test', () => {

    let mainPage : MainPage
    let signUpForm : SignUpForm

    test.beforeEach(async ({ page }) => {
        
        signUpForm = new SignUpForm(page)
        mainPage = new MainPage(page)

        await page.goto('/')
        await mainPage.clickSignUpButton()        
        await expect( page.getByText('Registration')).toBeVisible()
        console.log("guten tag i am before each from registration form")
    });

    test.describe("field Name", () => {   

        test("empty field", async ({ page }) => {            
            await signUpForm.fieldName.fill('')
            await signUpForm.fieldName.blur()
            await expect(page.getByText('Name required')).toBeVisible()
        })
        test("invalid Name", async ({ page }) => {
            await signUpForm.fieldName.fill('234')
            await signUpForm.fieldName.blur()
            await expect(page.getByText('Name is invalid')).toBeVisible()
        })
        test("short  Name", async ({ page }) => {
            await signUpForm.fieldName.fill('a')
            await signUpForm.fieldName.blur()
            await expect(page.getByText('Name has to be from 2 to 20 characters long')).toBeVisible()
        })
        test("long Name", async ({ page }) => {
            await signUpForm.fieldName.fill('aaaaaaaaaaaaaaaaaaaaa')
            await signUpForm.fieldName.blur()
            await expect(page.getByText('Name has to be from 2 to 20 characters long')).toBeVisible()
        })
        test("border color", async ({ page }) => {
            await signUpForm.fieldName.fill('')
            await signUpForm.fieldName.blur()
            await expect(page.getByText('Name required')).toBeVisible()
            await expect(page.locator('#signupName')).toHaveCSS('border-color', 'rgb(220, 53, 69)')

        })
    });
    test.describe("Field Last Name", () => {        

        test("empty field", async ({ page }) => {
            await signUpForm.fieldLastName.fill('')
            await signUpForm.fieldLastName.blur()
            await expect(page.getByText('Last name required')).toBeVisible()
        })
        test("invalid last Name", async ({ page }) => {
            await signUpForm.fieldLastName.fill('234')
            await signUpForm.fieldLastName.blur()
            await expect(page.getByText('Last name is invalid')).toBeVisible()
        })
        test("short  last Name", async ({ page }) => {
            await signUpForm.fieldLastName.fill('a')
            await signUpForm.fieldLastName.blur()
            await expect(page.getByText('Last name has to be from 2 to 20 characters long')).toBeVisible()
        })
        test("long last Name", async ({ page }) => {
            await signUpForm.fieldLastName.fill('aaaaaaaaaaaaaaaaaaaaa')
            await signUpForm.fieldLastName.blur()
            await expect(page.getByText('Last name has to be from 2 to 20 characters long')).toBeVisible()
        })
        test("border color", async ({ page }) => {
            await signUpForm.fieldLastName.fill('')
            await signUpForm.fieldLastName.blur()
            await expect(page.getByText('Name required')).toBeVisible()
            await expect(page.locator('#signupLastName')).toHaveCSS('border-color', 'rgb(220, 53, 69)')
        })

    });
    test.describe("Field email", () => {

        test("Wrong data Email", async ({ page }) => {
            await signUpForm.fieldEmail.fill('234')
            await signUpForm.fieldEmail.blur()
            await expect(page.getByText('Email is incorrect')).toBeVisible()
        })
        test("Empty field Email", async ({ page }) => {
            await signUpForm.fieldEmail.fill('')
            await signUpForm.fieldEmail.blur()
            await expect(page.getByText('Email required')).toBeVisible()
        })
        test("border color", async ({ page }) => {
            await signUpForm.fieldEmail.fill('')
            await signUpForm.fieldEmail.blur()
            await expect(page.getByText('Email required')).toBeVisible()
            await expect(page.locator('#signupEmail')).toHaveCSS('border-color', 'rgb(220, 53, 69)')

        })

    });
    test.describe("Field Password", () => {         

        test("Empty field Password", async ({ page }) => {
            await signUpForm.fieldPassword.fill('')
            await signUpForm.fieldPassword.blur()
            await expect(page.getByText('Password required')).toBeVisible()
        })
        test("Short field Password", async ({ page }) => {
            await signUpForm.fieldPassword.fill('1234')
            await signUpForm.fieldPassword.blur()
            await expect(page.getByText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small lette')).toBeVisible()
        })
        test("Long field Password", async ({ page }) => {
            await signUpForm.fieldPassword.fill('qwertyuiopasdfghjk')
            await signUpForm.fieldPassword.blur()
            await expect(page.getByText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small lette')).toBeVisible()
        })
        test("Wrong without capital field Password", async ({ page }) => {
            await signUpForm.fieldPassword.fill('aaaaaaaaaa')
            await signUpForm.fieldPassword.blur()
            await expect(page.getByText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small lette')).toBeVisible()
        })
        test("Wrong without small field Password", async ({ page }) => {
            await signUpForm.fieldPassword.fill('ASSSSAAAASSSS')
            await signUpForm.fieldPassword.blur()
            await expect(page.getByText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small lette')).toBeVisible()
        })

        test("border color", async ({ page }) => {
            await signUpForm.fieldPassword.fill('')
            await signUpForm.fieldPassword.blur()
            await expect(page.getByText('Password required')).toBeVisible()
            await expect(page.locator('#signupPassword')).toHaveCSS('border-color', 'rgb(220, 53, 69)')

        })

    });
    test.describe("Field Re-Enter Password", () => {
        
        test("password do not mach", async ({ page }) => {
            await signUpForm.fieldPassword.fill('EricCartman190')
            await signUpForm.fieldRepeatPassword.fill('EricCartman123')

        })
        test("Empty field Re-enter password", async ({ page }) => {            
            await signUpForm.fieldRepeatPassword.fill('')
            await signUpForm.fieldRepeatPassword.blur()
            await expect(page.getByText('Re-enter password required')).toBeVisible()
        })
        test("border color", async ({ page }) => {
            await signUpForm.fieldRepeatPassword.fill('')
            await signUpForm.fieldRepeatPassword.blur()
            await expect(page.getByText('Re-enter password required')).toBeVisible()
            await expect(page.locator('#signupRepeatPassword')).toHaveCSS('border-color', 'rgb(220, 53, 69)')

        })

    });

});

test.describe("Button Register", () => {

    let outerHeader : OuterHeader
    let innerHeader : InnerHeader
    let mainPage : MainPage
    let garagePage : GaragePage
    let signInForm : SignInForm
    let signUpForm : SignUpForm    
    
    test.beforeEach(async ({ page }) => {
        
        outerHeader = new OuterHeader(page)
        innerHeader = new InnerHeader(page)
        mainPage = new MainPage(page)
        garagePage = new GaragePage(page)
        signInForm = new SignInForm(page)
        signUpForm = new SignUpForm(page)
        
        await page.goto('/')
        await mainPage.clickSignUpButton()        
        await expect(page.getByText('Registration')).toBeVisible()
        console.log("hi i am before each for button register teast")
    });

    test("incorrect registration", async ({ page }) => {
        await expect(page.getByText('Register')).toHaveJSProperty('disabled', true)
    })

    test('correct registration', async ({ page }) => {
        await signUpForm.fieldName.fill('Eric')
        await signUpForm.fieldLastName.fill('Cartman')
        await signUpForm.fieldEmail.fill('emir+aqa@ua.fm')
        await signUpForm.fieldPassword.fill('Qwerty12345')
        await signUpForm.fieldRepeatPassword.fill('Qwerty12345')
        await signUpForm.clickRegisterButton()
        await expect(page).toHaveURL('https://qauto.forstudy.space/panel/garage')

    })

    test("Delete Profile", async ({ page }) => {       
        await signUpForm.buttonClose.click();
        await outerHeader.clickSignUpButton()
        await signInForm.emailField.fill('emir+aqa@ua.fm')
        await signInForm.passwordField.fill('Qwerty12345')
        await signInForm.clickLoginButton()   
        await innerHeader.clickDropDownMenu()
        await innerHeader.clickOptionSetting()
        await garagePage.clickRemoveMyAccautntButton()
        await page.getByRole('button', { name: 'Remove' }).click()

    })

});