const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    specPattern: ['cypress/e2e/**/*.feature', 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}'],
    supportFile: 'cypress/support/index.js',
  },
});