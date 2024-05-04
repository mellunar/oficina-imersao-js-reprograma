const modulo = require('./valorHora');

// describe: nome da função ou classe que estamos testando
describe('calcularValorPorHora', () => {
  // test: teste de integração
  // it: test unitário
  test('Deve retornar 9 por hora com salário de 1412', () => {
    const rendaMensal = 1412; // cenário
    const resultado = modulo.calcularValorPorHora(rendaMensal); // comportamento

    //console.log(resultado);
    expect(resultado).toEqual(9); // validação
  });
});

describe('calcularValorPorHora', () => {});
