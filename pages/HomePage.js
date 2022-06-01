const { BasePage } = require("./BasePage");

exports.HomePage = class HomePage extends BasePage {
    constructor(page) {
        super(page);
    }

    async visit() {
        await this.page.goto('/');
    }
}
