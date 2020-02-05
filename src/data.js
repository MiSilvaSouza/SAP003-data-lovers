window.data = {
  filterData,
  orderData,
  computeStats,
  computeStatsAS
}; 

function filterData(data, condition) {
  return data.filter(item => item.tag.includes(condition));
}

function orderData(data, sortyBy, sortOrder) {
  if (sortOrder === "decrescente") {
    const order = data.sort((a, b) => a[sortyBy] > b[sortyBy] ? -1 : a[sortyBy] < b[sortyBy] ? 1 :0);
    return order;
  } else {
    const order = data.sort((a, b) => a[sortyBy] > b[sortyBy] ? 1 : a[sortyBy] < b[sortyBy] ? -1 :0);
    return order;
  }
}

function computeStats (data, perlevel, level) {
  return data + (perlevel * (level -1)); 
}

function computeStatsAS (data, perlevel, level) {
  return data * ((1+ (perlevel/100) * (level -1))); 
}

