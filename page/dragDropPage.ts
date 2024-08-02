import { expect, Locator, Page } from "@playwright/test";
import { HomePage } from "./homePage";

export class DragDropPage {
  
  readonly page: Page;
  draggableElement: Locator;
  droppableElement: Locator;
 
  constructor(page: Page) {
    this.page = page;
    this.draggableElement = page.locator('#draggable')
    this.droppableElement = page.getByLabel('Simple').locator('#droppable')

  }

  async navigate() {


    const homePage = new HomePage(this.page);
                  await homePage.navigate();
                  await homePage.clickInteractions();
                  await this.page.click("text=Droppable");
  }

  async performDragAndDrop() {

    await this.draggableElement.waitFor({ state: 'visible' });
    await this.droppableElement.waitFor({ state: 'visible' });
    await this.draggableElement.dragTo(this.droppableElement);

    }

    async verifyDroppedText() {
      await expect(this.droppableElement).toContainText('Dropped'); 
      }


  }