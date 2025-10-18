class CustomerStories {
  elements = {
    customerStoriesLink: () =>
      cy.get(
        "#l70osYgjjWI9zhThfHgzs > div.flex.items-center.gap-xs.flex-grow > p"
      ),
    copyrightText: () =>
      cy.get(
        "#layout > footer > div:nth-child(2) > div > div > p:nth-child(1)"
      ),
  };

  clickCustomerStoriesLink() {
    this.elements.customerStoriesLink().click();
  }
}

export default new CustomerStories();
