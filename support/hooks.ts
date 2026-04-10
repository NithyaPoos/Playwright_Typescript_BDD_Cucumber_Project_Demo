import { Before, After , setDefaultTimeout} from '@cucumber/cucumber';
setDefaultTimeout(20000);
Before(async function () {
  
  await this.init();   // correct method
  await this.page.waitForTimeout(300); // small buffer to avoid race condition
});


After(async function () {
  await this.close();  // correct method
});

// import { Before, After } from "@cucumber/cucumber";

// Before({ timeout: 20000 }, async function () {
//   await this.openBrowser();
// });

// After(async function () {
//   await this.closeBrowser();
// });
