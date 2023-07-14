import { loggin } from "./booleans"

describe('Pruebas con booleanos', () => {

  it('Deberia ser verdadero', () => {
    const userlogged = loggin();
    // expect(userlogged).not.toBeTruthy()
    expect(userlogged).toBeTruthy()
  })

})
