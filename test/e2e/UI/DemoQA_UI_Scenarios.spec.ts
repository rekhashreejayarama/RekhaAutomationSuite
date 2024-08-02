import { Browser, chromium, expect, Page, test } from "@playwright/test";
import { EDIT_FIRST_NAME, EDIT_LAST_NAME } from "../../../data/constants";
import { DataFactory } from "../../../data/dataFactory";
import { User } from "../../../models/user";
import {WebTablePage} from "../../../page/webTablesPage";
import {BrokenImagePage} from "../../../page/brokenImagePage";
import {DragDropPage} from "../../../page/dragDropPage";
import {PracticeFormPage} from "../../../page/practiceFormPage";
import { Form } from "../../../models/form";
import {ProgressBarPage} from "../../../page/progressBarPage";
import {ToolTipPage} from "../../../page/tooltipPage";

let browser: Browser;

test.beforeEach(async ({ page }) => {
  browser = await chromium.launch();
  page = await browser.newPage();
});

test.afterEach(async ({ page }) => {
    await page.close()
    await browser.close();
});

test.describe("@UI Elements Feature ", async () => {
test("TC01_SCA_Verify user can enter new data into the table", async ({page}) => {

  let webtablesPage: WebTablePage;
  webtablesPage = new WebTablePage(page);

  const user: User = DataFactory.getUserDetails();

  await webtablesPage.navigate();
  await webtablesPage.clickAddButton();
  await webtablesPage.fillUserDetails(user.firstName,user.lastName,user.email,user.age,user.salary,user.department);
  await webtablesPage.clickSubmitButton();

  await webtablesPage.isUserVisibleInTable(user.firstName);

});

test("TC01_SCB_Verify user can edit the row in a table", async ({page}) => {
  
    let webtablesPage: WebTablePage;
    webtablesPage = new WebTablePage(page);
  
    const user: User = DataFactory.getUserDetails();
  
    await webtablesPage.navigate();
    await webtablesPage.clickEditIcon();
    await webtablesPage.editUserDetails(EDIT_FIRST_NAME,EDIT_LAST_NAME);
    await webtablesPage.clickSubmitButton();
  
    await webtablesPage.isUserVisibleInTable(EDIT_FIRST_NAME);
});

test("TC02_Verify broken image", async ({page}) => {

    let brokenImagePage: BrokenImagePage;
    brokenImagePage = new BrokenImagePage(page);
  
    await brokenImagePage.navigate();
    await brokenImagePage.verifyPresenceOfBrokenImg();
  
});
});

/*test.describe("@UI Interactions Feature ", async () => {
test("TC06_Verify user can drag and drop @UI", async ({page}) => {

    //let dragDropPage: DragDropPage;
    const dragDropPage = new DragDropPage(page);

    await dragDropPage.navigate();
    await dragDropPage.performDragAndDrop();
    await dragDropPage.verifyDroppedText();
});
});*/

test.describe("@UI Forms Feature ", async () => {
test("TC03_Verify user can submit the form", async ({page}) => {

    let practiceFormPage: PracticeFormPage;
    practiceFormPage = new PracticeFormPage(page);
  
    const formData: Form = DataFactory.getFormData();
  
    await practiceFormPage.navigate();
    await practiceFormPage.fillPracticeForm(formData.firstName,formData.lastName,
          formData.email,formData.mobileNmbr,
          formData.dob,formData.subject,formData.currentAddress,'Assets/Images/GMLogo.jpg');

  
      await practiceFormPage.clickSubmitButton();
});
});

test.describe("@UI Widget Feature ", async () => {
test("TC04_Verify the progress bar", async ({page}) => {

    let progressBarPage: ProgressBarPage;
    progressBarPage = new ProgressBarPage(page);
    await progressBarPage.navigate();
    await progressBarPage.clickOnProgressBarAndVerify();
});

test("TC05_Verify the Hover tooltip", async ({page}) => {

    /*let tootlTipPage: ToolTipPage;
    tootlTipPage = new ToolTipPage(page);

    await tootlTipPage.navigate();
    await tootlTipPage.verifyHoverOverToolTip();
  
    // Verify tooltip text
    const tooltipText = await tootlTipPage.gettooltipText();
    expect(tooltipText).toEqual('You hovered over the Button');*/

    const toolTipPage = new ToolTipPage(page);

    await toolTipPage.navigate();
    await toolTipPage.verifyHoverOverToolTip();

    // Verify tooltip text
    const tooltipText = await toolTipPage.getTooltipText();
    expect(tooltipText).toEqual('You hovered over the Button');
});

});

test.describe("@UI Interactions Feature ", async () => {
test("TC06_Verify user can drag and drop", async ({page}) => {

    //let dragDropPage: DragDropPage;
    const dragDropPage = new DragDropPage(page);

    await dragDropPage.navigate();
    await dragDropPage.performDragAndDrop();
    await dragDropPage.verifyDroppedText();
});
});