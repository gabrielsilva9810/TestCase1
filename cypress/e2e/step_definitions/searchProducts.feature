Feature: Search Products

  Scenario: perform a search
    Given user is on the page
    And the user click on the search button
    When types "tablets" in the search bar
    Then the page should display a list of products related to the term "tablets"