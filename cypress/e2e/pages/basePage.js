class BasePage {
  navBarElements = {
    productsOption: () => cy.get("#radix-_R_4b9eivb_"),
    solutionsOption: () => cy.get("#radix-_R_4j9eivb_"),
    pricingOption: () => cy.get("#main-menu-content > a > button > span"),
    whyTelnyxOption: () => cy.get("#radix-_R_539eivb_ > .shrink-0"),
    resourcesOption: () => cy.get("#radix-_R_5b9eivb_"),
    developersOption: () => cy.get("#radix-_R_5j9eivb_"),
  };

  clickProductsLink(text) {
    this.navBarElements.productsOption().contains(text).click();
  }

  clickPricingLink(text) {
    this.navBarElements.pricingOption().contains(text).click();
  }

  clickWhyTelnyxLink() {
    this.navBarElements.whyTelnyxOption().click();
  }

  clickResourcesLink() {
    this.navBarElements.resourcesOption().click();
  }

  clickSolutionLink() {
    this.navBarElements.solutionsOption().click();
  }
}

export default new BasePage();
