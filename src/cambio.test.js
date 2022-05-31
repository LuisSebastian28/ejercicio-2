import cambioAmonedas from "./cambioAmonedas";

describe("Cambio a monedas", () => {
  it("Si ponemos 1, deberia devolver 1", () => {
    expect(cambioAmonedas(1)).toEqual(1);
  });
  it("Si ponemos 2, deberia devolver 1,1", () => {
    expect(cambioAmonedas(2)).toEqual("1,1");
  });
  it("Si ponemos 3, deberia devolver 1,1", () => {
    expect(cambioAmonedas(3)).toEqual("2,1");
  });
  it("Si ponemos 10, deberia devolver 5,5", () => {
    expect(cambioAmonedas(10)).toEqual("5,5");
  });
});
