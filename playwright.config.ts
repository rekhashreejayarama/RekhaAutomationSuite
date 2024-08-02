import type {PlaywrightTestConfig} from '@playwright/test';

const config: PlaywrightTestConfig = {
    

    // Specify the directory where tests are located
    testDir: './test/e2e',

    use: {
        baseURL: "https://demoqa.com/",
        headless: false,
        screenshot: "on",
        video: "on",
        launchOptions: {
             slowMo: 600
        },
    },
    timeout: 60 * 1000 * 5,
    retries: 0,
    reporter: [["dot"], ["json", {
        outputFile: "jsonReports/jsonReport.json"
    }], ["html", {
        open: "never"
    }]]
};

export default config;