const { test, expect } = require('@playwright/test');
const { BasePage } = require('../pages/BasePage');
const { CareerPage } = require('../pages/CareerPage');


test.describe('Access Career Page:', () => {
    test.beforeEach(async ({ page }) => {
        const basePage = new BasePage(page);
        await basePage.visitHomePage();
    })

    test('Navigate to Career Page and verify the department count', async ({ page }) => {

        const careerPage = new CareerPage(page);
        await careerPage.goTo()
        careerPage.clickOnDepartmentsDropdown()
        let count = await careerPage.getDepartmentsCount()
        expect.soft(count).toEqual(7);
    })

    test('Navigate to Career Page and select  Marketing department', async ({ page }) => {
        const careerPage = new CareerPage(page);
        await careerPage.goTo()
        await careerPage.selectDepartment(".tesonet-marketing")
        let sectionTitle = await careerPage.getMarketingHeader()
        expect.soft(sectionTitle).toBe("Marketing")
    })
})