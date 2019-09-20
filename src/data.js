function filtro(data, condition) {
  return data.filter(item => dataLOL[item].tags.includes(condition));
}
const selecionados = {filtro};