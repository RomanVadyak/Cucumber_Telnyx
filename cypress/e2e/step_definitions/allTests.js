import basePage from "../pages/basePage";
import shortCodePage from "../pages/shortCodePage";
import pricingPage from "../pages/pricingPage";
import signUpPage from "../pages/signUpPage";
import smsApiPage from "../pages/smsApiPage";
import retailAndCommercePage from "../pages/retailAndCommercePage";
import storagePage from "../pages/storagePage";
import programmableNetworkingPage from "../pages/programmableNetworkingPage";
import healthcarePage from "../pages/healthcarePage";
import missionControlPage from "../pages/missionControlPage";
import customerStories from "../pages/customerStories";
import ourNetworkPage from "../pages/ourNetworkPage";
import aiTemplatesPage from "../pages/aiTemplatesPage";
import { verifyUrlIncludes } from "../helpers/verifyUrl";
import {
  ourNetworkPageUrl,
  pricingPageUrl,
  signUpPageUrl,
  smsShortCodePageUrl,
  templatesPageUrl,
  cloudStorePageUrl,
  retailAndCommercePageUrl,
  smsApiPageUrl,
  customersStoriesPageUrl,
  healthcarePageUrl,
  missionControlPageUrl,
  programmableNetworkingPageUrl,
} from "../helpers/urlPaths";
import {
  Before,
  Given,
  When,
  Then,
  link,
} from "@badeball/cypress-cucumber-preprocessor";

Before(() => {
  cy.visit("/");
});

When("I click on the {string} link in the navigation bar", (linkText) => {
  basePage.clickProductsLink(linkText);
});

When("I hover and click on the {string} link", (linkText) => {
  shortCodePage.clickOnShortCodeLink(linkText);
});

Then("The Short Code page should be displayed", () => {
  verifyUrlIncludes(smsShortCodePageUrl);
});

Then("The Talk to an expert button should be visible", () => {
  shortCodePage.elements.talToAnExpertBtn().should("be.visible");
});

Then("The about title should be visible and have {string} text", (linkText) => {
  shortCodePage.elements
    .shortCodeTitle()
    .should("be.visible")
    .and("have.text", linkText);
});

When("I click on {string} link in the navigation bar", (linkText) => {
  basePage.clickPricingLink(linkText);
});

Then("The Pricing page should be displayed", () => {
  verifyUrlIncludes(pricingPageUrl);
});

Then("The Cloud Storage button should be visible", () => {
  pricingPage.elements.cloudStorageBtn().should("be.visible");
});

Then("The Inference button should be visible", () => {
  pricingPage.elements.inferenceBtn().should("be.visible");
});

When("I click on the Sign Up link", () => {
  signUpPage.clickOnSignUpBtn();
});

Then("The Sign Up page is displayed", () => {
  verifyUrlIncludes(signUpPageUrl);
});

Then("The Create Telnyx Account form is visible", () => {
  signUpPage.elements.createTelnyxAccForm().should("be.visible");
});

Then("The form have {string} text", (titleText) => {
  signUpPage.elements
    .createAccFormTitle()
    .should("be.visible")
    .and("have.text", titleText);
});

When("I click on the Why Telnyx link", () => {
  basePage.clickWhyTelnyxLink();
});

When("I click on the Our Network link", () => {
  ourNetworkPage.clickOurNetworkLink();
});

Then("The Our Network page is displayed", () => {
  verifyUrlIncludes(ourNetworkPageUrl);
});

Then("The four links on the top right corner are visible", () => {
  ourNetworkPage.elements.setiBtn().should("be.visible");
  ourNetworkPage.elements.shopBtn().should("be.visible");
  ourNetworkPage.elements.contactUsBtn().should("be.visible");
  ourNetworkPage.elements.logInBtn().should("be.visible");
});

When("I click on the Resources link in the navigation bar", () => {
  basePage.clickResourcesLink();
});

When("I click on the AI Templates link", () => {
  aiTemplatesPage.clickAiTemplatesPageLink();
});

