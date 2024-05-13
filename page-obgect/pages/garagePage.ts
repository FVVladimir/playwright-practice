import { type Locator, type Page } from '@playwright/test';

export class GaragePage {
  readonly page: Page;
  readonly removeMyAccauntButton: Locator;  

  constructor(page: Page) {
    this.page = page;
    this.removeMyAccauntButton = page.getByRole('button', { name: 'Remove my account' })
  }

  async clickRemoveMyAccautntButton() {
    await this.removeMyAccauntButton.click()
  } 
}