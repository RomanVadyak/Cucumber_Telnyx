class OurNetworkPage {
  elements = {
    ourNetworkLink: () =>
      cy.get(
        "#V7MvUjDWyLhssHcmk5x6L > div.flex.items-center.gap-xs.flex-grow > p"
      ),
    setiBtn: () => cy.get('.c-ihSZrZ > [rel="noopener"]'),
    shopBtn: () => cy.get('.c-ihSZrZ > [href="https://shop.telnyx.com"]'),
    contactUsBtn: () => cy.get('.c-ihSZrZ > [href="/contact-us"]'),
    logInBtn: () => cy.get('.c-ihSZrZ > [href="https://portal.telnyx.com"]'),
  };

  clickOurNetworkLink() {
    this.elements.ourNetworkLink().click();
  }
}

export default new OurNetworkPage();
