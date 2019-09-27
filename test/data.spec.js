require("../src/data.js");

describe("filtro", () => {
  it("é uma função", () => {
    expect(typeof data.filtro).toBe("function");
  });

  it("retorna `array com campeões filtrados`", () => {
    expect(data.filtro([{nome: "Aatrox", tag: ["Fighter", "Tank"]}, {nome: "Ahri", tag: ["Mage", "Assassin"]}], "Mage")).toEqual([{nome: "Ahri", tag: ["Mage", "Assassin"]}]);
  });
});

describe("ordenamaior", () => {
  it("é uma função", () => {
    expect(typeof data.ordenamaior).toBe("function");
  });

  it("retorna `valores da array em ordem decrescente`", () => {
    expect(data.ordenamaior([{nome: "Vayne", hp: 498.44}, {nome: "Urgot", hp: 586.52}, {nome: "Jayce", hp: 571.2}, {nome: "Azir", hp: 524.4}], "hp")).toEqual([{nome: "Urgot", hp: 586.52}, {nome: "Jayce", hp: 571.2}, {nome: "Azir", hp: 524.4}, {nome: "Vayne", hp: 498.44}]);
  });
});

describe("ordenamenor", () => {
  it("é uma função", () => {
    expect(typeof data.ordenamenor).toBe("function");
  });

  it("retorna `valores da array em ordem crescente`", () => {
    expect(data.ordenamenor([{nome: "Vayne", hp: 498.44}, {nome: "Urgot", hp: 586.52}, {nome: "Jayce", hp: 571.2}, {nome: "Azir", hp: 524.4}], "hp")).toEqual([{nome: "Vayne", hp: 498.44}, {nome: "Azir", hp: 524.4}, {nome: "Jayce", hp: 571.2}, {nome: "Urgot", hp: 586.52}]);
  });
});

describe("calcular", () => {
  it("é uma função", () => {
    expect(typeof data.calcular).toBe("function");
  });

  it("retorna `valor calculado por level`", () => {
    expect(data.calcular(537.8, 85, 2)).toEqual(622.8);
  });
});