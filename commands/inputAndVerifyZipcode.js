exports.command = function (zipcode, callback) {
  var self = this;

  self
    .url(function (url) {
      if (url.value.indexOf("continue=") > -1) {
        // new page
        self
          .getElement(".deliveryAddressFromV2Container .zipInputField")
          .clearElementValue(".deliveryAddressFromV2Container .zipInputField")
          .setElementValue(".deliveryAddressFromV2Container .zipInputField", zipcode)
          .clickElement(".deliveryAddressFromV2Container button.md-primary[type=submit]");
      } else {
        self
          .getElement(".deliveryAddressPopupContent .zipInputField")
          .clearElementValue(".deliveryAddressPopupContent .zipInputField")
          .setElementValue(".deliveryAddressPopupContent .zipInputField", zipcode)
          .clickElement(".deliveryAddressPopupContent button.md-primary[type=submit]")
          .getElement(".mainDeliverableTitle")
          .assert.elementTextContains(".mainDeliverableTitle", "Deliveries come to " + zipcode)
          .clickElement(".shopNowButton")
          .waitForElementNotPresent(".deliveryAddressPopupContent", 30000);
      }
    });
  return this;
};
