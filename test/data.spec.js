require("../src/data.js");

describe("filtro", () => {
  it("é uma função", () => {
    expect(typeof data.filtro).toBe("function");
  });

  it("retorna `nome do campeão`", () => {
    expect(data.filtro(["Aatrox", "Ahri"], {"Aatrox": {"tags": ["Fighter", "Tank"]}, "Ahri": {"tags": ["Mage", "Assassin"]}}, "Mage")).toEqual(["Ahri"]);
  });
});

describe("mapInfo", () => {
  it("é uma função", () => {
    expect(typeof data.mapInfo).toBe("function");
  });

  it("retorna `valor do item selecionado`", () => {
    expect(data.mapInfo(["Aatrox", "Ahri"], {"Aatrox": {"stats": {"hp": 537.8, "hpperlevel": 85, "mp": 105.6, }}, "Ahri": {"stats": {"hp": 514.4, "hpperlevel": 80, "mp": 334, }}}, "hp")).toEqual([537.8, 514.4]);
  });
});

describe("ordenar", () => {
  it("é uma função", () => {
    expect(typeof data.ordenamaior).toBe("function");
  });

  it("retorna `valores da array na posição 1 em ordem decrescente`", () => {
    expect(data.ordenamaior([["Vayne", 498.44], ["Urgot", 586.52], ["Jayce", 571.2], ["Azir", 524.4]])).toEqual([["Urgot", 586.52], ["Jayce", 571.2], ["Azir", 524.4], ["Vayne", 498.44]]);
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