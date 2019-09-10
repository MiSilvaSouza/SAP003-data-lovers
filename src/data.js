// esta é uma função de exemplo
// veja como agregamos a função ao objeto global window

/*const example = () => {
  return "example";
};

window.example = example;*/

const myPersonage = () => {
  //Object.value(LOL.data.)
  console.log(LOL.data.Aatrox.info)
  return LOL.data.Aatrox.info.difficulty;
  }
window.myPersonage = myPersonage;
