import LoginPage from '../pages/LoginPage';

Cypress.Commands.add('loginAs', (user) => {
  LoginPage.visit();
  LoginPage.login(user.email, user.password);
});