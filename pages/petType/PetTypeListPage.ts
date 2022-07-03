import { Locator, Page, test } from '@playwright/test';
import BasePage from '../BasePage';

export default class PetTypeListPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async getPetTypeNames() {
    return await new Promise<Locator>(resolve => {
      test.step('Find locator by cssSelector: [name="pettype_name"]', async () => {
        resolve(this.page.locator('[name="pettype_name"]'));
      });
    });
  }

  async getAddButton() {
    return await new Promise<Locator>(resolve => {
      test.step('Find locator by className: .addPet', async () => {
        resolve(this.page.locator('.addPet'));
      });
    });
  }

  async getEditButtons() {
    return await new Promise<Locator>(resolve => {
      test.step('Find locator by className: .editPet', async () => {
        resolve(this.page.locator('.editPet'));
      });
    });
  }

  async getDeleteButtons() {
    return await new Promise<Locator>(resolve => {
      test.step('Find locator by className: .deletePet', async () => {
        resolve(this.page.locator('.deletePet'));
      });
    });
  }

  async getNameField() {
    return await new Promise<Locator>(resolve => {
      test.step('Find locator by cssSelector: [name="name"]', async () => {
        resolve(this.page.locator('[name="name"]'));
      });
    });
  }

  async getSaveButton() {
    return await new Promise<Locator>(resolve => {
      test.step('Find locator by className: .saveType', async () => {
        resolve(this.page.locator('.saveType'));
      });
    });
  }
}