const API_URL = 'https://serverest.dev';
const USERS_ENDPOINT = `${API_URL}/usuarios`;

export function createUser(user, options = {}) {
  return cy.request({
    method: 'POST',
    url: USERS_ENDPOINT,
    body: user,
    ...options,
  });
}