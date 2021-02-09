import LoginPage from '../pageObjects/login';
import HomePage from '../pageObjects/home';

context('Sign in', () => {
    const loginPage = new LoginPage();
    const homePage = new HomePage(); 

    beforeEach(() => {
        loginPage.visit();
    });

    describe('Sign in test', () => {
        it('sign in succesfully with valid email and password', () => {
            loginPage.email()
                .type('merve123@gmail.com');
            loginPage.password()
                .type('merve123');
            loginPage.signinButton()
                .click();
            homePage.validateUrl();
            homePage.getGlobalFeed()
                .should('have.text', 'Global Feed');
            homePage.getUserName()
                .should('have.text', 'merve123');
        });

        it('sign in fails with an invalid password', () => {
            loginPage.email()
                .type('merve123@gmail.com');
            loginPage.password()
                .type('merve1234');
            loginPage.signinButton()
                .click();
            loginPage.validateErrorMessage();
        });

        it('gives error when clicking "sign in" button with an empty email input', () => {
            loginPage.password()
                .type('merve123');
            loginPage.signinButton()
                .click();
            loginPage.validateErrorMessage();
        });

        it('gives error when clicking "sign in" button with single quote password input', () => {
            loginPage.email()
                .type('merve123@gmail.com');
            loginPage.password()
                .type("'");
            loginPage.signinButton()
                .click();
            loginPage.validateErrorMessage();
        });
    });
});