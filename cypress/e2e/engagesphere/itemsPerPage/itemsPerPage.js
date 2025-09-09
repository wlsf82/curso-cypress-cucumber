import { When, Then } from '@badeball/cypress-cucumber-preprocessor'

When('I filter by {string} items per page', numOfItems => {
  cy.get('[aria-label="Pagination limit"]').select(numOfItems)
})

Then('I see {string} table rows', numOfTableRows => {
  cy.get('tbody tr').should('have.length', numOfTableRows)
})
