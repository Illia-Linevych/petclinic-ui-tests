import { Locator, Page, test } from '@playwright/test';
import BasePage from '../BasePage';

export default class CreatePetPage extends BasePage {
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

  async getBirthDateField() {
    return await new Promise<Locator>(resolve => {
      test.step('Find locator by cssSelector: input[name="birthDate"]', async () => {
        resolve(this.page.locator('input[name="birthDate"]'));
      });
    });
  }

  async getTypesDropDown() {
    return await new Promise<Locator>(resolve => {
      test.step('Find locator by id: #type', async () => {
        resolve(this.page.locator('#type'));
      });
    });
  }

  async getSavePetButton() {
    return await new Promise<Locator>(resolve => {
      test.step('Find locator by className: .savePet', async () => {
        resolve(this.page.locator('.savePet'));
      });
    });
  }
}