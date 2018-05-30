module.exports = {
  'page loads': (browser) => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('#tools-link', 5000)
      .click('#tools-link')
      .waitForElementVisible('#tools-page', 5000);
  },

  'validation of number input works': (browser) => {
    browser
      .waitForElementVisible('#Nightwatch-input', 5000)
      .setValue('#Nightwatch-input', 'words')
      .assert.value('#Nightwatch-input', '');
  },

  'page logic works': (browser) => {
    browser
      .setValue('#Nightwatch-input', '10')
      .setValue('#WebdriverIO-input', '2')
      .setValue('#Protractor-input', '3')
      .setValue('#Cypress-input', '7')
      .waitForElementVisible('#winner-message', 5000)
      .assert.containsText('#winner-message', 'Tonight\'s winner is Nightwatch!')
      .end();
  },

};
