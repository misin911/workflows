const { defineConfig } = require("cypress");

module.exports = defineConfig({
   reporter: "mochawesome",
    reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true
  },
  e2e: {
     video: true,                     // record videos
    videoCompression: 32,            // compress video (1–51, lower = better quality)
    videoUploadOnPasses: false,      // upload video only on failed tests (CI)
    screenshotOnRunFailure: true,    // take screenshot on failure
    screenshotsFolder: "cypress/screenshots",
    videosFolder: "cypress/videos",
    trashAssetsBeforeRuns: true  ,    // delete old videos/screenshots
    watchForFileChanges: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
