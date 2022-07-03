import { Locator, Page, test } from '@playwright/test';
import BasePage from '../BasePage';

export default class EdiSpecialtyTypePage extends BasePage {
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
  async getUpdateButton() {
    return await new Promise<Locator>(resolve => {
      test.step('Find locator by className: .updateSpecialty', async () => {
        resolve(this.page.locator('.updateSpecialty'));
      });
    });
  }
}