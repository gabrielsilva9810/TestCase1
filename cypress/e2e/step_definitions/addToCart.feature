Feature: Adding products to cart

  Scenario: Add product to cart
    Given that the user is on the search results page for "speakers"
    When the user hovers over a specific product
    And click anywhere on the product card
    Then the user should be directed to the product page
    And click on the "ADD TO CART" button
    Then the product must be added to the shopping cart
    And the shopping cart must be updated to reflect the new added item