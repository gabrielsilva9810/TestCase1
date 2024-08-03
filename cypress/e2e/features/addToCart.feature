Feature: Adding products to cart

  Scenario: Add product to cart
    Given that user is on the search results page for "speakers"
    When user hovers over a specific product
    And click anywhere on the product card
    Then user should be directed to the product page
    When user click on the "ADD TO CART" button
    And product must be added to the shopping cart
    Then shopping cart must be updated to reflect the new added item



