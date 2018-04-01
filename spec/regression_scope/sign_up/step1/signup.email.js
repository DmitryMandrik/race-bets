let signUpPage = require('../../../../pages/SignUpPage');
let randomstring = require("randomstring");
describe('SignUp Form regression_scope (1 step) - Email)', function () {
    describe('Email', function () {
        beforeEach(function () {
            browser.ignoreSynchronization = true;
            signUpPage.get();
            signUpPage.setUserName('Ryan99');
            signUpPage.setPassword('1qaz!QAZ');
            signUpPage.setConfirmPassword('1qaz!QAZ');
            signUpPage.setConfirmCheckbox(true);
            signUpPage.setdontSetLimitRadioBtn();
        });

        it('valid when user email is correct format', function () {
            signUpPage.setEmail('not_registered@gmail.com');
            signUpPage.submitSignUp();
            let EC = protractor.ExpectedConditions;
            browser.wait(EC.textToBePresentInElement(signUpPage.activeStep, 'Personal details'), 10000);
        });

        it('invalid when user email empty', function () {
            signUpPage.setEmail('');
            signUpPage.submitSignUp();
            expect(signUpPage.getError()).toEqual('This field is required')
        });

        it('invalid when user email is incorrect format', function () {
            signUpPage.setEmail('incorrect@email');
            signUpPage.submitSignUp();
            expect(signUpPage.getError()).toEqual('Not a valid email address')
        });

        it('invalid when user email is too long', function () {
            let tooLong = randomstring.generate(55);
            signUpPage.setEmail(`${tooLong}@gmail.com`);
            signUpPage.submitSignUp();
            expect(signUpPage.getError()).toEqual('Maximum of 64 characters')
        });

        it('invalid when user email already registered', function () {
            signUpPage.setEmail('test@gmail.com');
            signUpPage.submitSignUp();
            expect(signUpPage.getError()).toEqual('Email already registered')
        });
    });
});