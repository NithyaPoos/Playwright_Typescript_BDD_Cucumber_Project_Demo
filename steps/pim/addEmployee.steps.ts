import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { AddEmployeePage } from '../../pages/pim/addEmployee.page';
import { LoginPage } from '../../pages/login/LoginPage';

Given('I am logged into OrangeHRM', async function () {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.goto();
  await this.page.waitForLoadState('networkidle');
  await this.loginPage.login('Admin', 'admin123');
 // await this.page.waitForSelector('h6:has-text("Dashboard")', { timeout: 10000 });
   // Wait for Dashboard header
  await this.page.locator('h6:has-text("Dashboard")').waitFor({ state: 'visible', timeout: 15000 });
});

When('I navigate to the PIM Add Employee page', async function () {
  this.addEmployeePage = new AddEmployeePage(this.page);
  await this.addEmployeePage.navigateToAddEmployee();
});

When('I enter employee details {string} {string}', async function (firstName, lastName) {
  await this.addEmployeePage.enterEmployeeDetails(firstName, lastName);
});

When('I save the employee', async function () {
  await this.addEmployeePage.saveEmployee();
});

Then('I should see the employee personal details page', async function () {
  console.log('Checking if Personal Details page is visible'); 
// await expect(
//  this.page.locator('h6:has-text("Personal Details")')
// ).toBeVisible({ timeout: 10000 });
//await this.page.locator('label:has-text("Employee Full Name")').waitFor();
  await this.page.waitForURL('**/pim/viewPersonalDetails/**');
const header = this.page.locator('h6:has-text("Personal Details")');
await header.waitFor({ state: 'visible', timeout: 15000 });
await expect(header).toBeVisible();


});
