import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor'

Given('Example Given', function () {
    cy.visit('')
    cy.log('Given')
})

When('Example When', function () {
    cy.log('When')
})

Then('Example Then {string}', function (str: string) {
    cy.log('Example Then: ' + str)
})

Then('Example Then2 {int}', function (nmb: number) {
    cy.log('Example Then2: ' + nmb)
})
