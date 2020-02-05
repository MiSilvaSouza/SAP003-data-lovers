const spaceChampions = document.getElementById("champions");
const spaceSubtitle = document.getElementById("subtitle");

const infoChampions = Object.keys(LOL.data).map(function(elem) { 
  return {
    name: elem,
    img: (LOL.data[elem].img),
    tag: (LOL.data[elem].tags),
    hp: LOL.data[elem].stats.hp.toFixed(1),
    hplvl: LOL.data[elem].stats.hpperlevel,
    ad: LOL.data[elem].stats.attackdamage.toFixed(2),
    adlvl: LOL.data[elem].stats.attackdamageperlevel,
    as: parseFloat(0.625/(1+(+(LOL.data[elem].stats.attackspeedoffset)))).toFixed(3),
    aslvl: LOL.data[elem].stats.attackspeedperlevel,
    ms: LOL.data[elem].stats.movespeed, 
    hr: LOL.data[elem].stats.hpregen.toFixed(2),
    hrlvl: LOL.data[elem].stats.hpregenperlevel,
    ar: LOL.data[elem].stats.armor.toFixed(2),
    arlvl: LOL.data[elem].stats.armorperlevel,
  };
});

const home = (data) => {  
  spaceChampions.innerHTML = "";

  data.map((item) => {
    spaceChampions.innerHTML += `
    <div class="cards"> ${item.name}` + 
    `<img class="Avatar" src="${item.img}"</div>`;
  }); 
};

window.onload = home(infoChampions);

const cardsChampions = (data) => {
  spaceChampions.innerHTML = "";

  spaceSubtitle.innerHTML = "HP - Vida "+
  "/ AD - Dano de Ataque "+
  "/ AS - Velocidade de Ataque "+
  "/ MS - Velocidade de Movimento "+
  "/ HR- Regeneração de Vida "+
  "/ AR - Armadura ";
  
  data.map((item) => {
    spaceChampions.innerHTML += `    
    <div class="infoChampions">
    ${item.name}
    <img src="${item.img}"/><br>`+
    `HP: ${item.hp}<br>`+
    `AD: ${item.ad}<br>`+
    `AS: ${item.as}<br>`+
    `MS: ${item.ms}<br>`+
    `HR: ${item.hr}<br>`+
    `AR: ${item.ar}</br>
    </div>`; 
  }).join(""); 
};

document.getElementById("filter").addEventListener("change", (e) => { 
  const option = e.target.value;
  document.getElementById("order").disabled = false;
  document.getElementById("higher").disabled = false; 
  filtrados = filterData(infoChampions, option);
  cardsChampions(filtrados);
});

document.getElementById("higher").addEventListener("change", () => {
  const selection = document.getElementById("higher").value;
  const ord = document.getElementById("order").value;
  document.getElementById("level").disabled = false;  
  cardsChampions(orderData(filtrados, selection, ord));
});

document.getElementById("level").addEventListener("change", (e) => {
  const selection = e.target.value;
  const cardsChampionsLevel = (data) => {
    spaceChampions.innerHTML = "";  
    data.map((item) => {
      spaceChampions.innerHTML += `    
      <div class="infoChampions">
      ${item.name}
      <img src="${item.img}"/><br>`+
      `HP: ${computeStats(+item.hp, +item.hplvl, +selection).toFixed(1)}<br>`+
      `AD: ${computeStats(+item.ad, +item.adlvl, +selection).toFixed(2)}<br>`+
      `AS: ${computeStatsAS(+item.as, +item.aslvl, +selection).toFixed(3)}<br>`+
      `MS: ${item.ms}<br>`+
      `HR: ${computeStats(+item.hr, +item.hrlvl, +selection).toFixed(2)}<br>`+
      `AR: ${computeStats(+item.ar, +item.arlvl, +selection).toFixed(2)}</br>
      </div>`; 
    }).join("");
  };
  cardsChampionsLevel(filtrados);
});
