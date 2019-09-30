const spaceChampions = document.getElementById("Champions");
const dataChampions = LOL.data;
let infoChampions = [];
let filtrados;

Object.keys(dataChampions).forEach((name) => {
  let img = (dataChampions[name].img);
  let action = (dataChampions[name].tags).toString();
  let life = (dataChampions[name].stats.hp);
  let lifeLevel = (dataChampions[name].stats.hpperlevel);
  let AD = (dataChampions[name].stats.attackdamage);
  let ADLevel = dataChampions[name].stats.attackdamageperlevel;
  let AS =+ (0.625/(1+(dataChampions[name].stats.attackspeedoffset))).toFixed(3);
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

function cardsChampions(data) {
  spaceChampions.innerHTML = "";
  data.forEach((i) => {
    spaceChampions.innerHTML += `
      <div class = "infoChampions"> ${i.name} <img class="Avatar" src="${i.img}"/> vida = ${i.life} <br>  AD = ${i.AD}<br>  AS = ${i.AS}<br>  vel.Mov. = ${i.velMove} <br>  reg.Vida = ${i.regLife}<br> armadura = ${i.armadura} </div>`;
  });
}

document.getElementById("filter").addEventListener("change", function(e) {
  let option = e.target.value;
  document.getElementById("order").disabled = false;
  document.getElementById("higher").disabled = false; 
  filtrados = datajs.filterData(infoChampions, option);
  cardsChampions(filtrados);
  return filtrados;
});

document.getElementById("higher").addEventListener("change", () => {
  let ord = document.getElementById("order").value;
  document.getElementById("level").disabled = false;  
  let selection = document.getElementById("higher").value;
  cardsChampions(datajs.orderData (datajs.orderData (filtrados, selection, ord)));
});

document.getElementById("level").addEventListener("change", function(e) {
  spaceChampions.innerHTML = "";
  let selection =+ e.target.value - 1;
  datajs.computeStats(filtrados, selection);
  cardsChampions(infoLevel); 
});