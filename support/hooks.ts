import { Before, After } from "@cucumber/cucumber";

Before({ timeout: 20000 }, async function () {
  await this.openBrowser();
});

After(async function () {
  await this.closeBrowser();
});
