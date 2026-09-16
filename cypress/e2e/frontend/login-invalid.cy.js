import LoginPage from '../../pages/LoginPage';

describe('E2E-02 - Invalid Login', () => {
  it('should reject invalid credentials and keep the user unauthenticated', () => {
    LoginPage.visit();

    LoginPage.login(
      'qa.invalid@example.com',
      'WrongPassword123!'
    );

    LoginPage.getErrorAlert()
      .should('be.visible')
      .and('contain', 'Email e/ou senha inválidos');

    LoginPage.getLoginButton()
      .should('be.visible')
      .and('contain', 'Entrar');

    LoginPage.getHomeLink().should('not.exist');
  });
});