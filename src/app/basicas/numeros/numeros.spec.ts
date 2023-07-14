import { incrementar } from "./numeros";

describe("Pruebas en números", () => {

  it("Debe retornar 100, si el numero ingresado es mayor a 100", () => {
    const inc = incrementar(300);
    expect(inc).toBe(100)
  })

  it("Debe retornar el numero ingresado + 1, si no es mayor a 100", () => {
    const auxnumero = 24;
    const inc = incrementar(auxnumero);
    expect(inc).toBe(auxnumero + 1)
  })

  // it("Debe retornar un numero", () => {
  //   const inc = incrementar(20);
  //   expect(typeof inc).toBe("number")
  // });

})
