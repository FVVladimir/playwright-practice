import { type Locator, type Page } from '@playwright/test';

export class GaragePage {
  readonly page: Page;
  readonly text: Locator;
  readonly removeMyAccountButton: Locator;  
  readonly addCarButton: Locator;  
  readonly garageLink: Locator;  
  readonly profileLink: Locator;  

  constructor(page: Page) {
    this.page = page;
    this.removeMyAccountButton = page.getByRole('button', { name: 'Remove my account' })
    this.addCarButton = page.getByRole('button', { name: 'Add car' })
    this.text = page.getByText('You don’t have any cars in')
    this.garageLink = page.getByRole('link', { name: ' Garage' })
    this.profileLink = page.getByRole('link', { name: ' Profile' })
  }

  async clickRemoveMyAccountButton() {
    await this.removeMyAccountButton.click()
  } 
}