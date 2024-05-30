import { type Locator, type Page } from '@playwright/test';

export class GaragePage {
  readonly page: Page;
  readonly text: Locator;
  readonly removeMyAccountButton: Locator;  
  readonly addCarButton: Locator;  
  readonly addButton: Locator;  
  readonly garageLink: Locator;  
  readonly profileLink: Locator;  
  readonly addCarModel: Locator;  
  readonly addCarBrand: Locator;   
  readonly addCarMileage: Locator;  
  readonly buttonRemoveCar: Locator;  
  readonly buttonRemove: Locator;  

  constructor(page: Page) {
    this.page = page;
    this.removeMyAccountButton = page.getByRole('button', { name: 'Remove my account' })
    this.addCarButton = page.getByRole('button', { name: 'Add car' })
    this.addButton = page.getByRole('button', { name: 'Add' })
    this.text = page.getByText('You don’t have any cars in')
    this.garageLink = page.getByRole('link', { name: ' Garage' })
    this.profileLink = page.getByRole('link', { name: ' Profile' })
    this.addCarModel = page.locator('#addCarModel')
    this.addCarBrand = page.locator('#addCarBrand')
    this.addCarMileage = page.locator('#addCarMileage')
    this. buttonRemoveCar =  page.getByRole('button', { name: 'Remove car' })
    this. buttonRemove =  page.getByRole('button', { name: 'Remove' })
  }

  async clickRemoveMyAccountButton() {
    await this.removeMyAccountButton.click()
  } 
}