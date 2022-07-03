import { Locator, Page, test } from '@playwright/test';
import BasePage from '../BasePage';

export default class CreateVetPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async getFirstNameField() {
    return await new Promise<Locator>(resolve => {
      test.step('Find locator by id: #firstName', async () => {
        resolve(this.page.locator('#firstName'));
      });
    });
  }

  async getLastNameField() {
    return await new Promise<Locator>(resolve => {
      test.step('Find locator by id: #lastName', async () => {
        resolve(this.page.locator('#lastName'));
      });
    });
  }

  async getSpecialtiesDropDown() {
    return await new Promise<Locator>(resolve => {
      test.step('Find locator by id: #specialties', async () => {
        resolve(this.page.locator('#specialties'));
      });
    });
  }

  async getSaveVetButton() {
    return await new Promise<Locator>(resolve => {
      test.step('Find locator by className: .saveVet', async () => {
        resolve(this.page.locator('.saveVet'));
      });
    });
  }
}