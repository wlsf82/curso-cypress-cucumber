import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('I access the EngageSphare app having already accepted the cookies banner', () => {
  cy.setCookie('cookieConsent', 'accepted')
  cy.visit('https://engage-sphere.vercel.app/')
})

Then('I see the following greeting: Hi there!', () => {
  cy.contains('h2', 'Hi there!').should('be.visible')
})

When('I type {string} in the name input field', name => {
  cy.get('input[data-testid="name"]').type(name)
})

Then('I see the following greeting: Hi {string}!', name => {
  cy.contains('h2', `Hi ${name}!`).should('be.visible')
})

Then('I see the following icon: {string}', icon => {
  if (icon !== 'none') {
    cy.get(`.${icon}`).should('be.visible')
  }
})
