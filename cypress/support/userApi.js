const API_URL = 'https://serverest.dev';

export function createTestUser() {
  const timestamp = Date.now();

  const user = {
    nome: `QA AMBEV ${timestamp}`,
    email: `qa.ambev.${timestamp}@example.com`,
    password: `Test@${timestamp}`,
    administrador: 'true',
  };

  return cy.request({
    method: 'POST',
    url: `${API_URL}/usuarios`,
    body: user,
  }).then((response) => {
    expect(response.status).to.eq(201);
    expect(response.body.message).to.eq('Cadastro realizado com sucesso');
    expect(response.body).to.have.property('_id');

    return {
      ...user,
      id: response.body._id,
    };
  });
}