module.exports = {
  'page loads and behaves as expected': (browser) => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('#intro-page', 5000)
      .assert.elementCount('.menu-item', 4)
      .click('.button')
      .pause(400)
      .assert.visible('img')
      // move
      .getAttribute('#image-link', 'href', function test(result) {
        this.assert.ok(result.value.indexOf('strongloop') !== -1, 'link contains strongloop');
      })
      .end();
  },
};
