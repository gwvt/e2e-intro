module.exports = {
  // add before hook
  /* eslint-disable-next-line no-unused-vars */
  before: (browser) => {
    console.log('Running tests...');
  },

  // add beforeEach hook
  /* eslint-disable-next-line no-unused-vars */
  beforeEach: (browser) => {
    console.log('Will it pass?');
  },

  'user navigates to use-e2e page': (browser) => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('#use-e2e-link', 5000)
      .click('#use-e2e-link')
      // test url
      .assert.urlContains('use-e2e')
      .waitForElementVisible('#use-e2e-page', 5000);
  },

  'and clicks on "regression testing" text': (browser) => {
    browser
      .waitForElementVisible('#uses-0', 5000)
      .assert.cssClassNotPresent('#uses-0', 'strikethrough')
      .click('#uses-0', () => {
        console.log('user clicks on text');
      })
      .assert.cssClassPresent('#uses-0', 'strikethrough');
  },

  'and clicks on "regression testing" text again': (browser) => {
    browser
      .click('#uses-0', () => {
        console.log('user clicks on text');
      })
      .assert.cssClassNotPresent('#uses-0', 'strikethrough')
      .end();
  },
};
