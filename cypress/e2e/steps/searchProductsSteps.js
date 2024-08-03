import { Given, When, Then } from 'cypress-cucumber-preprocessor';

const searchButtonSelector = '#menuSearch';
const searchInputSelector = '#autoComplete';
const productListSelector = '#searchPage';

Given('user is on the page', () => {
  cy.visit("http://advantageonlineshopping.com")
});

When('user click on the search button', () => {
  cy.get(searchButtonSelector).click();
});

And('types "tablets" in the search bar', (searchTerm) => {
  cy.get(searchInputSelector).type(searchTerm);
});

Then('page should display a list of products related to the term "tablets"', (searchTerm) => {
  cy.get(productListSelector).should('contain', searchTerm);
});