import { Locator, Page, test } from '@playwright/test';
import BaseComponent from './BaseComponent';

export default class MenuComponent extends BaseComponent {
  constructor(page: Page) {
    super(page);
  }

  async getOwnerTab() {
    return await new Promise<Locator>(resolve => {
      test.step('Find locator by className: .ownerTab', async () => {
        resolve(this.page.locator('.ownerTab'));
      });
    });
  }

  async getOwnerListLink() {
    return await new Promise<Locator>(resolve => {
      test.step('Find locator by cssSelector: a[routerlink="/owners"]', async () => {
        resolve(this.page.locator('a[routerlink="/owners"]'));
      });
    });
  }

  async getCreateOwnerLink() {
    return await new Promise<Locator>(resolve => {
      test.step('Find locator by cssSelector: a[routerlink="/owners/add"]', async () => {
        resolve(this.page.locator('a[routerlink="/owners/add"]'));
      });
    });
  }

  async getVetTab() {
    return await new Promise<Locator>(resolve => {
      test.step('Find locator by className: .vetTab', async () => {
        resolve(this.page.locator('.vetsTab'));
      });
    });
  }

  async getVetListLink() {
    return await new Promise<Locator>(resolve => {
      test.step('Find locator by cssSelector: a[routerlink="/vets"]', async () => {
        resolve(this.page.locator('a[routerlink="/vets"]'));
      });
    });
  }

  async getCreateVetLink() {
    return await new Promise<Locator>(resolve => {
      test.step('Find locator by cssSelector: a[routerlink="/vets/add"]', async () => {
        resolve(this.page.locator('a[routerlink="/vets/add"]'));
      });
    });
  }

  async getPetTypesTab() {
    return await new Promise<Locator>(resolve => {
      test.step('Find locator  by cssSelector: a[routerlink="/pettypes"]', async () => {
        resolve(this.page.locator('a[routerlink="/pettypes"]'));
      });
    });
  }

  async geSpecialtiesTab() {
    return await new Promise<Locator>(resolve => {
      test.step('Find locator  by cssSelector: a[routerlink="/specialties"]', async () => {
        resolve(this.page.locator('a[routerlink="/specialties"]'));
      });
    });
  }
}