import { createUser } from '../../support/api/usersApi';
import { createUserData } from '../../support/factories/user.factory';

describe('API - Users', () => {
  it('should create a new user successfully', () => {
    const user = createUserData();

    createUser(user).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.message).to.eq('Cadastro realizado com sucesso');
      expect(response.body._id).to.be.a('string').and.not.be.empty;
    });
  });
});