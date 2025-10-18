class AiTemplatesPage {
  elements = {
    aiTemplatesPageLink: () =>
      cy.get(
        "#\\32 2V1fahqx3qsZVynkehSCg > div.flex.items-center.gap-xs.flex-grow > p"
      ),
    searchInput: () => cy.get("#search"),
    noResultsText: () =>
      cy.get("#jndc9j677dp8mk048y8331gz > div > div:nth-child(3) > p"),
  };

  clickAiTemplatesPageLink() {
    this.elements.aiTemplatesPageLink().click();
  }

  typeInSearchInput(query, key) {
    this.elements.searchInput().type(`${query}{${key}}`);
  }
}

export default new AiTemplatesPage();
