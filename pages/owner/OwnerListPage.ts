import { Locator, Page, test } from '@playwright/test';
import BasePage from '../BasePage';

export default class OwnerListPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async getOwnerNameLinks() {
    return await new Promise<Locator>(resolve => {
      test.step('Find locator by cssSelector: .petOwner a', async () => {
        resolve(this.page.locator('.petOwner a'));
      });
    });
  }

  async getOwnerNameLinksByName(name: string) {
    return await new Promise<Locator>(resolve => {
      test.step(`Find locator by cssSelector: ${'text=' + name}`, async () => {
        resolve(this.page.locator('text=' + name));
      });
    });
  }

  async getOwnerAddresses() {
    return await new Promise<Locator>(resolve => {
      test.step('Find locator by cssSelector: .petOwner .ownerAddress', async () => {
        resolve(this.page.locator('.petOwner .ownerAddress'));
      });
    });
  }

  async getOwnerCities() {
    return await new Promise<Locator>(resolve => {
      test.step('Find locator by cssSelector: .petOwner .ownerCity', async () => {
        resolve(this.page.locator('.petOwner .ownerCity'));
      });
    });
  }

  async getOwnerTelephones() {
    return await new Promise<Locator>(resolve => {
      test.step('Find locator by cssSelector: .petOwner .ownerPhone', async () => {
        resolve(this.page.locator('.petOwner .ownerPhone'));
      });
    });
  }
}