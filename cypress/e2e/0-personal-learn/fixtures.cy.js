/// <reference types="cypress" />

describe('Working with Fixtures dan Static Data', () => {
    it('Visit the Website', () => {
        cy.visit('https://www.saucedemo.com/')
        // cy.get('.login_logo').contains('Swag Labs')
        cy.fixture("user").then(user => {
            const username = user.username
            const password = user.password

            cy.get('#user-name').clear()
            cy.get('#user-name').type(username)
    
            cy.get('input[name="password"]').clear()
            cy.get('input[name="password"]').type(password)
            
            cy.get('#login-button').click()

            // Buy item
            cy.get('#add-to-cart-sauce-labs-backpack').click()

            // add cart item
            cy.get('.shopping_cart_badge').click()

            // checkout item
            cy.get('#checkout').click()

            // Input data information
            cy.get('#title').contains('Checkout: Your Information')

            cy.get('#first-name').clear()
            cy.get('#first-name').type('Achmad')

            cy.get('#last-name').clear()
            cy.get('#last-name').type('Kurniawan')

            cy.get('#postal-code').clear()
            cy.get('#postal-code').type('15123')

            cy.get('#continue').click()

            // Finish
            cy.get('#finish').click()

            // Back home
            cy.get('#back-to-products').click()
        })
    });
});