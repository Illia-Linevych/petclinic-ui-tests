import { test, Page } from '@playwright/test';
import Pages from '../pages';

export async function createPet(page: Page, pages: Pages, name: string, birthDate: string, type: { label: string, index: number }) {
  await test.step(`Click on the "Add New Pet" button`, async () => {
    const addNewPetButton = await pages.getOwnerDetailsPage().getAddNewPetButton();
    await addNewPetButton.click();
    await page.waitForTimeout(1000);
  });

  await test.step(`Input the pet name: ${name}`, async () => {
    const nameField = await pages.getCreatePetPage().getNameField();
    await nameField.fill(name);
  });

  await test.step(`Select the pet birth date: ${birthDate}`, async () => {
    const birthDateField = await pages.getCreatePetPage().getBirthDateField();
    await birthDateField.fill(birthDate);
  });

  await test.step(`Select the pet type: ${type.label}`, async () => {
    const typeDropDown = await pages.getCreatePetPage().getTypesDropDown();
    await typeDropDown.selectOption([{ label: type.label }, { value: `${type.index - 1}: Object` }, { index: type.index }]);
  });

  await test.step(`Click on the "Save Pet" button`, async () => {
    const savePetButton = await pages.getCreatePetPage().getSavePetButton();
    await savePetButton.click();
    await page.waitForTimeout(1000);
  });
}

export async function createVisit(page: Page, pages: Pages, date: string, description: string) {
  await test.step(`Select the last pet in the list and click on the "Add Visit" button`, async () => {
    const addVisitButtons = await pages.getOwnerDetailsPage().getAddVisitButtons();
    await addVisitButtons.last().click();
    await page.waitForTimeout(1000);
  });

  await test.step(`Select the visit date: ${date}`, async () => {
    const dateField = await pages.getCreateVisitPage().getDateField();
    await dateField.fill(date);
  });

  await test.step(`Input the visit description: ${description}`, async () => {
    const descriptionField = await pages.getCreateVisitPage().getDescriptionField();
    await descriptionField.fill(description);
  });

  await test.step(`Click on the "Add visit" button`, async () => {
    const addVisitButton = await pages.getCreateVisitPage().getAddVisitButton();
    await addVisitButton.click();
    await page.waitForTimeout(1000);
  });
}

export async function createVet(page: Page, pages: Pages, firstName: string, lastName: string, specialty: { label: string, index: number }) {
  await test.step('Click on the "Add new" menu item', async () => {
    const createVetLink = await pages.getMenuComponent().getCreateVetLink();
    await createVetLink.click();
    await page.waitForTimeout(1000);
  });

  await test.step(`Input the vet first name: ${firstName}`, async () => {
    const firstNameField = await pages.getCreateVetPage().getFirstNameField();
    await firstNameField.fill(firstName);
  });

  await test.step(`Input the vet last name: ${lastName}`, async () => {
    const lastNameField = await pages.getCreateVetPage().getLastNameField();
    await lastNameField.fill(lastName);
  });

  await test.step(`Select the vet specialty: ${specialty.label}`, async () => {
    const specialtiesDropDown = await pages.getCreateVetPage().getSpecialtiesDropDown();
    await specialtiesDropDown.selectOption([{ label: specialty.label }, { value: `${specialty.index - 1}: Object` }, { index: specialty.index }]);
  });

  await test.step('Click on the "Save Vet" button', async () => {
    const saveVetButton = await pages.getCreateVetPage().getSaveVetButton();
    await saveVetButton.click();
    await page.waitForTimeout(1000);
  });
}

export async function createPetType(page: Page, pages: Pages, name: string) {
  await test.step('Click on the "Add" button', async () => {
    const addButton = await pages.getPetTypeListPage().getAddButton();
    await addButton.click();
    await page.waitForTimeout(1000);
  });

  await test.step(`Input the pet type name: ${name}`, async () => {
    const nameField = await pages.getPetTypeListPage().getNameField();
    await nameField.fill(name);
  });

  await test.step('Click on the "Save" button', async () => {
    const saveButton = await pages.getPetTypeListPage().getSaveButton();
    await saveButton.click();
    await page.waitForTimeout(1000);
  });
}

export async function createSpecialty(page: Page, pages: Pages, name: string) {
  await test.step('Click on the "Add" button', async () => {
    const addButton = await pages.getSpecialtyListPage().getAddButton();
    await addButton.click();
    await page.waitForTimeout(1000);
  });

  await test.step(`Input the specialty name: ${name}`, async () => {
    const nameField = await pages.getSpecialtyListPage().getNameField();
    await nameField.fill(name);
  });

  await test.step('Click on the "Save" button', async () => {
    const saveButton = await pages.getSpecialtyListPage().getSaveButton();
    await saveButton.click();
    await page.waitForTimeout(1000);
  });
}