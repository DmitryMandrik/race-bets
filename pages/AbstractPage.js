class AbstractPage {
    open(path) {
        browser.get(path);
    }

    whenPresent(element) {
        let EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(element));
    };
}
module.exports = AbstractPage;