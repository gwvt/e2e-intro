module.exports = {
  'user navigates to tools page': (browser) => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('#tools-link', 5000)
      .click('#tools-link')
      .waitForElementVisible('#tools-page', 5000);
  },

  'and tries to enter letters in the Nightwatch input': (browser) => {
    browser
      .waitForElementVisible('#Nightwatch-input', 5000)
      // set value of input
      .setValue('#Nightwatch-input', 'words')
      // assert value of input equals
      .assert.value('#Nightwatch-input', '');
  },

  'and enters numbers in all inputs, with the largest number in the Nightwatch input': (browser) => {
    browser
      .setValue('#Nightwatch-input', '10')
      .setValue('#WebdriverIO-input', '2')
      .setValue('#Protractor-input', '3')
      .setValue('#Cypress-input', '7')
      .waitForElementVisible('#winner-message', 5000)
      // assert element contains text
      .assert.containsText('#winner-message', 'Tonight\'s winner is Nightwatch!')
      .end();
  },

};
