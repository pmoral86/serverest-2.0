import { productSelectors } from '../selectors/product.sel';

class ProductPage {
  fillName(name) {
    cy.get(productSelectors.name).type(name);
  }

  fillPrice(price) {
    cy.get(productSelectors.price).type(String(price));
  }

  fillDescription(description) {
    cy.get(productSelectors.description).type(description);
  }

  fillQuantity(quantity) {
    cy.get(productSelectors.quantity).type(String(quantity));
  }

  createProduct(product) {
    this.fillName(product.name);
    this.fillPrice(product.price);
    this.fillDescription(product.description);
    this.fillQuantity(product.quantity);

    cy.get(productSelectors.createButton).click();
  }

  getProductRow(productName) {
    return cy.contains('tr', productName);
  }
}

export default new ProductPage();