class HomePage{
    getGlobalFeed() {
        return cy.get('.feed-toggle > .nav > :nth-child(2) > .nav-link')
    }

    getUserName() {
        return cy.get(':nth-child(4) > .nav-link')
    }

    validateUrl() {
        cy.checkUrl('https://react-mobx.realworld.io/#/')
    }
}

export default HomePage;