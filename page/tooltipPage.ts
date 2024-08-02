import { expect, Locator, Page } from "@playwright/test";
import { HomePage } from "./homePage";

export class ToolTipPage {
  
  readonly page: Page;
  readonly toolTipButton: Locator;
  readonly toolTipText: Locator;
 
  constructor(page: Page) {
    this.page = page;
    this.toolTipButton = page.locator('#toolTipButton')
    this.toolTipText = page.locator('.tooltip-inner');
  }

  async navigate() {

    const homePage = new HomePage(this.page);
                await homePage.navigate();
                await homePage.clickWidgets();
                await this.page.click("text=Tool Tips");
  }



   async verifyHoverOverToolTip() {
       // Scroll the button into view if needed
       await this.toolTipButton.scrollIntoViewIfNeeded();

       // Hover over the button
       await this.toolTipButton.hover();

       // Wait for the tooltip to appear and be visible
       await this.page.waitForTimeout(500);
       await this.toolTipText.waitFor({ state: 'visible' });
   }

   async getTooltipText(): Promise<string> {
       // Ensure the tooltip is visible
      // await this.toolTipText.waitFor({ state: 'visible' });

       // Get the tooltip text
       return await this.toolTipText.innerText();
   }
}