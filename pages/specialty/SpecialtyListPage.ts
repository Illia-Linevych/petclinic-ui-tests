import { Locator, Page, test } from '@playwright/test';
import BasePage from '../BasePage';

export default class SpecialtyListPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async getSpecialtyNames() {
    return await new Promise<Locator>(resolve => {
      test.step('Find locator by cssSelector: [name="spec_name"]', async () => {
        resolve(this.page.locator('[name="spec_name"]'));
      });
    });
  }

  async getAddButton() {
    return await new Promise<Locator>(resolve => {
      test.step('Find locator by cssSelector: button:not([type]).addSpecialty', async () => {
        resolve(this.page.locator('button:not([type]).addSpecialty'));
      });
    });
  }

  async getEditButtons() {
    return await new Promise<Locator>(resolve => {
      test.step('Find locator by className: .editSpecialty', async () => {
        resolve(this.page.locator('.editSpecialty'));
      });
    });
  }

  async getDeleteButtons() {
    return await new Promise<Locator>(resolve => {
      test.step('Find locator by className: .deleteSpecialty', async () => {
        resolve(this.page.locator('.deleteSpecialty'));
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
      test.step('Find locator by cssSelector: [type="submit"].addSpecialty', async () => {
        resolve(this.page.locator('[type="submit"].addSpecialty'));
      });
    });
  }
}