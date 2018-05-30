module.exports = {
  // split test into multiple steps
  'user navigates to ask-web page': (browser) => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('#ask-web-link', 5000)
      .click('#ask-web-link')
      .waitForElementVisible('#ask-web-page', 5000);
  },

  'and hovers over image 1': (browser) => {
    browser
      // hover over element
      .moveToElement('#image-area-1', 10, 10)
      // assert element is present
      .assert.elementPresent('#answer-1')
      // assert element is not present
      .assert.elementNotPresent('#answer-2');
  },

  'and hovers over image 2': (browser) => {
    browser
      .moveToElement('#image-area-2', 10, 10)
      .assert.elementPresent('#answer-2')
      .assert.elementNotPresent('#answer-1')
      .end();
  },
};
