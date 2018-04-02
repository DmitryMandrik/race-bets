let signUpPage = require('../../../../pages/SignUpPage');
let randomstring = require("randomstring");
describe('SignUp Form regression_scope - UserName (1 step))', function () {
    describe('UserName', function () {
        beforeEach(function () {
            browser.ignoreSynchronization = true;
            signUpPage.get();
            signUpPage.setEmail('not_registered@gmail.com');
            signUpPage.setPassword('1qaz!QAZ');
            signUpPage.setConfirmPassword('1qaz!QAZ');
            signUpPage.setConfirmCheckbox(true);
            signUpPage.setdontSetLimitRadioBtn();
        });

        it('valid when username is correct format', async function () {
            let validUserName = '_' + randomstring.generate(6) + '-';
            signUpPage.setUserName(await validUserName);
            signUpPage.submitSignUp();
            signUpPage.clickContinue();
            let EC = protractor.ExpectedConditions;
            browser.wait(EC.textToBePresentInElement(signUpPage.activeStep, 'Personal details'), 10000);
        });

        // it('invalid when username is short than 6', async function () {
        //     let tooShortName = randomstring.generate(5);
        //     signUpPage.setUserName(await tooShortName);
        //     signUpPage.submitSignUp();
        //     expect(signUpPage.getError()).toEqual('At least 6 characters');
        // });
        //
        // it('invalid when username is empty', function () {
        //     signUpPage.setUserName('');
        //     signUpPage.submitSignUp();
        //     expect(signUpPage.getError()).toEqual('This field is required')
        // });
        //
        // it('invalid when username is incorrect format', async function () {
        //     let incorrectFormatName = randomstring.generate(5) + "./,+=?[]!@#'$%^~`&*(){}".split('')[(Math.floor(Math.random()*20))];
        //     signUpPage.setUserName(await incorrectFormatName);
        //     signUpPage.submitSignUp();
        //     expect(signUpPage.getError()).toEqual('Only A-Z, 0-9, - and _')
        // });
        //
        // it('invalid when username is too long', async function () {
        //     let tooLong = randomstring.generate(21);
        //     signUpPage.setUserName(await tooLong);
        //     signUpPage.submitSignUp();
        //     expect(signUpPage.getError()).toEqual('Maximum of 20 characters')
        // });
        //
        // it('invalid when username already registered', function () {
        //     signUpPage.setUserName('john99');
        //     signUpPage.submitSignUp();
        //     expect(signUpPage.getError()).toEqual('This username has already been taken')
        // });
    });
});