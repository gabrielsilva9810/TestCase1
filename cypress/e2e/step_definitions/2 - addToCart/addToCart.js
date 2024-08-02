import { Given, When, Then } from 'cypress-cucumber-preprocessor';

const searchResultsPageUrl = 'http://advantageonlineshopping.com/#/search/?viewAll=grid&search=speakers';

const productCardSelector = '.product';
const addToCartButtonSelector = '#productProperties > div > div.fixedBtn > button';
const cartIconSelector = '#shoppingCartLink';
const cartQuantitySelector = '.cartQuantity';

Given('that the user is on the search results page for {string}', () => {
  cy.visit(searchResultsPageUrl);
});

When('the user hovers over a specific product', () => {
  cy.get(productCardSelector).first().trigger('mouseover');
});

And('click anywhere on the product card', () => {
  cy.get(productCardSelector).first().click();
});

Then('the user should be directed to the product page', () => {
  cy.url().should('include', '/product/');
});

And('And click on the "ADD TO CART" button', () => {
  cy.get(addToCartButtonSelector).click();
});

And('the product must be added to the shopping cart', () => {
  cy.get(cartIconSelector).click();
  cy.get(cartQuantitySelector).should('contain', '1');
});

Then('the shopping cart must be updated to reflect the new added item', () => {
  cy.get(cartIconSelector).click();
  cy.get(cartQuantitySelector).should('contain', '1');
});
