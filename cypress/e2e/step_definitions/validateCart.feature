Feature: Validation of products in the cart and on the payment screen

  Scenario: Validate products included in the cart on the payment screen
    Given that the user added products to the cart
    And the user is on the shopping cart page
    When the user clicks the "Next" button
    Then the payment screen should display the same products that are in the cart