Then("The AI Templates page is displayed", () => {
  verifyUrlIncludes(templatesPageUrl);
});

Then(
  "I type {string} in the search bar and click {string}",
  (inputQuery, pressKey) => {
    aiTemplatesPage.typeInSearchInput(inputQuery, pressKey);
  }
);

Then("The {string} text is visible", (resultText) => {
  aiTemplatesPage.elements
    .noResultsText()
    .should("be.visible")
    .and("have.text", resultText);
});

Then("The Products button should be visible and not be empty", () => {
  basePage.navBarElements
    .productsOption()
    .should("be.visible")
    .and("not.be.empty");
});

Then("The Solutions button should be visible and not be empty", () => {
  basePage.navBarElements
    .solutionsOption()
    .should("be.visible")
    .and("not.be.empty");
});

Then("The Pricing button should be visible and not be empty", () => {
  basePage.navBarElements
    .pricingOption()
    .should("be.visible")
    .and("not.be.empty");
});

Then("The whyTelntx button should be visible and not be empty", () => {
  basePage.navBarElements
    .whyTelnyxOption()
    .should("be.visible")
    .and("not.be.empty");
});

Then("The Resources button should be visible and not be empty", () => {
  basePage.navBarElements
    .resourcesOption()
    .should("be.visible")
    .and("not.be.empty");
});

Then("The Developers button should be visible and not be empty", () => {
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

When("I click on {string} link on the main page", (linkText) => {
  basePage.clickProductsLink(linkText);
});

When("I click on Programmable Networking", () => {
  programmableNetworkingPage.clickProgrammableNetworkingLink();
});

Then("The Programmable Networking page is displayed", () => {
  verifyUrlIncludes(programmableNetworkingPageUrl);
});

Then("The Telnyx Pricing section is visible and not empty", () => {
  programmableNetworkingPage.elements
    .pricingBox()
    .should("be.visible")
    .and("not.be.empty");
});

When("I click on the Solutions link", () => {
  basePage.clickSolutionLink();
});

When("I click on Healthcare link", () => {
  healthcarePage.clickHealthcareLink();
});

Then("The Healthcare page is displayed", () => {
  verifyUrlIncludes(healthcarePageUrl);
});

Then("Three first buttons are visible", () => {
  healthcarePage.elements.scheduleDemoBtn().should("be.visible");
  healthcarePage.elements.signUpBtn().should("be.visible");
  healthcarePage.elements.contactSalesBtn().should("be.visible");
});

When("I click on the first navigation link with text {string}", (linkText) => {
  basePage.clickPricingLink(linkText);
});

Then("Pricing page is displayed", () => {
  verifyUrlIncludes(pricingPageUrl);
});

Then("Networking links are visible and not empty", () => {
  pricingPage.elements
    .programNetworkingBtn()
    .should("be.visible")
    .and("not.be.empty");
  pricingPage.elements
    .globalEdgeRouterBtn()
    .should("be.visible")
    .and("not.be.empty");
});

When("I click on the Why Telnyx link in the navigation bar", () => {
  basePage.clickWhyTelnyxLink();
});

When("I click on the Mission Control Portal link", () => {
  missionControlPage.clickMissionControlLink();
});

Then("Mission Control page is displayed", () => {
  verifyUrlIncludes(missionControlPageUrl);
});

Then("Four plus buttons in FAQ section are visible", () => {
  missionControlPage.elements
    .fourBtnsClass()
    .should("have.length", 4)
    .each((el) => {
      cy.wrap(el).should("be.visible");
    });
});

When("I click on the Resources link", () => {
  basePage.clickResourcesLink();
});

When("I click on the Customers Stories link", () => {
  customerStories.clickCustomerStoriesLink();
});

Then("The Customers Stories page is displayed", () => {
  verifyUrlIncludes(customersStoriesPageUrl);
});

Then(
  "Copyright text in the footer of the site is visible and have {string} text",
  (copyrightText) => {
    customerStories.elements
      .copyrightText()
      .should("be.visible")
      .and("have.text", copyrightText);
  }
);
