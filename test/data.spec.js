require("../src/data.js");

describe("filterData", () => {
  it("é uma função", () => {
    expect(typeof data.filterData).toBe("function");
  });

  it("retorna `array com campeões filtrados`", () => {
    expect(data.filterData([{nome: "Aatrox", tag: ["Fighter", "Tank"]}, {nome: "Ahri", tag: ["Mage", "Assassin"]}], "Mage")).toEqual([{nome: "Ahri", tag: ["Mage", "Assassin"]}]);
  });
});

describe("orderData", () => {
  it("is a function", () => {
    expect(typeof data.orderData).toBe("function");
  });
  it("returns ordenados", () => {
    expect(data.orderData([{name: "Tryndamere", life: 625.64}, {name: "Irelia", life: 607.2}, {name: "XinZhao", life: 600}, {name: "MasterYi", life: 598.56}, {name: "Jax", life: 592.8}], "life", "crescente")).toEqual ([{name: "Jax", life: 592.8}, {name: "MasterYi", life: 598.56}, {name: "XinZhao", life: 600}, {name: "Irelia", life: 607.2}, {name: "Tryndamere", life: 625.64}]);
  });
}); 

describe("computeStats", () => {
  it("é uma função", () => {
    expect(typeof data.computeStats).toBe("function");
  });

  it("retorna `valor calculado por level`", () => {
    expect(data.computeStats(537.8, 85, 2)).toEqual(622.8);
  });
});

describe("computeStatsAS", () => {
  it("é uma função", () => {
    expect(typeof data.computeStatsAS).toBe("function");
  });

  it("retorna `valor calculado por level`", () => {
    expect(data.computeStatsAS(0.651, 3, 2)).toEqual(0.6705300000000001);
  });
});