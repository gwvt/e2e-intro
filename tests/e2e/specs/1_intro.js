module.exports = {
  // method name describes the test
  'user navigates to page and clicks on view pyramid button': (browser) => {
    browser
      // set browser url
      .url(process.env.VUE_DEV_SERVER_URL)
      // wait until element is visible
      .waitForElementVisible('#intro-page', 5000)
      // test number of items in sidebar nav
      .assert.elementCount('.menu-item', 4)
      // click on element
      .click('.button')
      // assert element is visible
      .assert.visible('img')
      // test attribute of element with callback
      .getAttribute('#image-link', 'href', function test(result) {
        this.assert.ok(result.value.indexOf('strongloop.com') !== -1, 'link contains "strongloop.com"');
      })
      // end session
      .end();
  },
};
