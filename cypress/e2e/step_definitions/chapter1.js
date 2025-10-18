import basePage from "../pages/basePage";
import shortCodePage from "../pages/shortCodePage";
import pricingPage from "../pages/pricingPage";
import signUpPage from "../pages/signUpPage";
import ourNetworkPage from "../pages/ourNetworkPage";
import aiTemplatesPage from "../pages/aiTemplatesPage";
import { verifyUrlIncludes } from "../helpers/verifyUrl";
import {
  ourNetworkPageUrl,
  pricingPageUrl,
  signUpPageUrl,
  smsShortCodePageUrl,
  templatesPageUrl,
} from "../helpers/constants";
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
