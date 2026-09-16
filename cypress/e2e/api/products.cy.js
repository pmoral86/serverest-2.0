import { createUser } from '../../support/api/usersApi';
import { loginUser } from '../../support/api/loginApi';
import { createProduct } from '../../support/api/productsApi';

describe('API - Products', () => {
  it('should allow an administrator to create a product', () => {
    const timestamp = Date.now();

    const user = {
      nome: `QA AMBEV Admin ${timestamp}`,
      email: `qa.ambev.admin.${timestamp}@example.com`,
      password: 'Qa123456!',
      administrador: 'true',
    };

    const product = {
      nome: `Produto API QA AMBEV ${timestamp}`,
      preco: 100,
      descricao: 'Produto criado através da API',
      quantidade: 10,
    };

    createUser(user).then((userResponse) => {
      expect(userResponse.status).to.eq(201);
      expect(userResponse.body._id)
        .to.be.a('string')
        .and.not.be.empty;

      loginUser(user.email, user.password).then((loginResponse) => {
        expect(loginResponse.status).to.eq(200);
        expect(loginResponse.body.message).to.eq(
          'Login realizado com sucesso'
        );

        const token = loginResponse.body.authorization;

        expect(token)
          .to.be.a('string')
          .and.not.be.empty;

        createProduct(product, token).then((productResponse) => {
          expect(productResponse.status).to.eq(201);
          expect(productResponse.body.message).to.eq(
            'Cadastro realizado com sucesso'
          );

          expect(productResponse.body._id)
            .to.be.a('string')
            .and.not.be.empty;
        });
      });
    });
  });
});