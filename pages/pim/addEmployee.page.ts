import { Page } from '@playwright/test';

export class AddEmployeePage {
  pimMenu: any;
  addEmployeeMenu: any;
  firstNameInput:any ;
  lastNameInput :any ;
  saveButton :any ;
  personalDetailsHeader :any ;

  constructor(private page: Page) {
    this.pimMenu = this.page.getByRole('link', { name: 'PIM' });
    this.addEmployeeMenu = this.page.getByRole('link', { name: 'Add Employee' });
    this.firstNameInput = 'input[name="firstName"]';
    this.lastNameInput = 'input[name="lastName"]';
    this.saveButton = 'button[type="submit"]';
    this.personalDetailsHeader = 'h6:has-text("Personal Details")';
  }

  async navigateToAddEmployee() {
      await this.page.waitForSelector('nav.oxd-navbar-nav', { timeout: 10000 });
    await this.pimMenu.click();
    await this.addEmployeeMenu.click();
  }

  async enterEmployeeDetails(firstName: string, lastName: string) {
    await this.page.fill(this.firstNameInput, firstName);
    await this.page.fill(this.lastNameInput, lastName);
  }

  async saveEmployee() {
    await this.page.click(this.saveButton);
  }

  async isPersonalDetailsPageVisible() {
    return this.page.isVisible(this.personalDetailsHeader);
  }
}
