
window.onload = page();
function page() {
  takeChampions();
  infoChampions.map((i) => {
    document.getElementById("Champions").innerHTML += `<div class = "cards"> ${i.item}` + `<img class="Avatar" src="${i.img}"</div>`;
  })
}

document.getElementById("home").addEventListener("click", () => {
  document.getElementById("Champions").innerHTML = "";
  infoChampions.map((i) => {
    document.getElementById("Champions").innerHTML += `<div class = "cards"> ${i.item}` + `<img class="Avatar" src="${i.img}"</div>`;
  })
});

document.getElementById("option").addEventListener("change", filter);
function filter(option) {
  filterChampions=[];
  document.getElementById("Champions").innerHTML = "";
  option = document.getElementById("option").value;
  takeChampions(option);
  filterChampions.map((i) => {
    document.getElementById("Champions").innerHTML += `<div class = "infoChampions"> ${i.item} <img class="Avatar" src="${i.img}"/> vida = ${i.life} <br>  AD = ${i.damage}<br>  AS = ${i.velAttack}<br>  vel.Mov. = ${i.velMove} <br>  reg.Vida = ${i.regenLife}<br> armadura = ${i.armor} </div>`;
  });
}

document.getElementById("higher").addEventListener("change", Ordered);
function Ordered () {
  document.getElementById("Champions").innerHTML = "";
  let selection = document.getElementById("higher").value;
  let order = filterChampions.sort((a, b) => a[selection] > b[selection] ? -1 : a[selection] < b[selection] ? 1 :0 );
  order.map((i) => {
    document.getElementById("Champions").innerHTML += `<div class = "infoChampions"> ${i.item} <img class="Avatar" src="${i.img}"/> vida = ${i.life} <br>  AD = ${i.damage}<br>  AS = ${i.velAttack}<br>  vel.Mov. = ${i.velMove} <br>  reg.Vida = ${i.regenLife}<br> armadura = ${i.armor} </div>`;
  });
}

document.getElementById("level").addEventListener("change", level);
function level () {
  document.getElementById("Champions").innerHTML = "";
  let selection = Number(document.getElementById("level").value);
  filterChampions.map((i) => {
    document.getElementById("Champions").innerHTML += `<div class = "infoChampions"> ${i.item} <img class="Avatar" src="${i.img}"/> vida = ${((i.life)+(selection*(i.lifeLevel))).toFixed(2)} <br> AD = ${((i.damage)+(selection*(i.damageLevel))).toFixed(2)}<br>  AS = ${((i.velAttack)*(selection*(i.velAttackLevel/100))).toFixed(2)}<br>  vel.Mov. = ${i.velMove} <br>  reg.Vida = ${((i.regenLife)+(selection*(i.regenLifeLevel))).toFixed(2)}<br> armadura = ${((i.armor)+(selection*(i.armorLevel))).toFixed(2)}</div>`;
  });
}