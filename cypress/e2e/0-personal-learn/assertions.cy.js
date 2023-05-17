/// <reference types="cypress" />

// describe('Browser Actions', () => {
//     it('Should load correct url', () => {
//         cy.visit('https://example.com', {timeout: 10000})
//     });

//     it('Should check correct url', () => {
//         cy.url().should('include', 'example.com')
//     });

//     it('Should check for correct element on the page', () => {
//         cy.get('h1').should('be.visible')
//     });
// });

describe('My Tugas Section 5 Assertions', () => {
    it('Clicking "Type" shows the right headings', () => {
        cy.visit('https://example.cypress.io')

        // cy.pause()

        cy.contains('type').click()

        // should be on a new URL which includes '/commands/actions'
        cy.url().should('include', '/commands/actions')

        // get an input, type into it and verify that the value has been updated
        cy.get('.action-email')
        .type('achmad.kurniawan0601@gmail.com')
        .should('have.value', 'achmad.kurniawan0601@gmail.com')
    });
});