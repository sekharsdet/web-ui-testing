# web-ui-testing
## Prerequisites

- NodeJS >=14
- Java >=8 to genarate allure reports
- Allure command line tools to see reports

### To start the project locally:

1. from the root folder please run 
```
npm install
npx playwright install --with-deps
```
2. To execute tests on chrome
```
 npx playwright test --project=Chromium
```
3. To execute tests on firefox
```
 npx playwright test --project=Firefox
```
4. To execute tests on safari
```
 npx playwright test --project=Webkit
```
5. To generate HTML report
```
allure serve allure-results
```

### For CI CD Runner:

1. Navigate to https://github.com/sekharsdet/web-ui-testing/actions
2. Click on the Playwright Tests Work Flow
3. Open any green workflow runner and see Run Tests Job

Example :[ https://github.com/sekharsdet/api-tests/runs/6674266671?check_suite_focus=true](https://github.com/sekharsdet/web-ui-testing/actions/runs/2421702172)

### Tests

Tests are located at web-ui-testing\tests\verifyDepartments.spec.js


### Technologies used:

- NodeJS
- playwright
- Allure report
- GitHub Actions
