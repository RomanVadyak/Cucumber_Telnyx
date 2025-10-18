class ShortCodePage {
  elements = {
    talToAnExpertBtn: () => cy.get("#\\32 FAxPmpgGEycvS4gwjUxiv"),
    shortCodeTitle: () =>
      cy.get("#\\31 a9gwHQwsZJnAJwVvlCvqG > div > header > h2"),
  };

  clickOnShortCodeLink(text) {
    cy.contains(text).click();
  }
}

export default new ShortCodePage();
