export function createProductUiData() {
  const timestamp = Date.now();

  return {
    name: `Produto UI QA AMBEV ${timestamp}`,
    price: 100,
    description: 'Produto criado automaticamente pelo teste',
    quantity: 10,
  };
}