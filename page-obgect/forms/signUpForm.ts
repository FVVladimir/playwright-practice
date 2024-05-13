import { type Locator, type Page } from '@playwright/test';

export class SignUpForm {
  readonly page: Page;
  readonly buttonClose: Locator;
  readonly fieldName: Locator;
  readonly fieldLastName: Locator;
  readonly fieldEmail: Locator;
  readonly fieldPassword: Locator;
  readonly fieldRepeatPassword: Locator;
  readonly buttonRegister: Locator;  

  constructor(page: Page) {
    this.page = page;
    this.buttonClose = page.locator('.close')
    this.fieldName = page.locator('#signupName')
    this.fieldLastName = page.locator('#signupLastName')
    this.fieldEmail = page.locator('#signupEmail')
    this.fieldPassword = page.locator('#signupPassword')
    this.fieldRepeatPassword = page.locator('#signupRepeatPassword')
    this.buttonRegister = page.getByText('Register')
  }

  async clickButtonClose() {
    await this.buttonClose.click()
  } 
  async clickRegisterButton() {
    await this.buttonRegister.click()
  } 
}