class RetailAndCommercePage {
  elements = {
    retailAndCommersLink: () => cy.get("#\\35 N9panmMlw5Z215HVxsnTy > div > p"),
    browsersIntoBuyersText: () =>
      cy.get("#\\36 yDcurFtrBpLhw0wKAX0nx > div > div:nth-child(1) > div > h1"),
    startBuildingBtn: () => cy.get("#\\35 Km51OWjqWPlAvn0HoS3ew"),
    speakWithExpertBtn: () => cy.get("#\\35 o7HmZatlEaANLVQI5d8mZ"),
  };

  clickRetailAndCommerceLink() {
    this.elements.retailAndCommersLink().click();
  }
}

export default new RetailAndCommercePage();
