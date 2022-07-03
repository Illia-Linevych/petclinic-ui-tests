
import { Locator, Page, test } from '@playwright/test';
import BasePage from '../BasePage';

export default class OwnerDetailsPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async getOwnerFullName() {
    return await new Promise<Locator>(resolve => {
      test.step('Find locator by className: .ownerFullName', async () => {
        resolve(this.page.locator('.ownerFullName'));
      });
    });
  }

  async getOwnerAddress() {
    return await new Promise<Locator>(resolve => {
      test.step('Find locator by className: .ownerAddress', async () => {
        resolve(this.page.locator('.ownerAddress'));
      });
    });
  }

  async getOwnerCity() {
    return await new Promise<Locator>(resolve => {
      test.step('Find locator by className: .ownerCity', async () => {
        resolve(this.page.locator('.ownerCity'));
      });
    });
  }

  async getOwnerTelephone() {
    return await new Promise<Locator>(resolve => {
      test.step('Find locator by className: .ownerPhone', async () => {
        resolve(this.page.locator('.ownerPhone'));
      });
    });
  }

  async getEditOwnerButton() {
    return await new Promise<Locator>(resolve => {
      test.step('Find locator by className: .editOwner', async () => {
        resolve(this.page.locator('.editOwner'));
      });
    });
  }

  async getAddNewPetButton() {
    return await new Promise<Locator>(resolve => {
      test.step('Find locator by className: .addNewPet', async () => {
        resolve(this.page.locator('.addNewPet'));
      });
    });
  }

  async getPets() {
    return await new Promise<Locator>(resolve => {
      test.step('Find locator by cssSelector: app-pet-list', async () => {
        resolve(this.page.locator('app-pet-list'));
      });
    });
  }

  async getPetNamesByName(name: string) {
    return await new Promise<Locator>(resolve => {
      test.step(`Find locator by cssSelector: ${'text=' + name}`, async () => {
        resolve(this.page.locator('text=' + name));
      });
    });
  }

  async getEditPetButtons() {
    return await new Promise<Locator>(resolve => {
      test.step('Find locator by cssSelector: app-pet-list .editPet', async () => {
        resolve(this.page.locator('app-pet-list .editPet'));
      });
    });
  }

  async getDeletePetButtons() {
    return await new Promise<Locator>(resolve => {
      test.step('Find locator by cssSelector: app-pet-list .deletePet', async () => {
        resolve(this.page.locator('app-pet-list .deletePet'));
      });
    });
  }

  async getPetNames() {
    return await new Promise<Locator>(resolve => {
      test.step('Find locator by cssSelector: app-pet-list .petName', async () => {
        resolve(this.page.locator('app-pet-list .petName'));
      });
    });
  }

  async getVisits() {
    return await new Promise<Locator>(resolve => {
      test.step('Find locator by cssSelector: app-visit-list > table > tr', async () => {
        resolve(this.page.locator('app-visit-list > table > tr'));
      });
    });
  }

  async getAddVisitButtons() {
    return await new Promise<Locator>(resolve => {
      test.step('Find locator by className: .addNewVisit', async () => {
        resolve(this.page.locator('.addNewVisit'));
      });
    });
  }

  async getEditVisitButtons() {
    return await new Promise<Locator>(resolve => {
      test.step('Find locator by cssSelector: .visitActions .editVisit', async () => {
        resolve(this.page.locator('.visitActions .editVisit'));
      });
    });
  }

  async getDeleteVisitButtons() {
    return await new Promise<Locator>(resolve => {
      test.step('Find locator by cssSelector: .visitActions .deleteVisit', async () => {
        resolve(this.page.locator('.visitActions .deleteVisit'));
      });
    });
  }

  async geVisitDescriptions() {
    return await new Promise<Locator>(resolve => {
      test.step('Find locator by className: .visitDescription', async () => {
        resolve(this.page.locator('.visitDescription'));
      });
    });
  }
}