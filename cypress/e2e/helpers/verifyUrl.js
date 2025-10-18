export const verifyUrlIncludes = (expectedText) => {
  cy.url().should("include", expectedText);
};
