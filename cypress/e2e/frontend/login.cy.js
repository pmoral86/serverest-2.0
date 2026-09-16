import LoginPage from '../../pages/LoginPage';
import { createUser } from '../../support/api/usersApi';
import { createUserData } from '../../support/factories/user.factory';

describe('E2E-01 - Login and Logout', () => {
  it('should allow a valid user to login and logout successfully', () => {
    const user = createUserData({
      administrator: 'true',
      prefix: 'QA AMBEV E2E',
    });

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

      LoginPage.logout();

      LoginPage.getLoginButton()
        .should('be.visible')
        .and('contain', 'Entrar');
    });
  });
});