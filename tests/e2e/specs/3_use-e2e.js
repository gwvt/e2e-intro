/* eslint-disable no-unused-vars */

module.exports = {
  // add before hook
  before: (browser) => {
    console.log('Running tests...');
  },

  // add beforeEach hook
  beforeEach: (browser) => {
    console.log('Will it pass?');
  },

  'user navigates to use-e2e page': (browser) => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('#use-e2e-link', 5000)
      .click('#use-e2e-link')
      // assert url contains
      .assert.urlContains('use-e2e')
      .waitForElementVisible('#use-e2e-page', 5000);
  },

  'and clicks on "regression testing" text': (browser) => {
    browser
      .waitForElementVisible('#uses-1', 5000)
      .assert.cssClassNotPresent('#uses-1', 'strikethrough')
      .click('#uses-1', () => {
        // add additional logging with callback
        console.log('user clicks on "regression testing"');
      })
      // assert css class present
      .assert.cssClassPresent('#uses-1', 'strikethrough');
  },

  'and clicks on "regression testing" text again': (browser) => {
    browser
      .click('#uses-1', () => {
        console.log('user clicks on "regression testing" again');
      })
      // assert css class not present
      .assert.cssClassNotPresent('#uses-1', 'strikethrough')
      .end();
  },
};
