import type { Page } from '@playwright/test';
import { MenuComponent } from '../components';
import { CreateOwnerPage, EditOwnerPage, OwnerDetailsPage, OwnerListPage } from './owner';
import { CreateVetPage, EditVetPage, VetListPage } from './vet';
import { CreatePetPage, EditPetPage } from './pet';
import { CreateVisitPage, EditVisitPage } from './visit';
import { PetTypeListPage, EditPetTypePage } from './petType';
import { SpecialtyListPage, EditSpecialtyPage } from './specialty';

export default class Pages {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  getMenuComponent() {
    return new MenuComponent(this.page);
  }

  getCreateOwnerPage() {
    return new CreateOwnerPage(this.page);
  }

  getEditOwnerPage() {
    return new EditOwnerPage(this.page);
  }

  getOwnerDetailsPage() {
    return new OwnerDetailsPage(this.page);
  }

  getOwnerListPage() {
    return new OwnerListPage(this.page);
  }

  getCreateVetPage() {
    return new CreateVetPage(this.page);
  }

  getEditVetPage() {
    return new EditVetPage(this.page);
  }

  getVetListPage() {
    return new VetListPage(this.page);
  }

  getCreatePetPage() {
    return new CreatePetPage(this.page);
  }

  getEditPetPage() {
    return new EditPetPage(this.page);
  }

  getCreateVisitPage() {
    return new CreateVisitPage(this.page);
  }

  getEditVisitPage() {
    return new EditVisitPage(this.page);
  }

  getPetTypeListPage() {
    return new PetTypeListPage(this.page);
  }

  getEditPetTypePage() {
    return new EditPetTypePage(this.page);
  }

  getSpecialtyListPage() {
    return new SpecialtyListPage(this.page);
  }

  getEditSpecialtyPage() {
    return new EditSpecialtyPage(this.page);
  }
}