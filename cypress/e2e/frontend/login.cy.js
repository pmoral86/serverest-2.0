import LoginPage from '../../pages/LoginPage';
import { createTestUser } from '../../support/userApi';

describe('E2E-01 - Login and Logout', () => {
  it('should allow a valid user to login and logout successfully', () => {
    createTestUser().then((user) => {
      LoginPage.visit();

      LoginPage.login(user.email, user.password);

      LoginPage.getHomeLink()
        .should('be.visible')
        .and('contain', 'Home');

      LoginPage.logout();

      LoginPage.getLoginButton()
        .should('be.visible')
        .and('contain', 'Entrar');
    });
  });
});