import {
  Before,
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import basePage from "../pages/basePage";
import programmableNetworkingPage from "../pages/programmableNetworkingPage";
import healthcarePage from "../pages/healthcarePage";
import pricingPage from "../pages/pricingPage";
import missionControlPage from "../pages/missionControlPage";
import customerStories from "../pages/customerStories";
import {
  customersStoriesPageUrl,
  healthcarePageUrl,
  missionControlPageUrl,
  pricingPageUrl,
  programmableNetworkingPageUrl,
} from "../helpers/constants";
import { verifyUrlIncludes } from "../helpers/verifyUrl";

Before(() => {
  cy.visit("/");
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
