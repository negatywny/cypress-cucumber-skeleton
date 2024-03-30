import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor'

Given('Email is: {string}', function (email: string) {
    cy.wrap(email).as('email')
})

Given('Password is: {string}', function (password: string) {
    cy.wrap(password).as('password')
})

When('I open a login modal', function () {
    cy.visit('/')
        .getByCy('login_button')
        .click()
        .then(() => {
            cy.getByCy('login_modal_header').should('be.visible')
        })
})

When('I fill email input', function () {
    cy.get<string>('@email').then((email) => {
        cy.getByCy('email_input').type(email)
    })
})

When('I fill password input', function () {
    cy.get<string>('@password').then((password) => {
        cy.getByCy('password_input').type(password)
    })
})

When('I click on sign in button', function () {
    cy.intercept('/auth').as('auth')
    cy.getByCy('submit_button').click()
})

Then('I should be logged as normal user', function () {
    cy.get<string>('@email').then((email) => {
        cy.wait('@auth')
            .its('response.body.user')
            .then((user) => {
                cy.wrap(user).should('have.a.property', 'email', email)
                cy.wrap(user).should('have.a.property', 'isAdmin', false)
            })
    })
    cy.getByCy('logout_button').should('be.enabled')
    cy.getByCy('create_new_hero_button').should('not.exist')
})

Then('I should be logged as admin', function () {
    cy.get<string>('@email').then((email) => {
        cy.wait('@auth')
            .its('response.body.user')
            .then((user) => {
                cy.wrap(user).should('have.a.property', 'email', email)
                cy.wrap(user).should('have.a.property', 'isAdmin', true)
            })
    })
    cy.getByCy('logout_button').should('be.enabled')
    cy.getByCy('create_new_hero_button').should('be.enabled')
})

Then('I should see Invalid email or password modal error', function () {
    cy.getByCy('modal_error').should(
        'contain.text',
        'Invalid email or password',
    )
})

Then('I should see Password is required input error', function () {
    cy.getByCy('password_error')
        .should('be.visible')
        .and('contain.text', 'Password is required')
})

Then('I should see Email is required input error', function () {
    cy.getByCy('email_error')
        .should('be.visible')
        .and('contain.text', 'Email is required')
})

Then('I should not sign in', function () {
    cy.wait('@auth').its('response.statusCode').should('eq', 401)
    cy.getByCy('login_button').should('be.visible')
})

When('I log in as normal user', function () {
    cy.login('test@test.com', 'test123')
})

When('I log in as admin', function () {
    cy.login('admin@test.com', 'test123')
})

Then('I should see Email is not valid input error', () => {
    cy.getByCy('email_error')
        .should('be.visible')
        .and('contain.text', 'Email is not valid')
})
