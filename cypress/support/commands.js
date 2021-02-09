
Cypress.Commands.add('error', (message) => {
    it('error should get the error message', () => {
        cy.get('.error-messages > li')
            .should('have.text', 'email or password is invalid')
    })   
})

Cypress.Commands.add('checkUrl', (url) => {
    it('url should match with the requested url', () => {
        cy.url().should('eq', url)
    })
})