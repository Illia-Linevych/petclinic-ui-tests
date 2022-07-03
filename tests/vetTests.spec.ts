import { test, chromium, Page, expect } from '@playwright/test';
import Pages from '../pages';
import { createVet } from './creators';

test.describe('Check vet functionality', () => {
  let page: Page;
  let pages: Pages;

  test.beforeAll(async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext({ recordVideo: { dir: 'videos/' } });
    page = await context.newPage();
    pages = new Pages(page);
  });

  test.beforeEach(async () => {
    await test.step('Open "Home" page: https://client.sana-commerce.dev/', async () => {
      await page.goto('https://client.sana-commerce.dev/');
    });

    await test.step('Click on the "Vet" menu item', async () => {
      const vetTab = await pages.getMenuComponent().getVetTab();
      await vetTab.click();
      await page.waitForTimeout(1000);
    });
  });

  test('Create vet', async () => {
    await createVet(page, pages, 'VetName', 'VetLastName', { label: '123', index: 571 });

    await test.step('Verify that last vet in the list is recently created vet', async () => {
      const vetNames = await pages.getVetListPage().getVetNames();
      const vetSpecialties = await pages.getVetListPage().getVetSpecialties();
      expect((await vetNames.last().textContent())?.trim()).toBe('VetName VetLastName');
      expect((await vetSpecialties.last().textContent())?.trim()).toBe('123');
    });
  });

  test('Edit vet', async () => {
    await test.step('Click on the "All" menu item', async () => {
      const vetListLink = await pages.getMenuComponent().getVetListLink();
      await vetListLink.click();
      await page.waitForTimeout(1000);
    });

    await test.step('Select last vet and click "Edit Vet" button"', async () => {
      const editVetButtons = await pages.getVetListPage().getEditButtons();
      await editVetButtons.last().click();
      await page.waitForTimeout(1000);
    });

    await test.step('Change the current firstName to "VetName1"', async () => {
      const firstNameField = await pages.getEditVetPage().getFirstNameField();
      await firstNameField.fill('VetName1');
    });

    await test.step('Change the current lastName to "VetLastName2"', async () => {
      const lastNameField = await pages.getEditVetPage().getLastNameField();
      await lastNameField.fill('VetLastName2');
    });

    await test.step('Click on "Save Vet" button', async () => {
      const saveVetButton = await pages.getEditVetPage().getSaveVetButton();
      await saveVetButton.click();
      await page.waitForTimeout(1000);
    });

    await test.step('Verify that the data of vet was changed', async () => {
      const vetNames = await pages.getVetListPage().getVetNames();
      expect((await vetNames.last().textContent())?.trim()).toBe('VetName1 VetLastName2');
    });
  });

  test('Delete vet', async () => {
    await createVet(page, pages, 'VetName', 'VetLastName', { label: '123', index: 571 });
    let vetsCount = 0;

    await test.step('Remember the number of vets in the list', async () => {
      const vetNames = await pages.getVetListPage().getVetNames();
      vetsCount = await vetNames.count();
    });

    await test.step('Select the last vet in the list and click on the "Delete Vet" button', async () => {
      const deleteButtons = await pages.getVetListPage().getDeleteButtons();
      await deleteButtons.last().click();
      await page.waitForTimeout(1000);
    });

    await test.step('Verify that the count of vets decreased by 1', async () => {
      const vetNames = await pages.getVetListPage().getVetNames();
      expect(await vetNames.count()).toBe(vetsCount - 1);
    });
  });
});