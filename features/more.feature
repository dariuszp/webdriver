Feature: Link to iana.org

  Scenario: As a user, I can see a link with correct address

    Given I am on the home page
    Then I should see link pointing to https://www.iana.org/domains/example
