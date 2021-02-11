import LoginPage from '../pages/login';

const loginPage = new LoginPage();

Cypress.Commands.add('error', (message) => {
    cy.get('.error-messages > li')
        .should('have.text', message)
})

Cypress.Commands.add('checkUrl', (url) => {
    cy.url().should('eq', url)
})

Cypress.Commands.add('login', (email, password) => {
    if(email){
        loginPage.email().type(email);
    }

    if(password){
        loginPage.password().type(password);
    }
    
    loginPage.signinButton().click();
})