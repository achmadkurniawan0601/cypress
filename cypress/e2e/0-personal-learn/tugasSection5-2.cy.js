/// <reference types="cypress" />

describe('My Tugas Section 5 bagian 2', () => {
    it('Clicking "Type" shows the right heading', () => {
        cy.visit('https://example.cypress.io')

        cy.pause()

        cy.contains('type').click()

        // should be on a new URL which includes '/commands/actions'
        cy.url().should('include', '/commands/actions')

        // get an input, type into it and verify that the value has been updated
        cy.get('.action-email')
        .type('achmad.kurniawan0601@gmail.com')
        .should('have.value', 'achmad.kurniawan0601@gmail.com')
    });
});