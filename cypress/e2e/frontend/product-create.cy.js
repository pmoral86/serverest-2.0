import LoginPage from '../../pages/LoginPage';
import HomePage from '../../pages/HomePage';
import ProductPage from '../../pages/ProductPage';
import { createUser } from '../../support/api/usersApi';
import { createUserData } from '../../support/factories/user.factory';
import { createProductUiData } from '../../support/factories/productUi.factory';

describe('E2E-03 - Product Creation', () => {
  it('should create a product and display it in the product list', () => {
    const user = createUserData({
      administrator: 'true',
      prefix: 'QA AMBEV E2E',
    });

    const product = createProductUiData();

    createUser(user).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.message).to.eq(
        'Cadastro realizado com sucesso'
      );
      expect(response.body._id)
        .to.be.a('string')
        .and.not.be.empty;

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