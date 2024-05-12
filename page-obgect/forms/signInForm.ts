import { expect, type Locator, type Page } from '@playwright/test';

export class SignInForm {
  readonly page: Page;
  readonly emailField: Locator;
  readonly passwordField: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;
  

  constructor(page: Page) {
    this.page = page;
    this.
  }

  // async clickSignUpButton() {
  //   await this.signInButton.click()
  // } 
}