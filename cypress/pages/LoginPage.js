import { loginSelectors } from '../selectors/login.sel';

class LoginPage {
  visit() {
    cy.visit('/');
  }

  fillEmail(email) {
    cy.get(loginSelectors.email).type(email);
  }

  fillPassword(password) {
    cy.get(loginSelectors.password).type(password);
  }

  clickLogin() {
    cy.get(loginSelectors.loginButton).click();
  }

  login(email, password) {
    this.fillEmail(email);
    this.fillPassword(password);
    this.clickLogin();
  }

  logout() {
    cy.get(loginSelectors.logoutButton).click();
  }

  getHomeLink() {
    return cy.get(loginSelectors.home);
  }

  getLoginButton() {
    return cy.get(loginSelectors.loginButton);
  }

  getErrorAlert() {
    return cy.get(loginSelectors.errorAlert);
  }
}

export default new LoginPage();