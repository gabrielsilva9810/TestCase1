Feature: Validation of products in the cart and on the payment screen

  Scenario: Validate products included in the cart on the payment screen
    Given user has added products to the cart
    And user is on the shopping cart page
    When user clicks the "Next" button
    Then payment screen should display the same products that were in the cart