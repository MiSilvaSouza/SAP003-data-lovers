require("../src/data.js");

describe("filterData", () => {
  it("is a function", () => {
    expect(typeof datajs.filterData).toBe("function");
  });

  it("returns filtrados", () => {
    expect(datajs.filterData([{name: "Aatrox", img: "https://www.masterypoints.com/assets/img/lol/champion_icons/Aatrox.png", action: "Fighter, Tank"}, {name: "Ahri", img: "https://www.masterypoints.com/assets/img/lol/champion_icons/Ahri.png", action: "Mage,Assassin"}], "Assassin")).toEqual ([{name: "Ahri", img: "https://www.masterypoints.com/assets/img/lol/champion_icons/Ahri.png", action: "Mage,Assassin"}]);
  });
});

describe("orderData", () => {
  it("is a function", () => {
    expect(typeof datajs.orderData).toBe("function");
  });
  it("returns ordenados", () => {
    expect(datajs.orderData([{name: "Tryndamere", life: 625.64}, {name: "Irelia", life: 607.2}, {name: "XinZhao", life: 600}, {name: "MasterYi", life: 598.56}, {name: "Jax", life: 592.8}], "life", "crescente")).toEqual ([{name: "Jax", life: 592.8}, {name: "MasterYi", life: 598.56}, {name: "XinZhao", life: 600}, {name: "Irelia", life: 607.2}, {name: "Tryndamere", life: 625.64}]);
  });
}); 

describe("computeStats", () => {
  it("is a function", () => {
    expect(typeof datajs.computeStats).toBe("function");
  });
  it("returns calculados", () => {
    expect(datajs.computeStats([{AD: 55.88, ADLevel: 1.66, AS: 0.658, ASLevel: 4, action: "Marksman,Assassin", armadura: 19.012, armaduraLevel: 3.4, img: "https://www.masterypoints.com/assets/img/lol/champion_icons/Vayne.png", life: 498.44, lifeLevel: 83, name: "Vayne", regLife: 5.42, regLifeLevel: 0.55, velMove: 330}, {AD: 53, ADLevel: 3.5, AS: 0.638, ASLevel: 3.22, action: "Assassin,Fighter", armadura: 22.88, armaduraLevel: 3.5, img: "https://www.masterypoints.com/assets/img/lol/champion_icons/Nidalee.png", life: 511.2, lifeLevel: 80, name: "Nidalee", regLife: 6.005, regLifeLevel: 0.6, velMove: 335}], 1)).toEqual ([{AD: 57.54, AS: 0.684, armadura: 22.412, img: "https://www.masterypoints.com/assets/img/lol/champion_icons/Vayne.png", life: 581.44, name: "Vayne", regLife: 5.97, velMove: 330}, {AD: 56.5, AS: 0.659, armadura: 26.38, img: "https://www.masterypoints.com/assets/img/lol/champion_icons/Nidalee.png", life: 591.2, name: "Nidalee", regLife: 6.605, velMove: 335}]);
  });
}); 

