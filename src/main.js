const resultado = document.getElementById("resultado");
const legenda = document.getElementById("legenda");

const infoChampions = Object.keys(LOL.data).map(function(name) { 
  return {
    nome: name,
    img: (LOL.data[name].img),
    tag: (LOL.data[name].tags),
    hp: LOL.data[name].stats.hp.toFixed(1),
    hplvl: LOL.data[name].stats.hpperlevel,
    ad: LOL.data[name].stats.attackdamage.toFixed(2),
    adlvl: LOL.data[name].stats.attackdamageperlevel,
    as: parseFloat(0.625/(1+(+(LOL.data[name].stats.attackspeedoffset)))).toFixed(3),
    aslvl: LOL.data[name].stats.attackspeedperlevel,
    ms: LOL.data[name].stats.movespeed, 
    hr: LOL.data[name].stats.hpregen.toFixed(2),
    hrlvl: LOL.data[name].stats.hpregenperlevel,
    ar: LOL.data[name].stats.armor.toFixed(2),
    arlvl: LOL.data[name].stats.armorperlevel,
  };
});

function template(data) {  
  legenda.innerHTML = "";
  resultado.innerHTML = data.map(function(item) {          
    return `
    <span>
    <img src="${item.img}"/><br>`+`${item.nome}
    </span>
    `; 
  }).join("");    
};

window.onload = template(infoChampions);
document.getElementById("home").onclick = function clicar () {
  template(infoChampions);
};

function templatePro(data) {  
  legenda.innerHTML = "HP - Vida "+
  "/ AD - Dano de Ataque "+
  "/ AS - Velocidade de Ataque "+
  "/ MS - Velocidade de Movimento "+
  "/ HR- Regeneração de Vida "+
  "/ AR - Armadura ";

  resultado.innerHTML = data.map(function(item) {          
    return `
    <span>
    <img src="${item.img}"/><br>`+`${item.nome}<br><br>`+
    `HP: ${item.hp}<br>`+
    `AD: ${item.ad}<br>`+
    `AS: ${item.as}<br>`+
    `MS: ${item.ms}<br>`+
    `HR: ${item.hr}<br>`+
    `AR: ${item.ar}</br>
    </span>
    `; 
  }).join(""); 
};

document.getElementById("seletor").onchange = function selecionado(e) {
  document.getElementById("ordenar").disabled = false;
  document.getElementById("escolher").disabled = false;
  document.getElementById("level").disabled = false;    
  const seletor1 = e.target.value;
  const filtrados = filtro(infoChampions, seletor1);    
  templatePro(filtrados);
  
  document.getElementById("ordenar").onchange = function selecionado(e) {
    const seletor2 = e.target.value;    
    document.getElementById("escolher").onchange = function selecionado(e) {
      const seletor3 = e.target.value;
      
      if (seletor3 === "decrescente") {        
        templatePro(ordenamaior(filtrados, seletor2));
      } else {
        templatePro(ordenamenor(filtrados, seletor2));
      };
    };
  };

  document.getElementById("level").onchange = function selecionado (e) {
    let seletor4 = e.target.value;
    function templateLvl (data) {      
      legenda.innerHTML = "HP - Vida "+
      "/ AD - Dano de Ataque "+
      "/ AS - Velocidade de Ataque "+
      "/ MS - Velocidade de Movimento "+
      "/ HR- Regeneração de Vida "+
      "/ AR - Armadura ";
        
      resultado.innerHTML = data.map(function(item) {
        return `
        <span>
        <img src="${item.img}"/><br>`+`${item.nome}<br><br>`+
        `HP: ${calcular(+item.hp, +item.hplvl, +seletor4).toFixed(1)}<br>`+
        `AD: ${calcular(+item.ad, +item.adlvl, +seletor4).toFixed(2)}<br>`+
        `AS: ${calcularAS(+item.as, +item.aslvl, +seletor4).toFixed(3)}<br>`+
        `MS: ${item.ms}<br>`+
        `HR: ${calcular(+item.hr, +item.hrlvl, +seletor4).toFixed(2)}<br>`+
        `AR: ${calcular(+item.ar, +item.arlvl, +seletor4).toFixed(2)}</br>
        </span>
        `; 
      }).join("");
    };
    templateLvl(filtrados);  
  };
};
