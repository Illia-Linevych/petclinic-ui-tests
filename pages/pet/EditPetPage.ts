import { Locator, Page, test } from '@playwright/test';
import BasePage from '../BasePage';

export default class EditPetPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async getNameField() {
    return await new Promise<Locator>(resolve => {
      test.step('Find locator by id: #name', async () => {
        resolve(this.page.locator('#name'));
      });
    });
  }

  async getUpdatePetButton() {
    return await new Promise<Locator>(resolve => {
      test.step('Find locator by className: .updatePet', async () => {
        resolve(this.page.locator('.updatePet'));
      });
    });
  }
}