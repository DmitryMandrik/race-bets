let AbstractPage = require('./AbstractPage');
class SignUpPage extends AbstractPage {
    get url() {return 'https://www.racebets.com/en/horse-racing/register'; }
    get emailInput()  { return $('#registration_email'); }
    get usernameInput() { return browser.element(by.model('user.username')); }
    get passwordInput() { return browser.element(by.model('user.password')); }
    get passwordConfirmInput() { return browser.element(by.model('user.password_confirm')); }
    get confirmCheckbox() { return browser.element(by.model('user.consent_terms')); }
    get confirmCheckboxSpan() { return $('span.c-input__mark.c-iconFont.c-iconFont--big.c-iconFont--square-o'); }
    get dontSetLimitRadioBtn() { return browser.element(by.xpath("//span[text()=\"Don't set a limit now\"]")); }
    get signupForm() { return browser.element(by.id('registrationForm')); }
    get error() { return $('div.error'); }
    get activeStep() { return $('.c-progressGuide__item.g-span--5-12.isActive') }
    get continueBtn() { return $('.g-span--12-12.g-omega.c-form__set'); }

    open() {
        super.open(this.url);
    }

    whenPresent(element) {
        let EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(element), 8000);
    };

    setEmail(email) {
        this.emailInput.sendKeys(email);
    }

    async setUserName(name) {
        this.whenPresent(this.usernameInput);
        await this.usernameInput.sendKeys(name);
    }

    setPassword(password) {
        this.passwordInput.sendKeys(password);
    }

    setConfirmPassword(password) {
        this.passwordConfirmInput.sendKeys(password);
    }

    setConfirmCheckbox(bool) {
        if (this.confirmCheckbox.isSelected() !== bool) {
            this.confirmCheckboxSpan.click();
        }
    };

    setdontSetLimitRadioBtn() {
        this.dontSetLimitRadioBtn.click();
    }

    submitSignUp() {
        this.signupForm.submit();
    }

    clickContinue() {
        this.continueBtn.click();
    }

    getError() {
        this.whenPresent(this.error);
        return this.error.getText();
    }
}
module.exports = SignUpPage;
