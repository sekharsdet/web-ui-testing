const config = {
  workers: 1,
  use: {
    viewport: null,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
    retries: 2,
    timeout: 60000,
    reporter: 'allure-playwright',
    ignoreHTTPSErrors: true,
    baseURL: "https://tesonet.com"
  },
  projects: [
    { name: 'Chromium', use: { browserName: 'chromium' } },
    { name: 'Firefox', use: { browserName: 'firefox' } },
    { name: 'Webkit', use: { browserName: 'webkit' } },
  ],
  launchOptions: {
    args: ['--start-maximized']
  }
};

module.exports = config;