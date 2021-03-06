import LoginPage from '../pages/login';
import HomePage from '../pages/home';
import data from '../fixtures/data.json';

context('Sign in', () => {
    const loginPage = new LoginPage();
    const homePage = new HomePage();

    beforeEach(() => {
        loginPage.visit();
    });

    describe('Sign in test', () => {
        it('sign in succesfully with valid email and password', () => {
            cy.login('merve123@gmail.com', 'merve123');
            homePage.validateUrl();
            homePage.getGlobalFeed()
                .should('have.text', 'Global Feed');
            homePage.getUserName()
                .should('have.text', 'merve123');
        });
    });

    describe('Unseccesful sign in attempts', () => {
        data.forEach((testCase) => {
            it('gives error when clicking "sign in" button' + ' ' + testCase.caseName, () => {
                cy.login(testCase.email, testCase.password)
                cy.error(testCase.errormsg)
            });
        });
    });
});