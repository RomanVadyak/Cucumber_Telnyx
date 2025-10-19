Feature: Chapter 2 tests

    Scenario: User verifies all navigation buttons have visible text
        Then The Products button should be visible and not be empty
        And The Solutions button should be visible and not be empty
        And The Pricing button should be visible and not be empty
        And The whyTelntx button should be visible and not be empty
        And The Resources button should be visible and not be empty
        And The Developers button should be visible and not be empty

    Scenario: User verifies four channel links in sms API page are visible
        When I hover to "Products" link on navigation bar and click it
        And I click on the SMS API link
        Then The sms API page is displayed
        And Four channel links are visible


    Scenario: User verifies correct retail and e-comerce page title and two visible buttons
        When I click on the Solutions link in the navigation bar
        And I click on Retail and E-comerce link
        Then The Retail and E-comerce page is displayed
        And The page have "Turn browsers into buyers with personalized AI" title
        And The page have two visible buttons under the title


    Scenario: User verifies three visible buttons in Cloud Storage page
        When I click on the "Products" link at the start of the navigation bar
        And I click on Storage link
        Then The Cloud Storage page is displayed
        And Resources section have 3 visible buttons


    Scenario: User verifies correct titles in the footer of the pricing page
        When I click on "Pricing" link in the navigation bar in the header of the site
        Then The Pricing page is displayed
        And The "Company" title is visible
        And The "Legal" title have correct text
        And The "Compare" title is present