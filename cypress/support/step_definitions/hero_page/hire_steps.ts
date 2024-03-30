import { Then, When } from '@badeball/cypress-cucumber-preprocessor'

Then(
    'Alert modal with infomation about log in to hire is visible',
    function () {
        cy.getByCy('alert_modal').should('be.visible')
        cy.getByCy('alert_modal_text')
            .should('be.visible')
            .and('contain.text', 'You must log in to hire this hero.')
    },
)
When('I click on hero hire button', function () {
    cy.get('@hero').within(() => {
        cy.getByCy('money').click()
    })
})

Then('Hero saves counter should not increase', function () {
    cy.get('@hero').within(() => {
        cy.get<string>('@saves_counter').then((counter) => {
            cy.getByCy('saves').should('contain.text', counter)
        })
    })
})

When('I memorize a hero saves counter', function () {
    cy.get('@hero').within(() => {
        cy.getByCy('saves')
            .invoke('text')
            .then((text) => {
                cy.wrap<string>(text).as('saves_counter')
            })
    })
})

When('I confirm hiring a hero using a modal', function () {
    cy.getByCy('hire_modal').should('be.visible')
    cy.getByCy('hire_modal_confirm').click()
})

Then('Hero saves counter should increase', function () {
    cy.get('@hero').within(() => {
        cy.get<string>('@saves_counter').then((counter: string) => {
            cy.getByCy('saves').should('contain.text', Number(counter) + 1)
        })
    })
})

Then('Hero hiring modal should disappear', function () {
    cy.getByCy('hire_modal').should('not.exist')
})

When('I reject hiring a hero using modal', function () {
    cy.getByCy('hire_modal').should('be.visible')
    cy.getByCy('hire_modal_reject').click()
})

When('I memorize hero avatar', function () {
    cy.get('@hero').within(() => {
        cy.getByCy('avatar').invoke('attr', 'src').as('hero_avatar')
    })
})

When('I memorize hero name', function () {
    cy.get('@hero').within(() => {
        cy.getByCy('name').invoke('text').as('hero_name')
    })
})

When('I memorize a hero price', function () {
    cy.get('@hero').within(() => {
        cy.getByCy('price').invoke('text').as('hero_price')
    })
})

Then('Hero hiring modal buttons should be visible', function () {
    cy.getByCy('hire_modal').within(() => {
        cy.getByCy('hire_modal_confirm').should('be.visible').and('be.enabled')
        cy.getByCy('hire_modal_reject').should('be.visible').and('be.enabled')
    })
})

Then('Hero hiring modal name should be correct', function () {
    cy.getByCy('hire_modal').within(() => {
        cy.get<string>('@hero_name').then((name: string) => {
            cy.getByCy('hire_modal_name').should('contain.text', name)
        })
    })
})

Then('Hero hiring modal avatar should be correct', function () {
    cy.getByCy('hire_modal').within(() => {
        cy.get<string>('@hero_avatar').then((avatar: string) => {
            cy.getByCy('hire_modal_avatar').should('have.attr', 'src', avatar)
        })
    })
})

Then('Hero hiring modal price should be correct', function () {
    cy.getByCy('hire_modal').within(() => {
        cy.get<string>('@hero_price').then((price: string) => {
            cy.getByCy('hire_modal_price_text').should(
                'contain.text',
                `Hire this hero for ${price.replace('$', '')}?`,
            )
        })
    })
})

Then('Hero hiring modal should be visible', function () {
    cy.getByCy('hire_modal').should('be.visible')
})
