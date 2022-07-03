import { test, chromium, Page, expect } from '@playwright/test';
import Pages from '../pages';
import { createPet, createVisit } from './creators';

test.describe.serial('Check visit functionality', () => {
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

    await test.step('Click on the "Owner" menu item', async () => {
      const ownerTab = await pages.getMenuComponent().getOwnerTab();
      await ownerTab.click();
    });

    await test.step(`Click on the "All" owner menu item`, async () => {
      const ownerListLink = await pages.getMenuComponent().getOwnerListLink();
      await ownerListLink.click();
    });

    await test.step(`Select owner with a name "OwnerName OwnerLastName"`, async () => {
      const ownerNameLinks = await pages.getOwnerListPage().getOwnerNameLinksByName('OwnerName OwnerLastName');
      await ownerNameLinks.last().click();
      await page.waitForTimeout(1000);
    });
  });

  test('Create visit', async () => {
    await createPet(page, pages, 'PetName1', '2016/06/07', { label: 'Goose', index: 400 });
    let visitsCount = 0;

    await test.step('Remember the number of visits in the list', async () => {
      const visits = await pages.getOwnerDetailsPage().getVisits();
      visitsCount = await visits.count();
    });

    await createVisit(page, pages, '2022/07/10', 'New visit');

    await test.step('Verify that the count of visits increased to 1', async () => {
      const visits = await pages.getOwnerDetailsPage().getVisits();
      expect(await visits.count()).toBe(visitsCount + 1);
    });
  });

  test('Edit visit', async () => {
    await test.step('Select the last visit in the list and click on the "Edit Visit" button', async () => {
      const editVisitButtons = await pages.getOwnerDetailsPage().getEditVisitButtons();
      await editVisitButtons.last().click();
      await page.waitForTimeout(1000);
    });

    await test.step('Change the visit description to "New visit1"', async () => {
      const descriptionField = await pages.getEditVisitPage().getDescriptionField();
      await descriptionField.fill('New visit1');
    });

    await test.step('Click on the "Update Visit" button', async () => {
      const updateVisitButton = await pages.getEditVisitPage().getUpdateVisitButton();
      await updateVisitButton.click();
      await page.waitForTimeout(1000);
    });

    await test.step('Verify that the data of visit was changed', async () => {
      const visitDescriptions = await pages.getOwnerDetailsPage().geVisitDescriptions();
      expect((await visitDescriptions.elementHandles()).find(e => e.innerText.toString() == 'New visit1'));
    });
  });

  test('Delete visit', async () => {
    await createVisit(page, pages, '2022/07/10', 'New visit');
    let visitsCount = 0;

    await test.step('Remember the number of visits in the list', async () => {
      const visits = await pages.getOwnerDetailsPage().getVisits();
      visitsCount = await visits.count();
    });

    await test.step('Select the last visit in the list and click on the "Delete Visit" button', async () => {
      const deleteVisitButtons = await pages.getOwnerDetailsPage().getDeleteVisitButtons();
      await deleteVisitButtons.last().click();
      await page.waitForTimeout(1000);
    });

    await test.step('Verify that the count of visits decreased by 1', async () => {
      const visits = await pages.getOwnerDetailsPage().getVisits();
      expect(await visits.count()).toBe(visitsCount - 1);
    });
  });
});