const spaceChampions = document.getElementById("Champions");
const dataChampions = LOL.data;
let infoChampions = [];

Object.keys(dataChampions).forEach((name) => {
  let img = (dataChampions[name].img);
  let action = (dataChampions[name].tags).toString();
  let life = dataChampions[name].stats.hp;
  let lifeLevel = dataChampions[name].stats.hpperlevel;
  let AD = dataChampions[name].stats.attackdamage;
  let ADLevel = dataChampions[name].stats.attackdamageperlevel;
  let AS = (0.625/(1+(dataChampions[name].stats.attackspeedoffset))).toFixed(3);
  let ASLevel = dataChampions[name].stats.attackspeedperlevel;
  let velMove = dataChampions[name].stats.movespeed;
  let regLife = dataChampions[name].stats.hpregen;
  let regLifeLevel = dataChampions[name].stats.hpregenperlevel;
  let armadura = dataChampions[name].stats.armor;
  let armaduraLevel = dataChampions[name].stats.armorperlevel;
  infoChampions.push({name, action, img, life, lifeLevel, AD, ADLevel, AS, ASLevel, velMove, regLife, regLifeLevel, armadura, armaduraLevel});
  return infoChampions;
});

function template(data) {
  spaceChampions.innerHTML = "";
  data.forEach((i) => {
    spaceChampions.innerHTML += `<div class = "cards"> ${i.name}` + `<img class="Avatar" src="${i.img}"</div>`;
  });
}

window.onload = template(infoChampions);

document.getElementById("home").addEventListener("click", template(infoChampions));

function cardsChampions(data) {
  spaceChampions.innerHTML = "";
  data.forEach((i) => {
    spaceChampions.innerHTML += `
      <div class = "infoChampions"> ${i.name} <img class="Avatar" src="${i.img}"/> vida = ${i.life} <br>  AD = ${i.AD}<br>  AS = ${i.AS}<br>  vel.Mov. = ${i.velMove} <br>  reg.Vida = ${i.regLife}<br> armadura = ${i.armadura} </div>`;
  });
}

let filtrados;
document.getElementById("option").addEventListener("click", function(e) {
  let option = e.target.id;
  filtrados = datajs.filterData(infoChampions, option);
  cardsChampions(filtrados);
  return filtrados;
});

document.getElementById("order").addEventListener("click", function(e) {
  let selection = e.target.id;
  document.getElementById("higher").addEventListener("click", function(e) {
  let ord = e.target.id;
  cardsChampions(datajs.orderData (filtrados, selection, ord));
  })});

document.getElementById("level").addEventListener("click", function(e) {
  spaceChampions.innerHTML = "";
  let selection =+ e.target.id;
  datajs.computeStats(filtrados, selection);
  cardsChampions(infoLevel); 
})
