/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//

Cypress.Commands.add('getByCy', (selector, ...args) => {
    return cy.get(`[data-cy=${selector}]`, ...args)
})

Cypress.Commands.add('login', (email, password) => {
    return cy
        .wrap(email)
        .as('email')
        .then(() => {
            cy.intercept('/auth').as('auth')
            cy.visit('/')
                .getByCy('login_button')
                .click()
                .then(() => {
                    cy.getByCy('email_input')
                        .type(email)
                        .getByCy('password_input')
                        .type(password)
                        .getByCy('submit_button')
                        .click()
                })
        })
})
