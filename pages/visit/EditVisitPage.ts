import { Locator, Page, test } from '@playwright/test';
import BasePage from '../BasePage';

export default class EditVisitPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async getDescriptionField() {
    return await new Promise<Locator>(resolve => {
      test.step('Find locator by id: #description', async () => {
        resolve(this.page.locator('#description'));
      });
    });
  }

  async getUpdateVisitButton() {
    return await new Promise<Locator>(resolve => {
      test.step('Find locator by className: .updateVisit', async () => {
        resolve(this.page.locator('.updateVisit'));
      });
    });
  }
}