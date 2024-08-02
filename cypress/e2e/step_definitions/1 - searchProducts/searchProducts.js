import { Given, When, Then } from 'cypress-cucumber-preprocessor';

const homePageUrl = 'http://advantageonlineshopping.com';

const searchButtonSelector = '#menuSearch';
const searchInputSelector = '#autoComplete';
const productListSelector = '#searchPage';

Given('user is on the page', () => {
  cy.visit(homePageUrl);
});

And('the user click on the search button', () => {
  cy.get(searchButtonSelector).click();
});

When('types {string} in the search bar', (searchTerm) => {
  cy.get(searchInputSelector).type(searchTerm);
});

Then('the page should display a list of products related to the term {string}', (searchTerm) => {
  cy.get(productListSelector).should('contain', searchTerm);
});