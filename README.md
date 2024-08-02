<h1>
    Test automation with <a href="https://playwright.dev/"> <img width="90" alt="Playwright Logo" src="Assets/Images/playwright.png" /> </a> on <a href="https://demoqa.com/">Demo QA</a>
</h1>

> **Note**
>
> +  **<a href="https://demoqa.com/">Demo QA</a>** is a comprehensive web testing site offering a variety of interactive elements for demonstrating automated UI tests.This framework includes test cases for both UI and API testing.
>
## Languages and Frameworks

The project uses the following:

- *[PlayWright](https://playwright.dev/)* as the web browser automation framework using TypeScript.
- *[TypeScript](https://www.typescriptlang.org/)* as a statically typed superset of JavaScript, which is used as the programming language.
- *[IntelliJ IDE](https://lp.jetbrains.com/)* as the IDE.


These tests demonstrate the use of Playwright features and the implementation of the Page Object Model (POM) pattern

## Getting Started:

### Prerequisites
Set up all dependencies required for the project.
```shell
npm install
```
Downloads and installs the necessary browser binaries for Playwright to use.
```shell
npx playwright install
```
**Ensure that Node.js is installed as a prerequisite before proceeding with the setup**

## Commands to run TestCases:


All the UI tests for demoqa.com are present in file : **DemoQA_UI_Scenarios.spec.ts**.

All the API tests for Book store application are present in file : **DemoQA_API_Scenarios.spec.ts**

### Run All Tests
```shell
npm run play:test
```
### Run Tests for APIs
```shell
npm run test-A
```
### Run Tests for UI
```shell
npm run test-U
```
### Test report
After running the previous command, execute the below-mentioned commands for Report
```shell
npm run report
```


### List all test titles
```shell
npm run test-L
```


## File Structure

    .
    ├── Assets                  
	│	├── Images          # Images to use in project
	├── data                    # Test data
	├── models                  # Classes for data and logic
	├── node_modules            # Dependencies
	├── page                    # Page object classes of a demoqa website
	├── test                    
	│   ├── e2e                 # End-to-end test case files
	│   │   ├── API             # Test case files for API endpoints
	│   │   ├── UI              # Test case files for UI interactions
	├── package.json            # Project metadata
    ├── package-lock.json       # Describes dependency tree
    ├── playwright.config.ts    # Playwright test configuration
    └── README.md               # This file

