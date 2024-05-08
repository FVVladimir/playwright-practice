import { test, expect, type Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/')
  await page.getByText('Sign up').click()
  const form = page.getByText('Registration')
  await expect(form).toBeVisible()
});

test.describe('test Registation form with positiv data', () => {

  test('test correct data', async ({ page }) => {
    await page.locator('#signupName').fill('Eric')
    await page.locator('#signupLastName').fill('Cartman')
    await page.locator('#signupEmail').fill('emir+aqa@ua.fm')
    await page.locator('#signupPassword').fill('Qwerty12345')
    await page.locator('#signupRepeatPassword').fill('Qwerty12345')
    await page.getByText('Register').click()
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
      
    })
        
  });
  test.describe("Field Password", () => {
    test("Empty field Password", async({page}) => {
      await page.locator('#signupPassword').fill('')
      await page.locator('#signupPassword').blur()
      await expect(page.getByText('Password required')).toBeVisible()
    })
    test("border color", async ({page}) => {
      
    })
        
  });
  test.describe("Field Re-Enter Password", () => {
    test("Empty field Email", async({page}) => {
      await page.locator('#signupRepeatPassword').fill('')
      await page.locator('#signupRepeatPassword').blur()
      await expect(page.getByText('Re-enter password required')).toBeVisible()
    })
    test("border color", async ({page}) => {
      
    })
        
  });
  test.describe("Button Register", () => {
        
  }); 

});

 // test("Delete Profile", async () => {
    // await page.getByRole('button', { name: 'User photo My profile' }).click();
    // await page.getByRole('link', { name: 'Settings', exact: true }).click()
    // await page.getByRole('button', { name: 'Remove my account' }).click()
    // await page.getByRole('button', { name: 'Remove' }).click()
        
  // });