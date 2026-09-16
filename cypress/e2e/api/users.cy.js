import { createUser } from '../../support/api/usersApi';

describe('API - Users', () => {
  it('should create a new user successfully', () => {
    const timestamp = Date.now();

    const user = {
      nome: `QA AMBEV ${timestamp}`,
      email: `qa.ambev.${timestamp}@example.com`,
      password: 'Qa123456!',
      administrador: 'false',
    };

    createUser(user).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.message).to.eq('Cadastro realizado com sucesso');
      expect(response.body._id).to.be.a('string').and.not.be.empty;
    });
  });
});