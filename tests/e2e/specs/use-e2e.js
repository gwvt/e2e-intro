module.exports = {
  /* eslint-disable-next-line no-unused-vars */
  before: (browser) => {
    /* eslint-disable-next-line no-console */
    console.log('User logs in');
  },

  /* eslint-disable-next-line no-unused-vars */
  beforeEach: (browser) => {
    /* eslint-disable-next-line no-console */
    console.log('Will it pass?');
  },

  'page loads': (browser) => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('#use-e2e-link', 5000)
      .click('#use-e2e-link')
      .waitForElementVisible('#use-e2e-page', 5000);
  },

  'user interaction changes class': (browser) => {
    browser
      .waitForElementVisible('#uses-0', 5000)
      .assert.cssClassNotPresent('#uses-0', 'strikethrough')
      .click('#uses-0')
      .assert.cssClassPresent('#uses-0', 'strikethrough')
      .click('#uses-0')
      .assert.cssClassNotPresent('#uses-0', 'strikethrough')
      .end();
  },
};
