// describe() -> Agrupa pruebas
// it() -> Es una prueba en especifico

import { mensaje } from "./string"

describe('Pruebas de strings', () => {
  it('Debe de retornar un string', () => {
    const resp = mensaje('Orlando');
    expect( typeof resp ).toBe("string")
  });

  it('Debe de retornar un saludos con el nombre enviado', () => {
    const nombre = "Orlando"
    const resp = mensaje(nombre);
    expect( resp ).toContain(nombre);
  })
})
