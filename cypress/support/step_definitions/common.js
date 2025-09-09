import { Given } from '@badeball/cypress-cucumber-preprocessor'

Given('I access the EngageSphare app having already accepted the cookies banner', () => {
  cy.setCookie('cookieConsent', 'accepted')
  cy.visit('https://engage-sphere.vercel.app/')
})
