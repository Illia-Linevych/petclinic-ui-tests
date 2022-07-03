import { test, chromium, Page, expect } from '@playwright/test';
import Pages from '../pages';
import { createSpecialty } from './creators';

test.describe('Check specialty functionality', () => {
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

    await test.step('Click on the "Specialties" menu item', async () => {
      const specialtiesTab = await pages.getMenuComponent().geSpecialtiesTab();
      await specialtiesTab.click();
      await page.waitForTimeout(1000);
    });
  });

  test('Create specialty', async () => {
    await createSpecialty(page, pages, 'Specialty');

    await test.step('Verify that last specialty in the list is recently specialty', async () => {
      const specialtyNames = await pages.getSpecialtyListPage().getSpecialtyNames();
      expect(await specialtyNames.last().inputValue()).toBe('Specialty');
    });
  });

  test('Edit specialty', async () => {
    await test.step('Select last specialty and click "Edit" button"', async () => {
      const editButtons = await pages.getSpecialtyListPage().getEditButtons();
      await editButtons.last().click();
      await page.waitForTimeout(1000);
    });

    await test.step('Change the current name to "Specialty1234"', async () => {
      const nameField = await pages.getEditSpecialtyPage().getNameField();
      await nameField.fill('Specialty1234');
    });

    await test.step('Click on "Update" button', async () => {
      const updateButton = await pages.getEditSpecialtyPage().getUpdateButton();
      await updateButton.click();
      await page.waitForTimeout(1000);
    });

    await test.step('Verify that the data of specialty was changed', async () => {
      const specialtyNames = await pages.getSpecialtyListPage().getSpecialtyNames();
      expect(await specialtyNames.last().inputValue()).toBe('Specialty1234');
    });
  });

  test('Delete specialty', async () => {
    await createSpecialty(page, pages, 'Specialty');
    let specialtiesCount = 0;

    await test.step('Remember the number of specialties in the list', async () => {
      const specialtyNames = await pages.getSpecialtyListPage().getSpecialtyNames();
      specialtiesCount = await specialtyNames.count();
    });

    await test.step('Select the last specialty in the list and click on the "Delete" button', async () => {
      const deleteButtons = await pages.getSpecialtyListPage().getDeleteButtons();
      await deleteButtons.last().click();
      await page.waitForTimeout(1000);
    });

    await test.step('Verify that the count of pet types decreased by 1', async () => {
      const specialtyNames = await pages.getSpecialtyListPage().getSpecialtyNames();
      expect(await specialtyNames.count()).toBe(specialtiesCount - 1);
    });
  });
});