Feature: Search Products

  Scenario: Perform Search
    Given the user is on the page
    When user click on the search button
    And types 'tablets' in the search bar
    Then page should display a list of products related to the term 'tablets'