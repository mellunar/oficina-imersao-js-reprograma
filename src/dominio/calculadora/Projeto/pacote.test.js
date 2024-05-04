const { calcularPacote } = require('./pacote');

describe('pacote', () => {
  test('Deve retornar pacote_basico quando o totalDeHorasPorProjeto for menor que 50', () => {
    const totalDeHorasPorProjeto = 49;
    const result = calcularPacote(totalDeHorasPorProjeto);

    expect(result).toEqual('pacote_basico');
  });
});
