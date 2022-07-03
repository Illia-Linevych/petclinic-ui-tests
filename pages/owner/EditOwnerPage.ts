import { Locator, Page, test } from '@playwright/test';
import BasePage from '../BasePage';

export default class EditOwnerPage extends BasePage {
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

  async getAddressField() {
    return await new Promise<Locator>(resolve => {
      test.step('Find locator by id: #address', async () => {
        resolve(this.page.locator('#address'));
      });
    });
  }

  async getCityField() {
    return await new Promise<Locator>(resolve => {
      test.step('Find locator by id: #city', async () => {
        resolve(this.page.locator('#city'));
      });
    });
  }

  async getTelephoneField() {
    return await new Promise<Locator>(resolve => {
      test.step('Find locator by id: #telephone', async () => {
        resolve(this.page.locator('#telephone'));
      });
    });
  }

  async getUpdateOwnerButton() {
    return await new Promise<Locator>(resolve => {
      test.step('Find locator by className: .updateOwner', async () => {
        resolve(this.page.locator('.updateOwner'));
      });
    });
  }
}