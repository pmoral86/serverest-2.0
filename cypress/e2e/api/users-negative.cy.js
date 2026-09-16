import { createUser } from '../../support/api/usersApi';

describe('API - Users - Negative Scenarios', () => {
  it('should not allow creating two users with the same email', () => {
    const timestamp = Date.now();

    const user = {
      nome: `QA AMBEV ${timestamp}`,
      email: `qa.ambev.${timestamp}@example.com`,
      password: 'Qa123456!',
      administrador: 'false',
    };

    createUser(user).then((firstResponse) => {
      expect(firstResponse.status).to.eq(201);
      expect(firstResponse.body._id)
        .to.be.a('string')
        .and.not.be.empty;

      createUser(user, { failOnStatusCode: false }).then((secondResponse) => {
        expect(secondResponse.status).to.eq(400);
        expect(secondResponse.body.message)
          .to.eq('Este email já está sendo usado');
      });
    });
  });
});