Feature: Search Products

  Scenario: Perform Search
    Given user is on the page
    When the user click on the search button
    When types 'tablets' in the search bar
    Then page should display a list of products related to the term 'tablets'