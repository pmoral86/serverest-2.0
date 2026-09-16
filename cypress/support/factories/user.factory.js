export function createUserData({
  administrator = 'false',
  prefix = 'QA AMBEV',
} = {}) {
  const timestamp = Date.now();

  return {
    nome: `${prefix} ${timestamp}`,
    email: `qa.ambev.${timestamp}@example.com`,
    password: 'Qa123456!',
    administrador: administrator,
  };
}