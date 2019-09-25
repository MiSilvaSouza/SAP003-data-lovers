window.data = {
  filtro: filtro,
  mapInfo: mapInfo,  
  ordenar: ordenar,
  calcular: calcular
};

function filtro(data, way, condition) {
  return data.filter(item => way[item].tags.includes(condition));
}

function mapInfo(data, way, condition) {
  return data.map(item => way[item].stats[condition]);  
}

function ordenar (data) {
  return data.sort((a, b) => b[1] - a[1]); 
}

function calcular (data, perlevel, level) {
  return data + (perlevel * level); 
}