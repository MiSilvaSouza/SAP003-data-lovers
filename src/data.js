window.data = {
  filtro: filtro,    
  ordenamaior: ordenamaior,
  ordenamenor: ordenamenor,
  calcular: calcular
};

function filtro(data, condition) {
  return data.filter(item => item.tag.includes(condition));
}

function ordenamaior (data, sortBy) {
  return data.sort((a, b) => b[sortBy] - a[sortBy]); 
}

function ordenamenor (data, sortBy) {
  return data.sort((a, b) => a[sortBy] - b[sortBy]); 
}

function calcular (data, perlevel, level) {
  return data + (perlevel * (level -1)); 
}