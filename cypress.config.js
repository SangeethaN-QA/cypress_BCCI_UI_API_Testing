const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/report/mochawesome-report',
    overwrite: false,
    html: true,
    json: true,
    timestamp:"mmDDyyyy_HHmmss"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
 
})

