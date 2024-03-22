declare namespace Cypress {
    interface Chainable<> {
        /**
         * Get one or more DOM elements by data-cy
         * @param selector - data-cy attribute value of element
         * @param options - options same as in cy.get()
         * @example
         * cy.getByCy('example_selector');
         */
        getByCy(
            selector: string,
            options?: Partial<Loggable & Timeoutable & Withinable & Shadow>,
        ): Chainable<JQuery<HTMLElement>>

        /**
         * Login on user with provided email and password.
         * Additionally add alias for email for assertions
         * @param email - user email
         * @param password - user password
         * @example
         * cy.login('sample_email, sample_password');
         */
        login(email: string, password: string)
    }

    type UserType = {
        email: string
        password: string
    }
}
