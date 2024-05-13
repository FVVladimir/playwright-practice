import { type Locator, type Page } from '@playwright/test';

export class MainPage {
  readonly page: Page;
  readonly signUpButton: Locator;  

  constructor(page: Page) {
    this.page = page;
    this.signUpButton = page.getByText('Sign up')
  }

  async clickSignUpButton() {
    await this.signUpButton.click()
  } 
}