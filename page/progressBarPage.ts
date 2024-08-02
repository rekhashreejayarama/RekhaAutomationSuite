import { expect, Locator, Page } from "@playwright/test";
import { HomePage } from "./homePage";

export class ProgressBarPage {
  
  readonly page: Page;
  readonly startStopBtnLocator : Locator;
  readonly resetBtnLocator : Locator;
  readonly progressBarComplete : Locator;
  readonly progressBarLocator : Locator;
 

  constructor(page: Page) {
      this.page = page;
      this.startStopBtnLocator = page.locator("#startStopButton");
      this.progressBarLocator = page.locator(".progress-bar");
  }

  async navigate() {

      const homePage = new HomePage(this.page);
                  await homePage.navigate();
                  await homePage.clickWidgets();
                  await this.page.click("text=Progress Bar");
  }

  async clickOnProgressBarAndVerify() {

        // Find the start button and click it
        await this.startStopBtnLocator.click();

        // Wait for the progress bar to reach 100%
        await this.page.waitForFunction(() => {
              const progressBarElement = document.querySelector('.progress-bar');
              return progressBarElement && progressBarElement.style.width === '100%';
            });

        // Verify the progress bar has reached 100% width
        const progressBarText = await this.progressBarLocator.textContent();
        expect(progressBarText).toContain('100%');
  }
}