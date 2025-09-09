import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('I access the Hacker Stories web app', () => {
  cy.visit('https://wlsf82-hacker-stories.web.app/')
})

When('I search for these terms', table => {
  table.raw()[0].forEach(term => {
    cy.get('#search')
      .clear()
      .type(`${term}{enter}`)
  })
})

Then('I see {string} buttons, one for each of the last searched terms', numOfButtons => {
  cy.get('.last-searches button').should('have.length', numOfButtons)
})
