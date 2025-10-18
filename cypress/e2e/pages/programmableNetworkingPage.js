class ProgrammableNetworkingPage {
  elements = {
    programmableNetworkinLink: () => cy.get("#GTOVeDYpLQlAu2FyYvZyR > div > p"),
    pricingBox: () => cy.get("#\\31 V5Az4TpjuFF0gBPv3slJG"),
  };

  clickProgrammableNetworkingLink() {
    this.elements.programmableNetworkinLink().click();
  }
}

export default new ProgrammableNetworkingPage();
