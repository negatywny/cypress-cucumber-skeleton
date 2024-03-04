declare namespace Cypress {
    interface Chainable<> {
        /**
         * Get one or more DOM elements by data-cy
         * @param selector - data-cy attribute value of element
         * @param options - options same as in cy.get()
         * @example
         * cy.getByCy('example-selector');
         */
        getByCy(
            selector: string,
            options?: Partial<Loggable & Timeoutable & Withinable & Shadow>,
        ): Chainable<JQuery<HTMLElement>>
    }

    type UserType = {
        email: string
        password: string
    }
}
