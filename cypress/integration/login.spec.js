import LoginPage from '../pages/login';
import HomePage from '../pages/home';

context('Sign in', () => {
    const loginPage = new LoginPage();
    const homePage = new HomePage(); 

    beforeEach(() => {
        loginPage.visit();
    });

    describe('Sign in test', () => {
        it('sign in succesfully with valid email and password', () => {
            cy.login('merve123@gmail.com','merve123');
            homePage.validateUrl();
            homePage.getGlobalFeed()
                .should('have.text', 'Global Feed');
            homePage.getUserName()
                .should('have.text', 'merve123');
        });

        it('sign in fails with an invalid password', () => {
            cy.login('merve123@gmail.com','merve1234')
            loginPage.validateErrorMessage();
        });

        it('gives error when clicking "sign in" button with an empty email input', () => {
            cy.login('', 'merve123')
            loginPage.validateErrorMessage();
        });

        it('gives error when clicking "sign in" button with single quote password input', () => {
            cy.login('merve123@gmail.com',"'")
            loginPage.validateErrorMessage();
        });
    });
});