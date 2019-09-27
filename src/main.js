const resultado = document.getElementById("resultado");
const legenda = document.getElementById("legenda");
let infoChampions = [];

Object.keys(LOL.data).map(function(name) {  
  let nome = name;
  let img = (LOL.data[name].img);
  let tag = (LOL.data[name].tags);
  let hp = LOL.data[name].stats.hp.toFixed(1);
  let hplvl = LOL.data[name].stats.hpperlevel;
  let ad = LOL.data[name].stats.attackdamage.toFixed(2);
  let adlvl = LOL.data[name].stats.attackdamageperlevel;
  let as = parseFloat(0.625/(1+(+(LOL.data[name].stats.attackspeedoffset)))).toFixed(3);
  let aslvl = LOL.data[name].stats.attackspeedperlevel;
  let ms = LOL.data[name].stats.movespeed; 
  let hr = LOL.data[name].stats.hpregen.toFixed(2);
  let hrlvl = LOL.data[name].stats.hpregenperlevel;
  let ar = LOL.data[name].stats.armor.toFixed(2);
  let arlvl = LOL.data[name].stats.armorperlevel;

  infoChampions.push({img, nome, tag, hp, hplvl, ad, adlvl, as, aslvl, ms, hr, hrlvl, ar, arlvl});
});

//Template que mostra todos os personagens quando abre a página ou clica no botão home
function template(data) {  
  legenda.innerHTML = "";
  resultado.innerHTML = "";
  data.map(function(item) {          
    return resultado.innerHTML += `<span><img src="${item.img}"/><br>`+`${item.nome}</span>`; 
  });  
}

window.onload = template(infoChampions);
document.getElementById("home").onclick = function clicar () {
  template(infoChampions);
};

//Template que mostra personagens filtrados por função escolhida
function templatePro(data) {
  resultado.innerHTML = "";
  legenda.innerHTML = "HP - Vida / AD - Dano de Ataque / AS - Velocidade de Ataque / MS - Velocidade de Movimento / HR- Regeneração de Vida / AR - Armadura";  
  data.map(function(item) {          
    return resultado.innerHTML +=`<span><img src="${item.img}"/><br>`+`${item.nome}<br>`+`<br>HP: ${item.hp}<br>`+`AD: ${item.ad}<br>`+`AS: ${item.as}<br>`+`MS: ${item.ms}<br>`+`HR: ${item.hr}<br>`+`AR: ${item.ar}</br></span>`; 
  }); 
}
//Template que mostra personagens filtrados e ordenados por característica escolhida
document.getElementById("seletor").onchange = function selecionado(e) {
  document.getElementById("ordenar").disabled = false;
  document.getElementById("escolher").disabled = false;
  document.getElementById("level").disabled = false;    
  let seletor1 = e.target.value;
  const filtrados = filtro(infoChampions, seletor1);
  console.log(filtrados);  
  templatePro(filtrados);
  
  document.getElementById("ordenar").onchange = function selecionado(e) {
    let seletor2 = e.target.value;
    document.getElementById("escolher").onchange = function selecionado(e) {
      let seletor3 = e.target.value;
      if (seletor3 === "decrescente") {        
        templatePro(ordenamaior(filtrados, seletor2));
      } else {
        templatePro(ordenamenor(filtrados, seletor2));
      };
    };
  };
  //Template que mostra personagens filtrados por função escolhida e mostra características por level
  document.getElementById("level").onchange = function selecionado (e) {
    let seletor4 = e.target.value;
    function templateLvl (data) {
      resultado.innerHTML = "";
      legenda.innerHTML = "HP - Vida / AD - Dano de Ataque / AS - Velocidade de Ataque / MS - Velocidade de Movimento / HR- Regeneração de Vida / AR - Armadura";  
      data.map(function(item) {
        return resultado.innerHTML +=`<span><img src="${item.img}"/><br>`+`${item.nome}<br>`+`<br>HP: ${calcular(+item.hp, +item.hplvl, +seletor4).toFixed(1)}<br>`+`AD: ${calcular(+item.ad, +item.adlvl, +seletor4).toFixed(2)}<br>`+`AS: ${calcular(+item.as, +item.aslvl, +seletor4).toFixed(3)}<br>`+`MS: ${item.ms}<br>`+`HR: ${calcular(+item.hr, +item.hrlvl, +seletor4).toFixed(2)}<br>`+`AR: ${calcular(+item.ar, +item.arlvl, +seletor4).toFixed(2)}</br></span>`; 
      });
    };
    templateLvl(filtrados);  
  };
};
