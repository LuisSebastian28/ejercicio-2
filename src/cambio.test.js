import cambioAmonedas from "./cambioAmonedas";

describe("Cambio a monedas", () => {
  it("Si ponemos 1, deberia devolver 1", () => {
    expect(cambioAmonedas(1)).toEqual(1);
  });
});
