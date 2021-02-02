/// <reference types="cypress" />

context('Sign in', () => {
    beforeEach(()=>{
        cy.visit('https://react-mobx.realworld.io/#/login')
    })

    describe('Sign in test', () => {
        it('sign in succesfully with valid email and password', () => { 
            // enter email
            cy.get(':nth-child(1) > .form-control')
                .type('merve123@gmail.com')
            // enter password
            cy.get(':nth-child(2) > .form-control')
                .type('merve123')
            // click sign in 
            cy.get('.btn')
                .click()
            // assert redirect to home page
            // validate url
            cy.url().should('eq', 'https://react-mobx.realworld.io/#/')
            cy.url().should('include', 'https://react-mobx.realworld.io/#/')
            // assert "Global feed element on the screen"
            cy.get('.feed-toggle > .nav > :nth-child(2) > .nav-link')
                .should('have.text', 'Global Feed')
            cy.get(':nth-child(4) > .nav-link')
                .should('have.text', 'merve123')
        })

        it('sign in fails with an invalid password', () => {
            // enter email
            cy.get(':nth-child(1) > .form-control')
                .type('merve123@gmail.com')
            // enter password
            cy.get(':nth-child(2) > .form-control')
                .type('merve1234')
            // click sign in 
            cy.get('.btn')
                .click()
            // check error message
            cy.get('.error-messages > li')
                .should('have.text', 'email or password is invalid')
        })
    
        it('gives error when clicking "sign in" button with an empty email input', () => {
            // enter password
            cy.get(':nth-child(2) > .form-control')
                .type('merve123')
            // click sign in 
            cy.get('.btn')
                .click()
            // check error message
            cy.get('.error-messages > li')
                .should('have.text', 'email or password is invalid')
        })

        it('gives error when clicking "sign in" button with single quote password input', () => {
            // enter email
            cy.get(':nth-child(1) > .form-control')
                .type('merve123@gmail.com')
            // enter password
            cy.get(':nth-child(2) > .form-control')
                .type("'")
            // click sign in 
            cy.get('.btn')
                .click()
            // check error message
            cy.get('.error-messages > li')
                .should('have.text', 'email or password is invalid')
        })
    })
})