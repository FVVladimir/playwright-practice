import { type Locator, type Page } from '@playwright/test';

export class SignInForm {
  readonly page: Page;
  readonly emailField: Locator;
  readonly passwordField: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailField = page.locator('#signinEmail')
    this.passwordField = page.locator('#signinPassword')
    this.loginButton = page.getByRole('button', { name: 'Login' })    
  }
  
  async clickLoginButton() {
    await this.loginButton.click()
  } 
}