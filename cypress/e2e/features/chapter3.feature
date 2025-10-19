Feature: Chapter 3 tests


    Scenario: User verifies Telnyx Pricing section is visible and not empty
        When I click on "Products" link on the main page
        And I click on Programmable Networking
        Then The Programmable Networking page is displayed
        And The Telnyx Pricing section is visible and not empty


    Scenario: User verifies three buttons in Healthcare page are visible
        When I click on the Solutions link
        And I click on Healthcare link
        Then The Healthcare page is displayed
        And Three first buttons are visible


    Scenario: User verifies Networking buttons in Pricing page are visible and not empty
        When I click on the first navigation link with text "Pricing"
        Then Pricing page is displayed
        And Networking links are visible and not empty


    Scenario: User verifies four visible (+) buttons in FAQ section of Mission Control page
        When I click on the Why Telnyx link in the navigation bar
        And I click on the Mission Control Portal link
        Then Mission Control page is displayed
        And Four plus buttons in FAQ section are visible


    Scenario: User verifies copyright text is visible and correct in Customers Stories page
        When I click on the Resources link
        And I click on the Customers Stories link
        Then The Customers Stories page is displayed
        And Copyright text in the footer of the site is visible and have "© Telnyx LLC 2025" text