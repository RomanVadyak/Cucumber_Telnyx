class SmsApiPage {
  elements = {
    smsApiLink: () => cy.get("#\\35 4WvGrI8bAU6HxT3ks2R3y > div > p"),
    tenDlcChannel: () =>
      cy.get('div>a[href="https://telnyx.com/products/10dlc-registration"]'),
    tollFreeChannel: () =>
      cy.get('div>a[href="https://telnyx.com/products/toll-free-sms"]'),
    shortCodeChannel: () =>
      cy.get('div>a[href="https://telnyx.com/products/sms-short-code"]'),
    senderIdChannel: () =>
      cy.get(
        'div>a[href="https://telnyx.com/products/alphanumeric-sender-id"]'
      ),
  };

  clickSmsApiLink() {
    this.elements.smsApiLink().click();
  }
}

export default new SmsApiPage();
