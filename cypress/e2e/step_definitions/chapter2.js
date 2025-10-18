import basePage from "../pages/basePage";
import { verifyUrlIncludes } from "../helpers/verifyUrl";
import smsApiPage from "../pages/smsApiPage";
import retailAndCommercePage from "../pages/retailAndCommercePage";
import storagePage from "../pages/storagePage";
import pricingPage from "../pages/pricingPage";
import {
  Before,
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import {
  cloudStorePageUrl,
  pricingPageUrl,
  retailAndCommercePageUrl,
  smsApiPageUrl,
} from "../helpers/constants";

Before(() => {
  cy.visit("/");
});

Then("The Products button should be visible and have text", () => {
  basePage.navBarElements
    .productsOption()
    .should("be.visible")
    .and("not.be.empty");
});

Then("The Solutions button should be visible and have text", () => {
  basePage.navBarElements
    .solutionsOption()
    .should("be.visible")
    .and("not.be.empty");
});

Then("The Pricing button should be visible and have text", () => {
  basePage.navBarElements
    .pricingOption()
    .should("be.visible")
    .and("not.be.empty");
});

Then("The whyTelntx button should be visible and have text", () => {
  basePage.navBarElements
    .whyTelnyxOption()
    .should("be.visible")
    .and("not.be.empty");
});

Then("The Resources button should be visible and have text", () => {
  basePage.navBarElements
    .resourcesOption()
    .should("be.visible")
    .and("not.be.empty");
});

Then("The Developers button should be visible and have text", () => {
  basePage.navBarElements
    .developersOption()
    .should("be.visible")
    .and("not.be.empty");
});

When("I hover to {string} link on navigation bar and click it", (linkText) => {
  basePage.clickProductsLink(linkText);
});

When("I click on the SMS API link", () => {
  smsApiPage.clickSmsApiLink();
});

Then("The sms API page is displayed", () => {
  verifyUrlIncludes(smsApiPageUrl);
});

Then("Four channel links are visible", () => {
  smsApiPage.elements.tenDlcChannel().should("be.visible");
  smsApiPage.elements.tollFreeChannel().should("be.visible");
  smsApiPage.elements.shortCodeChannel().should("be.visible");
  smsApiPage.elements.senderIdChannel().should("be.visible");
});

When("I click on the Solutions link in the navigation bar", () => {
  basePage.clickSolutionLink();
});

When("I click on Retail and E-comerce link", () => {
  retailAndCommercePage.clickRetailAndCommerceLink();
});

Then("The Retail and E-comerce page is displayed", () => {
  verifyUrlIncludes(retailAndCommercePageUrl);
});

Then("The page have {string} title", (titleText) => {
  retailAndCommercePage.elements
    .browsersIntoBuyersText()
    .should("be.visible")
    .and("have.text", titleText);
});

Then("The page have two visible buttons under the title", () => {
  retailAndCommercePage.elements
    .startBuildingBtn()
    .should("be.visible")
    .and("not.be.empty");
  retailAndCommercePage.elements
    .speakWithExpertBtn()
    .should("be.visible")
    .and("not.be.empty");
});

When(
  "I click on the {string} link at the start of the navigation bar",
  (linkText) => {
    basePage.clickProductsLink(linkText);
  }
);

When("I click on Storage link", () => {
  storagePage.clickStorageLink();
});

Then("The Cloud Storage page is displayed", () => {
  verifyUrlIncludes(cloudStorePageUrl);
});

Then("Resources section have 3 visible buttons", () => {
  storagePage.elements.exploreDocsBtn().should("be.visible");
  storagePage.elements.watchVideoBtn().should("be.visible");
  storagePage.elements.readArticleBtn().should("be.visible");
});

When(
  "I click on {string} link in the navigation bar in the header of the site",
  (linkText) => {
    basePage.clickPricingLink(linkText);
  }
);

Then("The Pricing page is displayed", () => {
  verifyUrlIncludes(pricingPageUrl);
});

Then("The {string} title is visible", (firstTitleText) => {
  pricingPage.elements
    .companySectionText()
    .should("be.visible")
    .and("have.text", firstTitleText);
});

Then("The {string} title have correct text", (secondTitleText) => {
  pricingPage.elements
    .legalSectionText()
    .should("be.visible")
    .and("have.text", secondTitleText);
});

Then("The {string} title is present", (thirdTitleText) => {
  pricingPage.elements
    .compareSectionText()
    .should("be.visible")
    .and("have.text", thirdTitleText);
});
