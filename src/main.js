const dataLOL = LOL.data;
const lolNames = Object.keys(dataLOL);
const resultado = document.getElementById("resultado"); 

function template(data) {
  resultado.innerHTML = "";
  const champions = data.map(function(chave) {          
    return resultado.innerHTML += `<span><img src="${dataLOL[chave].img}"/><br>`+`${chave}</span>`; 
  });
  return champions;
}
window.onload = template(lolNames);

function templatePro(data) {
  resultado.innerHTML = "";
  const champions = data.map(function(chave) {          
    return resultado.innerHTML += `<span><img src="${dataLOL[chave].img}"/><br>`+`${chave}<br>`+
    `<br>HP: ${dataLOL[chave].stats.hp}<br>`+`AD: ${dataLOL[chave].stats.attackdamage}<br>`+
    `AS: ${parseFloat(0.625/(1+(+(dataLOL[chave].stats.attackspeedoffset)))).toFixed(3)}<br>`+
    `VM: ${dataLOL[chave].stats.movespeed}<br>`+`RV: ${dataLOL[chave].stats.hpregen}<br>`+
    `AR: ${dataLOL[chave].stats.armor}</br></span>`; 
  });
  return champions;
}

document.getElementById("seletor").onchange = function selecionado(e) {    
  let seletor = e.target.value;
  const filtrados = selecionados.filtro(lolNames, seletor);  

  templatePro(filtrados);
    
};

