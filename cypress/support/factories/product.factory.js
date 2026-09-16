export function createProductData() {
  const timestamp = Date.now();

  return {
    nome: `Produto QA AMBEV ${timestamp}`,
    preco: 100,
    descricao: 'Produto criado automaticamente pelo teste',
    quantidade: 10,
  };
}