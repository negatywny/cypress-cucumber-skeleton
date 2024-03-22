import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor'

Given('Im on the hero page', function () {
    cy.visit('/')
})

When('I click on first hero like button', function () {
    cy.getByCy('hero_card')
        .first()
        .within(() => {
            cy.getByCy('like').click()
        })
})

Then(
    'Alert modal with infomation about log in to like is visible',
    function () {
        cy.getByCy('alert_modal').should('be.visible')
        cy.getByCy('alert_modal_text')
            .should('be.visible')
            .and('contain.text', 'You must log in to like.')
    },
)

Then('I am able to close login information modal', function () {
    cy.getByCy('alert_modal_submit_button').click()
    cy.getByCy('alert-_modal').should('not.exist')
})