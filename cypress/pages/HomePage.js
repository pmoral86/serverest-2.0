import { homeSelectors } from '../selectors/home.sel';

class HomePage {
  clickRegisterProduct() {
    cy.get(homeSelectors.registerProduct).click();
  }

  clickListProducts() {
    cy.get(homeSelectors.listProducts).click();
  }
}

export default new HomePage();