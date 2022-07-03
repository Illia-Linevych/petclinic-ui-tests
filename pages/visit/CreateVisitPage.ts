import { Locator, Page, test } from '@playwright/test';
import BasePage from '../BasePage';

export default class CreateVisitPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async getDateField() {
    return await new Promise<Locator>(resolve => {
      test.step('Find locator by cssSelector: input[name="date"]', async () => {
        resolve(this.page.locator('input[name="date"]'));
      });
    });
  }

  async getDescriptionField() {
    return await new Promise<Locator>(resolve => {
      test.step('Find locator by id: #description', async () => {
        resolve(this.page.locator('#description'));
      });
    });
  }

  async getAddVisitButton() {
    return await new Promise<Locator>(resolve => {
      test.step('Find locator by className: .addVisit', async () => {
        resolve(this.page.locator('.addVisit'));
      });
    });
  }
}