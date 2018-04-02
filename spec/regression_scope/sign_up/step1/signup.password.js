let signUpPage = require('../../../../pages/SignUpPage');
let randomstring = require("randomstring");
describe('SignUp Form regression_scope - Password (1 step)', function () {
    describe('Password', function () {
        beforeEach(function () {
            browser.ignoreSynchronization = true;
            signUpPage.get();
            signUpPage.setEmail('not_registered@gmail.com');
            signUpPage.setUserName('Ryan99');
            signUpPage.setConfirmCheckbox(true);
            signUpPage.setdontSetLimitRadioBtn();
        });

        it('valid when password is correct format', function () {
            signUpPage.setPassword('1qaz!QAZ');
            signUpPage.setConfirmPassword('1qaz!QAZ');
            signUpPage.submitSignUp();
            let EC = protractor.ExpectedConditions;
            browser.wait(EC.textToBePresentInElement(signUpPage.activeStep, 'Personal details'), 10000);
        });

        it('invalid when password empty', function () {
            signUpPage.setPassword('');
            signUpPage.setConfirmPassword('');
            signUpPage.submitSignUp();
            expect(signUpPage.getError()).toEqual('This field is required');
        });

        it('invalid when password is in wrong format', function () {
            signUpPage.setPassword('wrongFormat');
            signUpPage.setConfirmPassword('wrongFormat');
            signUpPage.submitSignUp();
            expect(signUpPage.getError()).toEqual('Password must contain at least one number, one uppercase, one lowercase letter and one special character');
        });

        it('invalid when password contains username', function () {
            signUpPage.setPassword('Ryan99!QAZ');
            expect(signUpPage.getError()).toEqual('Password cannot contain your username');
        });

        it('invalid when password is short than 8', function () {
            signUpPage.setPassword('Short<8');
            expect(signUpPage.getError()).toEqual('At least 8 characters');
        });

        it('invalid when password is too long', function () {
            let tooLong = randomstring.generate(73);
            signUpPage.setPassword(tooLong);
            signUpPage.setConfirmPassword(tooLong);
            signUpPage.submitSignUp();
            expect(signUpPage.getError()).toEqual('Maximum of 72 characters');
        });
    });
    describe('Password Confirmation', function () {
        beforeEach(function () {
            browser.ignoreSynchronization = true;
            signUpPage.get();
            signUpPage.setEmail('not_registered@gmail.com');
            signUpPage.setUserName('Ryan99');
            signUpPage.setPassword('1qaz!QAZ');
            signUpPage.setConfirmCheckbox(true);
            signUpPage.setdontSetLimitRadioBtn();
        });
        it('invalid when password does not match', function () {
            signUpPage.setConfirmPassword('1qaz!QAz');
            signUpPage.submitSignUp();
            expect(signUpPage.getError()).toEqual('The passwords you provided do not match');
        });
    });
});