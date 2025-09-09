import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('I access the EngageSphare app having already accepted the cookies banner', () => {
  cy.setCookie('cookieConsent', 'accepted')
  cy.visit('https://engage-sphere.vercel.app/')
})

When('I filter by {string} items per page', numOfItems => {
  cy.get('[aria-label="Pagination limit"]').select(numOfItems)
})

Then('I see {string} table rows', numOfTableRows => {
  cy.get('tbody tr').should('have.length', numOfTableRows)
})
