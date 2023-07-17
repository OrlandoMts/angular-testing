import { getFruits } from './arreglos';

xdescribe('Pruebas de arreglos', () => {
  it('Debe retornar por lo menos dos frutas', () => {
    const frutas = getFruits();
    expect(frutas.length).toBeGreaterThanOrEqual(2);
  });

  it('Debe devolver ciertas frutas', () => {
    const frutas2 = getFruits();

    expect(frutas2).toContain('orange');
    expect(frutas2).toContain('apple');
  });
});
