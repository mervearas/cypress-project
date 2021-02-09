class LoginPage {
    visit() {
        return cy.visit('https://react-mobx.realworld.io/#/login')
    }
    
    email() {
        return cy.get(':nth-child(1) > .form-control')
    }

    password() {
        return cy.get(':nth-child(2) > .form-control')
    }

    signinButton() {
        return cy.get('.btn')
    }

    validateErrorMessage() {
        return cy.error('email or password is invalid');
    }
}

export default LoginPage;