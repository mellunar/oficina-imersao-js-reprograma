const { calcularValorTotalProjeto } = require('./valorProjeto');
const moduloPacote = require('./pacote');

jest.mock('./pacote.js');

describe('calcularValorTotalProjeto', () => {
  beforeAll(() => {
    moduloPacote.calcularPacote.mockReturnValue('pacote_basico');
  });
  test('', () => {
    const resultado = calcularValorTotalProjeto(['ssr'], 8);

    console.log(resultado);
  });
});
