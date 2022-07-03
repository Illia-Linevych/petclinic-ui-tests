import { test, chromium, Page, expect } from '@playwright/test';
import Pages from '../pages';

test.describe('Check owner functionality', () => {
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
      await page.waitForTimeout(1000);
    });
  });

  test('Create owner', async () => {
    await test.step('Click on the "Add new" menu item', async () => {
      const createOwnerLink = await pages.getMenuComponent().getCreateOwnerLink();
      await createOwnerLink.click();
      await page.waitForTimeout(1000);
    });

    await test.step('Verify that "Add owner" button is disabled', async () => {
      const addOwnerButton = await pages.getCreateOwnerPage().getAddOwnerButton();
      await expect(addOwnerButton).toBeDisabled();
    });

    await test.step('Input the owner first name: OwnerName', async () => {
      const firstNameField = await pages.getCreateOwnerPage().getFirstNameField();
      await firstNameField.fill('OwnerName');
    });

    await test.step('Input the owner last name: OwnerLastName', async () => {
      const lastNameField = await pages.getCreateOwnerPage().getLastNameField();
      await lastNameField.fill('OwnerLastName');
    });

    await test.step('Input the owner address: Address 123', async () => {
      const addressField = await pages.getCreateOwnerPage().getAddressField();
      await addressField.fill('Address 123');
    });

    await test.step('Input the owner city: City', async () => {
      const cityField = await pages.getCreateOwnerPage().getCityField();
      await cityField.fill('City');
    });

    await test.step('Input the owner phone: 0123456789', async () => {
      const telephoneField = await pages.getCreateOwnerPage().getTelephoneField();
      await telephoneField.fill('0123456789');
    });

    await test.step('Click on the "Add Owner" button', async () => {
      const addOwnerButton = await pages.getCreateOwnerPage().getAddOwnerButton();
      await addOwnerButton.click();
      await page.waitForTimeout(1000);
    });

    await test.step('Verify that last owner in the list is recently created owner', async () => {
      const ownerNameLinks = await pages.getOwnerListPage().getOwnerNameLinks();
      const ownerAddresses = await pages.getOwnerListPage().getOwnerAddresses();
      const ownerCities = await pages.getOwnerListPage().getOwnerCities();
      const ownerTelephones = await pages.getOwnerListPage().getOwnerTelephones();
      expect(await ownerNameLinks.last().textContent()).toBe('OwnerName OwnerLastName');
      expect(await ownerAddresses.last().textContent()).toBe('Address 123');
      expect(await ownerCities.last().textContent()).toBe('City');
      expect(await ownerTelephones.last().textContent()).toBe('0123456789');
    });
  });

  test('Edit owner', async () => {
    await test.step('Click on the "All" menu item', async () => {
      const ownerListLink = await pages.getMenuComponent().getOwnerListLink();
      await ownerListLink.click();
    });

    await test.step('Select owner with a name "OwnerName OwnerLastName"', async () => {
      const ownerNameLinks = await pages.getOwnerListPage().getOwnerNameLinksByName('OwnerName OwnerLastName');
      await ownerNameLinks.last().click();
      await page.waitForTimeout(1000);
    });

    await test.step('Click on "Edit Owner" button', async () => {
      const editOwnerButton = await pages.getOwnerDetailsPage().getEditOwnerButton();
      await editOwnerButton.click();
      await page.waitForTimeout(1000);
    });

    await test.step('Change the current address to "Address 1234"', async () => {
      const addressField = await pages.getEditOwnerPage().getAddressField();
      await addressField.fill("Address 1234");
    });

    await test.step('Change the current city to "City1"', async () => {
      const cityField = await pages.getEditOwnerPage().getCityField();
      await cityField.fill('City1');
    });

    await test.step('Change the current telephone to "0123456786"', async () => {
      const telephoneField = await pages.getEditOwnerPage().getTelephoneField();
      await telephoneField.fill('0123456786');
    });

    await test.step('Click on "Update Owner" button', async () => {
      const updateOwnerButton = await pages.getEditOwnerPage().getUpdateOwnerButton();
      await updateOwnerButton.click();
      await page.waitForTimeout(1000);
    });

    await test.step('Verify that the data of owner was changed', async () => {
      const ownerAddress = await pages.getOwnerDetailsPage().getOwnerAddress();
      const ownerCity = await pages.getOwnerDetailsPage().getOwnerCity();
      const ownerTelephone = await pages.getOwnerDetailsPage().getOwnerTelephone();
      expect(await ownerAddress.textContent()).toBe("Address 1234");
      expect(await ownerCity.textContent()).toBe("City1");
      expect(await ownerTelephone.textContent()).toBe("0123456786");
    });
  });
});