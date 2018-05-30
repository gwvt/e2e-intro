module.exports = {
  'page loads correctly': (browser) => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('#ask-web-link', 5000)
      .click('#ask-web-link')
      .waitForElementVisible('#ask-web-page', 5000);
  },

  'answer #1 image shows': (browser) => {
    browser
      .moveToElement('#image-area-1', 10, 10)
      .pause(400)
      .assert.elementPresent('#answer-1')
      .assert.elementNotPresent('#answer-2');
  },

  'answer #2 image shows': (browser) => {
    browser
      .moveToElement('#image-area-2', 10, 10)
      .pause(400)
      .assert.elementPresent('#answer-2')
      .assert.elementNotPresent('#answer-1')
      .end();
  },
};
