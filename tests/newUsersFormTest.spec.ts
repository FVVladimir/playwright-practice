import { test, expect, type Page } from '@playwright/test';

test.describe("test Registations form with positive data", () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await page.getByText('Sign up').click()
    const form = page.getByText('Registration')
    await expect(form).toBeVisible()
  });
  
  test('test correct data', async ({ page }) => {
    await page.locator('#signupName').fill('Eric')
    await page.locator('#signupLastName').fill('Cartman')
    await page.locator('#signupEmail').fill('emir+aqa@ua.fm')
    await page.locator('#signupPassword').fill('Qwerty12345')
    await page.locator('#signupRepeatPassword').fill('Qwerty12345')
    await page.getByText('Register').click()
  })
  
  test("Delete Profile", async ({page}) => {  // як тільки тут пишу afterAll одразу висне на 22 рядку і все.....
    // await page.getByLabel('Close').click();  
    await page.locator('.close').click();  
    await page.getByRole('button', { name: 'Sign In' }).click()
    await page.locator('#signinEmail').fill('emir+aqa@ua.fm')
    await page.locator('#signinPassword').fill('Qwerty12345')
    await page.getByRole('button', { name: 'Login' }).click()  
    await page.locator('#userNavDropdown').click()
    await page.getByRole('link', { name: 'Settings', exact: true }).click()
    await page.getByRole('button', { name: 'Remove my account' }).click()
    await page.getByRole('button', { name: 'Remove' }).click()
        
  })
})

