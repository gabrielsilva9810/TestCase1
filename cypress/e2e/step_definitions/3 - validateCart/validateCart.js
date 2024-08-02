import { Given, When, Then } from 'cypress-cucumber-preprocessor';

const cartPageUrl = 'http://advantageonlineshopping.com/#/cart';
const nextButtonSelector = '#cartNext';
const cartProductSelector = '.cartSection .product';
const paymentProductSelector = '.paymentSection .product';

const extractProductNames = (elements) => {
  return elements.map((index, element) => Cypress.$(element).text().trim()).get();
};

const addProductToCart = (searchTerm) => {
    cy.visit(homePageUrl);
    cy.get(searchInputSelector).type(`${searchTerm}{enter}`);
    cy.get(productCardSelector).first().click();
    cy.get(addToCartButtonSelector).click();
  };

Given('that the user added products to the cart', () => {
    addProductToCart('speakers');
    addProductToCart('tablets');
});

Given('the user is on the shopping cart page', () => {
  cy.visit(cartPageUrl);
});

When('the user clicks the "Next" button', () => {
  cy.get(nextButtonSelector).click();
});

Then('the payment screen should display the same products that are in the cart', () => {
  cy.get(cartProductSelector).then(cartProducts => {
    const cartProductNames = extractProductNames(cartProducts);

    cy.get(paymentProductSelector).then(paymentProducts => {
      const paymentProductNames = extractProductNames(paymentProducts);

      expect(paymentProductNames).to.deep.equal(cartProductNames);
    });
  });
});