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
    expect(datajs.computeStats([{AD: 61.97, ADLevel: 3.375, AS: 0.638, ASLevel: 3.4, action: "Fighter,Assassin", armadura: 27.04, armaduraLevel: 3, img: "https://www.masterypoints.com/assets/img/lol/champion_icons/Jax.png", life: 592.8, lifeLevel: 85, name: "Jax", regLife: 8.37, regLifeLevel: 0.55, velMove: 350}, {AD: 61.544, ADLevel: 3.3, AS: 0.665, ASLevel: 3.2, action: "Fighter,Assassin", armadura: 25.3, armaduraLevel: 3.75, img: "https://www.masterypoints.com/assets/img/lol/champion_icons/Irelia.png", life: 607.2, lifeLevel: 90, name: "Irelia", regLife: 8.59, regLifeLevel: 0.65, velMove: 345}], 2)).toEqual ([{AD: 68.72, AS: 0.68, armadura: 33.04, img: "https://www.masterypoints.com/assets/img/lol/champion_icons/Jax.png", life: 762.80, name: "Jax", regLife: 9.47, velMove: 350}, {AD: 68.14, AS: 0.71, armadura: 32.80, img: "https://www.masterypoints.com/assets/img/lol/champion_icons/Irelia.png", life: 787.20, name: "Irelia", regLife: 9.89, velMove: 345}]);
  });
}); 
