import { test, chromium, Page, expect } from '@playwright/test';
import Pages from '../pages';
import { createPetType } from './creators';

test.describe('Check pet type functionality', () => {
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

    await test.step('Click on the "Pet types" menu item', async () => {
      const petTypesTab = await pages.getMenuComponent().getPetTypesTab();
      await petTypesTab.click();
      await page.waitForTimeout(1000);
    });
  });

  test('Create pet type', async () => {
    await createPetType(page, pages, 'PetType');

    await test.step('Verify that last pet type in the list is recently pet type', async () => {
      const petTypeNames = await pages.getPetTypeListPage().getPetTypeNames();
      expect(await petTypeNames.last().inputValue()).toBe('PetType');
    });
  });

  test('Edit pet type', async () => {
    await test.step('Select last pet type and click "Edit" button"', async () => {
      const editButtons = await pages.getPetTypeListPage().getEditButtons();
      await editButtons.last().click();
      await page.waitForTimeout(1000);
    });

    await test.step('Change the current name to "PetType1234"', async () => {
      const nameField = await pages.getEditPetTypePage().getNameField();
      await nameField.fill('PetType1234');
    });

    await test.step('Click on "Update" button', async () => {
      const updateButton = await pages.getEditPetTypePage().getUpdateButton();
      await updateButton.click();
      await page.waitForTimeout(1000);
    });

    await test.step('Verify that the data of pet type was changed', async () => {
      const petTypeNames = await pages.getPetTypeListPage().getPetTypeNames();
      expect(await petTypeNames.last().inputValue()).toBe('PetType1234');
    });
  });

  test('Delete pet type', async () => {
    await createPetType(page, pages, 'PetType');
    let petTypesCount = 0;

    await test.step('Remember the number of pet types in the list', async () => {
      const petTypeNames = await pages.getPetTypeListPage().getPetTypeNames();
      petTypesCount = await petTypeNames.count();
    });

    await test.step('Select the last pet type in the list and click on the "Delete" button', async () => {
      const deleteButtons = await pages.getPetTypeListPage().getDeleteButtons();
      await deleteButtons.last().click();
      await page.waitForTimeout(1000);
    });

    await test.step('Verify that the count of pet types decreased by 1', async () => {
      const petTypeNames = await pages.getPetTypeListPage().getPetTypeNames();
      expect(await petTypeNames.count()).toBe(petTypesCount - 1);
    });
  });
});