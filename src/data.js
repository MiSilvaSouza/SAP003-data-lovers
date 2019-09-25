function filterData(data, condition) {
  return data.filter(item => item.action.includes(condition));
}

function orderData(data, sortyBy, sortOrder) {
  if (sortOrder === "decrescente") {
    let order = data.sort((a, b) => a[sortyBy] > b[sortyBy] ? -1 : a[sortyBy] < b[sortyBy] ? 1 :0);
    return order;
  } else {
    let order = data.sort((a, b) => a[sortyBy] > b[sortyBy] ? 1 : a[sortyBy] < b[sortyBy] ? -1 :0);
    return order;
  }
} 

let infoLevel = [];
function computeStats(data, index) {
  for (let i in data) {
    let name = data[i].name;
    let img = data[i].img;
    let life = parseFloat(((data[i].life)+(index*(data[i].lifeLevel))).toFixed(2));
    let AD = parseFloat(((data[i].AD)+(index*(data[i].ADLevel))).toFixed(2));
    let AS = parseFloat(((data[i].AS)*(1+(index*(data[i].ASLevel/100)))).toFixed(2));
    let velMove = data[i].velMove;
    let regLife = parseFloat(((data[i].regLife)+(index*(data[i].regLifeLevel))).toFixed(2));
    let armadura = parseFloat(((data[i].armadura)+(index*(data[i].armaduraLevel))).toFixed(2));
    infoLevel.push({name, img, life, AD, AS, velMove, regLife, armadura});
  }
  return infoLevel;
}

window.datajs = {
  filterData: filterData,
  orderData: orderData,
  computeStats: computeStats
}; 