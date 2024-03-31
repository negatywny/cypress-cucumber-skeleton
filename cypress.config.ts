import { defineConfig } from 'cypress'
import createBundler from '@bahmutov/cypress-esbuild-preprocessor'
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor'
//@ts-ignore
import createEsbuildPlugin from '@badeball/cypress-cucumber-preprocessor/esbuild'

async function setupNodeEvents(
    on: Cypress.PluginEvents,
    config: Cypress.PluginConfigOptions,
): Promise<Cypress.PluginConfigOptions> {
    await addCucumberPreprocessorPlugin(on, config)

    on(
        'file:preprocessor',
        createBundler({
            plugins: [createEsbuildPlugin(config)],
        }),
    )
    return config
}

export default defineConfig({
    e2e: {
        baseUrl: 'http://localhost:3000',
        specPattern: '**/*.feature',
        screenshotsFolder: 'cypress/screenshots',
        screenshotOnRunFailure: true,
        viewportHeight: 720,
        viewportWidth: 1280,
        supportFile: 'cypress/support/e2e.ts',
        defaultCommandTimeout: 1500,
        scrollBehavior: 'center',
        chromeWebSecurity: false,
        watchForFileChanges: true,
        testIsolation: true,
        retries: {
            runMode: 0,
            openMode: 0,
        },
        setupNodeEvents,
    },
})
