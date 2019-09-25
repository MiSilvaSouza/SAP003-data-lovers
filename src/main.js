const dataLOL = LOL.data;
const allNames = Object.keys(dataLOL);
const resultado = document.getElementById("resultado");
const legenda = document.getElementById("legenda");

//Template que mostra todos os personagens quando abre a página ou clica no botão home
function template(data) {
  legenda.innerHTML = "";
  resultado.innerHTML = "";
  return champions = data.map(function(name) {          
    return resultado.innerHTML += `<span><img src="${dataLOL[name].img}"/><br>`+`${name}</span>`; 
  });  
}

window.onload = template(allNames);
document.getElementById("home").onclick = function clicar() {
  template(allNames);  
}; 

//Template que mostra personagens filtrados por função escolhida
function templatePro(data) {
  resultado.innerHTML = "";
  legenda.innerHTML = "HP - Vida / AD - Dano de Ataque / AS - Velocidade de Ataque / MS - Velocidade de Movimento / HR- Regeneração de Vida / AR - Armadura";  
  return champions = data.map(function(name) {          
    return resultado.innerHTML +=`<span><img src="${dataLOL[name].img}"/><br>`+`${name}<br>`+
    `<br>HP: ${dataLOL[name].stats.hp.toFixed(1)}<br>`+`AD: ${dataLOL[name].stats.attackdamage.toFixed(2)}<br>`+
    `AS: ${parseFloat(0.625/(1+(+(dataLOL[name].stats.attackspeedoffset)))).toFixed(3)}<br>`+
    `MS: ${dataLOL[name].stats.movespeed}<br>`+`HR: ${dataLOL[name].stats.hpregen.toFixed(2)}<br>`+
    `AR: ${dataLOL[name].stats.armor.toFixed(2)}</br></span>`; 
  }); 
}
//Template que mostra personagens filtrados por função escolhida e mostra características por level
document.getElementById("seletor").onchange = function selecionado(e) {
  document.getElementById("ordenar").disabled = false;
  document.getElementById("level").disabled = false;    
  let seletor1 = e.target.value;
  const filtrados = filtro(allNames, dataLOL, seletor1);  
  
  document.getElementById("level").onchange = function selecionado (e) {
    let seletor3 = e.target.value;

    if (seletor3 === "1") {
      templatePro(filtrados);
    } else {
      function templateLvl(data) {      
        resultado.innerHTML = "";
        legenda.innerHTML = "HP - Vida / AD - Dano de Ataque / AS - Velocidade de Ataque / MS - Velocidade de Movimento / HR- Regeneração de Vida / AR - Armadura";  
        return champions = data.map(function(name) {             
          return resultado.innerHTML +=`<span><img src="${dataLOL[name].img}"/><br>`+`${name}<br>`+
          `<br>HP: ${calcular(dataLOL[name].stats.hp, dataLOL[name].stats.hpperlevel, seletor3  ).toFixed(1)}<br>`+
          `AD: ${calcular(dataLOL[name].stats.attackdamage, dataLOL[name].stats.attackdamageperlevel, seletor3).toFixed(2)}<br>`+
          `AS: ${calcular(parseFloat(0.625/(1+(dataLOL[name].stats.attackspeedoffset))), dataLOL[name].stats.attackspeedperlevel, seletor3).toFixed(3)}<br>`+
          `MS: ${dataLOL[name].stats.movespeed}<br>`+
          `HR: ${calcular(dataLOL[name].stats.hpregen, dataLOL[name].stats.hpregenperlevel, seletor3).toFixed(2)}<br>`+
          `AR: ${calcular(dataLOL[name].stats.armor, dataLOL[name].stats.armorperlevel, seletor3).toFixed(2)}</br></span>`; 
        });

      }      
      templateLvl(filtrados);
    }
   
  };
  //Template que mostra personagens filtrados e ordenados por característica escolhida
  document.getElementById("ordenar").onchange = function selecionado (e) {    
    let seletor2 = e.target.value;

    if (seletor2 === "attackspeedoffset") {
      const ordenados = filtrados.map(function(elem) {
        return (([elem, (parseFloat(0.625/(1+(+(mapInfo(filtrados, dataLOL, seletor2)[filtrados.indexOf(elem)]))))).toFixed(3)])); 
      });                   
      const ordenaInfo = ordenar(ordenados);
      const ordenaNames = ordenaInfo.map(elem => elem[0]);
      templatePro(ordenaNames);

    } else {
      const ordenados = filtrados.map(function(elem) {
        return (([elem, mapInfo(filtrados, dataLOL, seletor2)[filtrados.indexOf(elem)]])); 
      });                      
      const ordenaInfo = ordenar(ordenados);      
      const ordenaNames = ordenaInfo.map(elem => elem[0]);
      templatePro(ordenaNames);
    };      
                
  };
  return templatePro(filtrados);
};

