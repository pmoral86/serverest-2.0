const API_URL = 'https://serverest.dev';

export function createProduct(product, token) {
  return cy.request({
    method: 'POST',
    url: `${API_URL}/produtos`,
    headers: {
      Authorization: token,
    },
    body: product,
  });
}