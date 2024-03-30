import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor'

Given('Im on the hero page', function () {
    cy.visit('/')
})

When('I see a first hero', function () {
    cy.getByCy('hero_card').first().as('hero')
})

When('I see a hero with a name {string}', function (name: string) {
    cy.contains(name).parents('[data-cy="hero_card"]').as('hero')
})

When('I click on a hero like button', function () {
    cy.get('@hero').within(() => {
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

When('I memorize a hero fans counter', function () {
    cy.get('@hero').within(() => {
        cy.getByCy('fans').invoke('text').as('fans_counter')
    })
})

Then('Hero fans counter should not increase', function () {
    cy.get('@hero').within(() => {
        cy.get<string>('@fans_counter').then((counter) => {
            cy.getByCy('fans').should('contain.text', counter)
        })
    })
})

Then('Hero fans counter should increase', function () {
    cy.get('@hero').within(() => {
        cy.get('@fans_counter').then((counter) => {
            cy.getByCy('fans').should('contain.text', +counter)
        })
    })
})
