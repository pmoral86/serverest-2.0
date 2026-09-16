import { createUser } from '../../support/api/usersApi';
import { loginUser } from '../../support/api/loginApi';
import { createProduct } from '../../support/api/productsApi';
import { createUserData } from '../../support/factories/user.factory';
import { createProductData } from '../../support/factories/product.factory';

describe('API - Products', () => {
  it('should allow an administrator to create a product', () => {
    const user = createUserData({
        administrator: 'true',
        prefix: 'QA AMBEV Admin',
  });

  const product = createProductData();

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