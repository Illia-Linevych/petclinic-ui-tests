import { Locator, Page, test } from '@playwright/test';
import BasePage from '../BasePage';

export default class VetListPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async getVetNames() {
    return await new Promise<Locator>(resolve => {
      test.step('Find locator by className: .vetFullName', async () => {
        resolve(this.page.locator('.vetFullName'));
      });
    });
  }

  async getVetNamesByName(name: string) {
    return await new Promise<Locator>(resolve => {
      test.step(`Find locator by cssSelector: ${'text=' + name}`, async () => {
        resolve(this.page.locator('text=' + name));
      });
    });
  }

  async getVetSpecialties() {
    return await new Promise<Locator>(resolve => {
      test.step('Find locator by cssSelector: .vetSpecialty > div', async () => {
        resolve(this.page.locator('.vetSpecialty > div'));
      });
    });
  }

  async getEditButtons() {
    return await new Promise<Locator>(resolve => {
      test.step('Find locator by cssSelector: .vetActions > .editVet', async () => {
        resolve(this.page.locator('.vetActions > .editVet'));
      });
    });
  }

  async getDeleteButtons() {
    return await new Promise<Locator>(resolve => {
      test.step('Find locator by cssSelector: .vetActions > .deleteVet', async () => {
        resolve(this.page.locator('.vetActions > .deleteVet'));
      });
    });
  }
}