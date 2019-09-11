// esta é uma função de exemplo
// veja como agregamos a função ao objeto global window

/*const example = () => {
  return "example";
};

window.example = example;*/
let arrayChampions = Object.values(LOL.data);
let arrayFunction = [];

const ChampionsAssassin = () => {
  arrayChampions.map((item) => {
    console.log(item.tags);
    console.log(item.tags[0])
    /*if(){
      arrayFunction.push(item.name, item.stats.hp);
    };*/
  })
  return 
  }
  
  
window.ChampionsAssassin = ChampionsAssassin;
