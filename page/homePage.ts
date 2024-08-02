import { expect, Locator, Page } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly elementsButton: Locator;
  readonly formsButton: Locator;
  readonly widgetsButton: Locator;
  readonly interactionsButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.elementsButton = page.locator("text=Elements");
    this.formsButton = page.locator("text=Forms");
    this.widgetsButton = page.locator("text=Widgets");
    this.interactionsButton = page.locator("text=Interactions");
  }

  async navigate() {
    await this.page.goto('https://demoqa.com/');
  }

  async clickElements() {
    await this.elementsButton.click();
  }

  async clickForms() {
    await this.formsButton.click();
  }

  async clickWidgets() {
    await this.widgetsButton.click();
  }

  async clickInteractions() {
    await this.interactionsButton.click();
  }
}
