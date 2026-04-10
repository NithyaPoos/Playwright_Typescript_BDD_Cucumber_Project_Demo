import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { LoginPage } from "../../pages/login/LoginPage";

Given("I open the OrangeHRM login page", async function () {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.goto();
});

When(
  "I login with username {string} and password {string}",
  async function (username: string, password: string) {
    await this.loginPage.login(username, password);
  }
);

Then("I should see the dashboard", async function () {
  await expect(this.page.locator("h6")).toHaveText("Dashboard");
});
