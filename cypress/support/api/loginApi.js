const API_URL = 'https://serverest.dev';

export function loginUser(email, password) {
  return cy.request({
    method: 'POST',
    url: `${API_URL}/login`,
    body: {
      email,
      password,
    },
  });
}