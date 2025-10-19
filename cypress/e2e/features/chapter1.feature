Feature: Chapter 1 tests

      Scenario: User navigates to Short Code page and verifies title and button
            When I click on the "Products" link in the navigation bar
            And I hover and click on the "Short Code" link
            Then The Short Code page should be displayed
            And The Talk to an expert button should be visible
            And The about title should be visible and have "Short code messaging service " text


      Scenario: User navigates to Pricing page and verifies two Compute buttons are visible
            When I click on "Pricing" link in the navigation bar
            Then The Pricing page should be displayed
            And The Cloud Storage button should be visible
            And The Inference button should be visible


      Scenario: User navigates to Sign Up page and verifies Create Telnyx Account form is visible and have correct title
            When I click on the Sign Up link
            Then The Sign Up page is displayed
            And The Create Telnyx Account form is visible
            And The form have "Create a Telnyx account" text


      Scenario: User navigates to Our Network page and verifies four links in the right top corner are visible
            When I click on the Why Telnyx link
            And I click on the Our Network link
            Then The Our Network page is displayed
            And The four links on the top right corner are visible


      Scenario: User navigates to AI Templates page, types "cypress" and verifies no results text is visible
            When I click on the Resources link in the navigation bar
            And I click on the AI Templates link
            Then The AI Templates page is displayed
            And I type "cypress" in the search bar and click "enter"
            And The "No results for this filter" text is visible



