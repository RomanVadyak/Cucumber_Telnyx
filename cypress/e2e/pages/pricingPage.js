class PricingPAge {
  elements = {
    cloudStorageBtn: () =>
      cy.get(
        "#compute > div > div:nth-child(1) > div > a > div > div:nth-child(1) > span"
      ),
    inferenceBtn: () =>
      cy.get(
        "#compute > div > div:nth-child(2) > div > a > div > div:nth-child(1) > span"
      ),
    companySectionText: () =>
      cy.get(
        "#layout > footer > div.c-hfgiSY.c-hfgiSY-ildsFlb-css > div:nth-child(4) > ul > p"
      ),
    legalSectionText: () =>
      cy.get(
        "#layout > footer > div.c-hfgiSY.c-hfgiSY-ildsFlb-css > div:nth-child(5) > ul > p"
      ),
    compareSectionText: () =>
      cy.get(
        "#layout > footer > div.c-hfgiSY.c-hfgiSY-ildsFlb-css > div:nth-child(6) > ul > p"
      ),
    programNetworkingBtn: () =>
      cy.get("#networking > div > div:nth-child(1) > div > a > div"),
    globalEdgeRouterBtn: () =>
      cy.get("#networking > div > div:nth-child(2) > div > a > div"),
  };
}

export default new PricingPAge();
