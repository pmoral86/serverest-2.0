import LoginPage from '../../pages/LoginPage';
import HomePage from '../../pages/HomePage';
import ProductPage from '../../pages/ProductPage';
import { createTestUser } from '../../support/userApi';

describe('E2E-03 - Product Creation', () => {
  it('should create a product and display it in the product list', () => {
    const timestamp = Date.now();

    const product = {
      name: `Produto QA AMBEV ${timestamp}`,
      price: 100,
      description: 'Produto criado automaticamente pelo teste',
      quantity: 10,
    };

    createTestUser().then((user) => {
      LoginPage.visit();

      LoginPage.login(user.email, user.password);

      LoginPage.getHomeLink()
        .should('be.visible')
        .and('contain', 'Home');

      HomePage.clickRegisterProduct();

      ProductPage.createProduct(product);

      ProductPage.getProductRow(product.name)
        .should('be.visible')
        .within(() => {
          cy.get('td').eq(0).should('have.text', product.name);
          cy.get('td').eq(1).should('have.text', String(product.price));
          cy.get('td').eq(2).should('have.text', product.description);
          cy.get('td').eq(3).should('have.text', String(product.quantity));
        });
    });
  });
});