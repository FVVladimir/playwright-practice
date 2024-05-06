import { test, expect, type Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/')
  await page.getByText('Sign up').click()
  const form = page.getByText('Registration')
  await expect(form).toBeVisible()
});


test.describe('test Registation form with positiv data', () => {

  test('test field Name', async ({ page }) => {
    await page.locator('#signupName').fill('Eric')
    await page.locator('#signupLastName').fill('Cartman')
    await page.locator('#signupEmail').fill('emir+aqa@ua.fm')
    await page.locator('#signupPassword').fill('Qwerty12345')
    await page.locator('#signupRepeatPassword').fill('Qwerty12345')
    await page.getByText('Register').click()
    await page.locator('#userNavDropdown').click()
    await page.locator(".user-nav_menu-group").click()
  });

});