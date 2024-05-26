import { type Locator, type Page } from '@playwright/test';

export class InnerHeader {
  readonly page: Page;
  readonly dropDownMenu: Locator;
  readonly optionSetting: Locator; 

  constructor(page: Page) {
    this.page = page;
    this.dropDownMenu = page.locator('#userNavDropdown')
    this.optionSetting = page.getByRole('link', { name: 'Settings', exact: true })
  }

  async clickDropDownMenu() {
    await this.dropDownMenu.click()
  } 
  async clickOptionSetting() {
    await this.optionSetting.click()
  } 
}