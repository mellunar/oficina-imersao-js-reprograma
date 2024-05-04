const { calcularPacote } = require('./pacote');

describe('pacote', () => {
  test('Deve retornar pacote_basico quando o totalDeHorasPorProjeto for menor que 50', () => {
    const totalDeHorasPorProjeto = 49;
    const result = calcularPacote(totalDeHorasPorProjeto);

    expect(result).toEqual('pacote_basico');
  });

  test('Deve retornar pacote_basico quando o totalDeHorasPorProjeto for menor ou igual 50', () => {
    const totalDeHorasPorProjeto = 51;
    const result = calcularPacote(totalDeHorasPorProjeto);

    expect(result).toEqual('pacote_basico');
  });

  test('Deve retornar pacote_intermediario quando o totalDeHorasPorProjeto for menor que 100', () => {
    const totalDeHorasPorProjeto = 95;
    const result = calcularPacote(totalDeHorasPorProjeto);

    expect(result).toEqual('pacote_intermediario');
  });

  test('Deve retornar pacote_intermediario quando o totalDeHorasPorProjeto for menor ou igual 100', () => {
    const totalDeHorasPorProjeto = 100;
    const result = calcularPacote(totalDeHorasPorProjeto);

    expect(result).toEqual('pacote_intermediario');
  });
});