test.describe('test Registation form with errors', () => { 

  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await page.getByText('Sign up').click()
    const form = page.getByText('Registration')
    await expect(form).toBeVisible()
  });

  test.describe("field Name", () => {
    
    test("empty field", async ({page}) => {
      await page.locator('#signupName').fill('')
      await page.locator('#signupName').blur()
      await expect(page.getByText('Name required')).toBeVisible()      
    })
    test("invalid Name", async({page}) => {
      await page.locator('#signupName').fill('234')
      await page.locator('#signupName').blur()
      await expect(page.getByText('Name is invalid')).toBeVisible()
    })
    test("short  Name" , async ({page}) => {   
      await page.locator('#signupName').fill('a')
      await page.locator('#signupName').blur()
      await expect(page.getByText('Name has to be from 2 to 20 characters long')).toBeVisible()      
    })
    test("long Name", async ({page}) => {
      await page.locator('#signupName').fill('aaaaaaaaaaaaaaaaaaaaa')
      await page.locator('#signupName').blur()
      await expect(page.getByText('Name has to be from 2 to 20 characters long')).toBeVisible()
    })
    test("border color", async ({page}) => {  
      await page.locator('#signupName').fill('')
      await page.locator('#signupName').blur()
      await expect(page.getByText('Name required')).toBeVisible()     
      await expect(page.locator('#signupName')).toHaveCSS('border-color','rgb(220, 53, 69)')

    })
  });  
  test.describe("Field Last Name", () => {
    
    test("empty field", async ({page}) => {
      await page.locator('#signupLastName').fill('')
      await page.locator('#signupLastName').blur()
      await expect(page.getByText('Last name required')).toBeVisible()
    })
    test("invalid last Name", async({page}) => {
      await page.locator('#signupLastName').fill('234')
      await page.locator('#signupLastName').blur()
      await expect(page.getByText('Last name is invalid')).toBeVisible()
    })
    test("short  last Name" , async ({page}) => {   
      await page.locator('#signupLastName').fill('a')
      await page.locator('#signupLastName').blur()
      await expect(page.getByText('Last name has to be from 2 to 20 characters long')).toBeVisible()      
    })
    test("long last Name", async ({page}) => {
      await page.locator('#signupLastName').fill('aaaaaaaaaaaaaaaaaaaaa')
      await page.locator('#signupLastName').blur()
      await expect(page.getByText('Last name has to be from 2 to 20 characters long')).toBeVisible()
    })
    test("border color", async ({page}) => {
      await page.locator('#signupLastName').fill('')
      await page.locator('#signupLastName').blur()
      await expect(page.getByText('Name required')).toBeVisible()     
      await expect(page.locator('#signupLastName')).toHaveCSS('border-color','rgb(220, 53, 69)')
      
    })
        
  });
  test.describe("Field email", () => {
    
    test("Wrong data Email", async({page}) => {
      await page.locator('#signupEmail').fill('234')
      await page.locator('#signupEmail').blur()
      await expect(page.getByText('Email is incorrect')).toBeVisible()
    })
    test("Empty field Email", async({page}) => {
      await page.locator('#signupEmail').fill('')
      await page.locator('#signupEmail').blur()
      await expect(page.getByText('Email required')).toBeVisible()
    })
    test("border color", async ({page}) => {
      await page.locator('#signupEmail').fill('')
      await page.locator('#signupEmail').blur()
      await expect(page.getByText('Email required')).toBeVisible()     
      await expect(page.locator('#signupEmail')).toHaveCSS('border-color','rgb(220, 53, 69)')
      
    })
        
  });
  test.describe("Field Password", () => {
    test("Empty field Password", async({page}) => {
      await page.locator('#signupPassword').fill('')
      await page.locator('#signupPassword').blur()
      await expect(page.getByText('Password required')).toBeVisible()
    })
    test("Short field Password", async({page}) => {
      await page.locator('#signupPassword').fill('1234')
      await page.locator('#signupPassword').blur()
      await expect(page.getByText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small lette')).toBeVisible()
    })
    test("Long field Password", async({page}) => {
      await page.locator('#signupPassword').fill('qwertyuiopasdfghjk')
      await page.locator('#signupPassword').blur()
      await expect(page.getByText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small lette')).toBeVisible()
    })
    test("Wrong without capital field Password", async({page}) => {
      await page.locator('#signupPassword').fill('aaaaaaaaaa')
      await page.locator('#signupPassword').blur()
      await expect(page.getByText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small lette')).toBeVisible()
    })
    test("Wrong without small field Password", async({page}) => {
      await page.locator('#signupPassword').fill('ASSSSAAAASSSS')
      await page.locator('#signupPassword').blur()
      await expect(page.getByText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small lette')).toBeVisible()
    })

    test("border color", async ({page}) => {
      await page.locator('#signupPassword').fill('')
      await page.locator('#signupPassword').blur()
      await expect(page.getByText('Password required')).toBeVisible()     
      await expect(page.locator('#signupPassword')).toHaveCSS('border-color','rgb(220, 53, 69)')
      
    })
        
  });
  test.describe("Field Re-Enter Password", () => {
    test("password do not mach", async ({page}) => {
      await page.locator('#signupPassword').fill('EricCartman190')
      await page.locator('#signupRepeatPassword').fill('EricCartman123')
     
    })
    test("Empty field Re-enter password", async({page}) => {
      await page.locator('#signupRepeatPassword').fill('')
      await page.locator('#signupRepeatPassword').blur()
      await expect(page.getByText('Re-enter password required')).toBeVisible()
    })
    test("border color", async ({page}) => {
      await page.locator('#signupRepeatPassword').fill('')
      await page.locator('#signupRepeatPassword').blur()
      await expect(page.getByText('Re-enter password required')).toBeVisible()     
      await expect(page.locator('#signupRepeatPassword')).toHaveCSS('border-color','rgb(220, 53, 69)')
      
    })
        
  });

});

test.describe("Button Register", () => {

        test.beforeEach(async ({ page }) => {
          await page.goto('/')
          await page.getByText('Sign up').click()
          const form = page.getByText('Registration')
          await expect(form).toBeVisible()
      });
  
  test("incorrect registration", async ({page}) => {
    await expect(page.getByText('Register')).toHaveJSProperty('disabled', true)
  })

  test('correct registration', async ({ page }) => {
    await page.locator('#signupName').fill('Eric')
    await page.locator('#signupLastName').fill('Cartman')
    await page.locator('#signupEmail').fill('emir+aqa@ua.fm')
    await page.locator('#signupPassword').fill('Qwerty12345')
    await page.locator('#signupRepeatPassword').fill('Qwerty12345')
    await page.getByText('Register').click()
    await expect(page).toHaveURL('https://qauto.forstudy.space/panel/garage')
    
  })

  test("Delete Profile", async ({page}) => {  // як тільки тут пишу afterAll одразу висне на 22 рядку і все.....
    // await page.getByLabel('Close').click();  
    await page.locator('.close').click();  
    await page.getByRole('button', { name: 'Sign In' }).click()
    await page.locator('#signinEmail').fill('emir+aqa@ua.fm')
    await page.locator('#signinPassword').fill('Qwerty12345')
    await page.getByRole('button', { name: 'Login' }).click()  
    await page.locator('#userNavDropdown').click()
    await page.getByRole('link', { name: 'Settings', exact: true }).click()
    await page.getByRole('button', { name: 'Remove my account' }).click()
    await page.getByRole('button', { name: 'Remove' }).click()
        
  })
      
});