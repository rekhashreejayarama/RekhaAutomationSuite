import { expect, Locator, Page } from "@playwright/test";
import { HomePage } from "./homePage";

export class PracticeFormPage {
  
  readonly page: Page;
  readonly firstNameInputLocator: Locator;
  readonly lastNameInputLocator: Locator;
  readonly emailInputLocator: Locator;
  readonly genderRadioBtnLocator: Locator;
  readonly mobileNmbrLocator: Locator;
  readonly dobInputLocator: Locator;
  readonly subjectsInputLocator: Locator;
  readonly hobbiesCheckBoxLocator: Locator;
  readonly currentAddressInputLocator: Locator;
  readonly stateInputLocator: Locator;
  readonly cityInputLocator: Locator;
  readonly submitBtnLocator: Locator;
  readonly uploadPictureLocator: Locator;
  readonly closeBtnLocator: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstNameInputLocator = page.locator("id=firstName");
    this.lastNameInputLocator = page.locator("id=lastName");
    this.emailInputLocator = page.locator("id=userEmail");
    this.genderRadioBtnLocator = page.locator("label[for='gender-radio-1']");
    this.mobileNmbrLocator = page.locator("id=userNumber");
    this.dobInputLocator = page.locator("id=dateOfBirthInput");
    this.subjectsInputLocator = page.locator(".subjects-auto-complete__value-container input");
    this.hobbiesCheckBoxLocator = page.locator("label[for='hobbies-checkbox-2']");
    this.currentAddressInputLocator = page.locator("id=currentAddress");
    this.stateInputLocator = page.locator("div[class=' css-1pahdxg-control'] div[class=' css-1wa3eu0-placeholder']");
    this.cityInputLocator = page.locator("div[id='stateCity-wrapper'] div:nth-child(3)");
    this.submitBtnLocator = page.locator("id=submit");
    this.uploadPictureLocator = page.locator("input#uploadPicture"); // Upload picture button

  }

  async navigate() {

  const homePage = new HomePage(this.page);
                await homePage.navigate();
                await homePage.clickForms();
                await this.page.click("text=Practice Form");
  }

  async fillPracticeForm(firstName,lastName,email,mobileNmbr,dob,subject,address,picturePath) {
    await this.firstNameInputLocator.fill(firstName);
    await this.lastNameInputLocator.fill(lastName);
    await this.emailInputLocator.fill(email);

   //select gender as Male
    await this.genderRadioBtnLocator.click();

    await this.mobileNmbrLocator.fill(mobileNmbr);
    await this.dobInputLocator.fill(dob);

    await this.subjectsInputLocator.click();
    await this.subjectsInputLocator.fill(subject);
    await this.page.keyboard.press('Tab');

    await this.hobbiesCheckBoxLocator.click();

    //Upload picture
    await this.uploadPictureLocator.setInputFiles(picturePath);

    await this.currentAddressInputLocator.fill(address);

    //Select State dropdown  logic
    await this.page.keyboard.press('Tab');
    await this.stateInputLocator.click();
    // Wait for the dropdown options to be visible (state options)
    await this.page.waitForSelector("div[id^='react-select-3-option-0']");
    // Select the first state option
    await this.page.locator("div[id^='react-select-3-option-0']").click();

     // Click the City dropdown logic
     await this.page.keyboard.press('Tab');
     await this.cityInputLocator.click();
     // Wait for the dropdown options to be visible (city options)
     await this.page.waitForSelector("div[id^='react-select-4-option-0']");
     // Select the first city option
     await this.page.locator("div[id^='react-select-4-option-0']").click();


  }

  async clickSubmitButton() {
     this.submitBtnLocator.click();
  }





}