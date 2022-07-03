import { test, chromium, Page, expect } from '@playwright/test';
import Pages from '../pages';
import { createPet } from './creators';

test.describe.serial('Check pet functionality', () => {
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

    await test.step('Click on the "All" owner menu item', async () => {
      const ownerListLink = await pages.getMenuComponent().getOwnerListLink();
      await ownerListLink.click();
    });

    await test.step('Select owner with a name "OwnerName OwnerLastName"', async () => {
      const ownerNameLinks = await pages.getOwnerListPage().getOwnerNameLinksByName('OwnerName OwnerLastName');
      await ownerNameLinks.last().click();
      await page.waitForTimeout(1000);
    });
  });

  test('Create pet', async () => {
    let petsCount = 0;

    await test.step('Remember the number of pets in the list', async () => {
      const pets = await pages.getOwnerDetailsPage().getPets();
      petsCount = await pets.count();
    });

    await createPet(page, pages, 'PetName', '2016/06/07', { label: 'Goose', index: 400 });

    await test.step('Verify that the count of pets increased to 1', async () => {
      const pets = await pages.getOwnerDetailsPage().getPets();
      expect(await pets.count()).toBe(petsCount + 1);
    });
  });

  test('Edit pet', async () => {
    await test.step('Select the last pet in the list and click on the "Edit Pet" button', async () => {
      const editPetButtons = await pages.getOwnerDetailsPage().getEditPetButtons();
      await editPetButtons.last().click();
      await page.waitForTimeout(1000);
    });

    await test.step('Change the pet name to "PetName1"', async () => {
      const nameField = await pages.getEditPetPage().getNameField();
      await nameField.fill('PetName1');
    });

    await test.step('Click on the "Update Pet" button', async () => {
      const updatePetButton = await pages.getEditPetPage().getUpdatePetButton();
      await updatePetButton.click();
      await page.waitForTimeout(1000);
    });

    await test.step('Verify that the data of pet was changed', async () => {
      const petNames = await pages.getOwnerDetailsPage().getPetNames();
      expect((await petNames.elementHandles()).find(e => e.innerText.toString() == 'PetName1'));
    });
  });

  test('Delete pet', async () => {
    await createPet(page, pages, 'SpecifPetName1234', '2016/06/07', { label: 'Goose', index: 400 });

    await test.step('Select the last pet in the list and click on the "Delete Pet" button', async () => {
      const deletePetButtons = await pages.getOwnerDetailsPage().getDeletePetButtons();
      await deletePetButtons.last().click();
      await page.waitForTimeout(1000);
    });

    await test.step('Verify that last vet was deleted', async () => {
      const petNames = await pages.getOwnerDetailsPage().getPetNamesByName('SpecifPetName1234');
      expect(await petNames.count()).toBe(0);
    });
  });
});