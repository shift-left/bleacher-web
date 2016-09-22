var BaseTest = require("shiftleft-nightwatch/lib/base-test");

module.exports = new BaseTest({

  "tags": ["smoke"],

  "open bleacher creatures page": function (client) {
    client
      .url("http://bleachercreatures.com");
  },

  "search for batman": function (client) {
    client
      .clickElement("a[class=close]")
      .setElementValue("input[id=search]", "batman")
      .clickElement("button[type=submit]");
  },

  /*
  "verify search result": function (client) {
    client
      .getElement("#taw")
      .assert.elementTextContains("#rso>div:eq(0)", "Best match")
      .assert.elementTextContains("#rso>div:eq(0) .r", "Amazon Kindle Fire")
  },
 */

  "add to cart": function (client) {
    client
      .clickElement("button[title='Add to Cart']")
  },

  "click on checkout": function (client) {
    client
      .clickElement(".checkout-now")
  },

  "click on checkout now": function (client) {
    client
      .clickElement("button[title='Checkout Now']")
  }

});
