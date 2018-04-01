class SignUpPage {
    get url() {return 'https://www.racebets.com/en/horse-racing/register'; }
    get emailInput()  { return $('#registration_email'); }
    get usernameInput() { return browser.element(by.model('user.username')); }
    get passwordInput() { return browser.element(by.model('user.password')); }
    get passwordConfirmInput() { return browser.element(by.model('user.password_confirm')); }
    get confirmCheckbox() { return browser.element(by.model('user.consent_terms')); }
    get confirmCheckboxSpan() { return $('span.c-input__mark.c-iconFont.c-iconFont--big.c-iconFont--square-o'); }
    get dontSetLimitRadioBtn() { return browser.element(by.xpath("//span[text()=\"Don't set a limit now\"]")); }
    get signupForm() { return browser.element(by.id('registrationForm')); }
    get error() { return browser.element(by.css('div.error')); }
    get activeStep() { return $('.c-progressGuide__item.g-span--5-12.isActive') }

    async get() {
        await browser.get(this.url);
    }

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

    getError() {
        this.whenPresent(this.error);
        return this.error.getText();
    }

    whenPresent(element) {
        browser.wait(protractor.ExpectedConditions.presenceOf(element));
    };
}
module.exports = new SignUpPage();
