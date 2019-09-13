// esta é uma função de exemplo
// veja como agregamos a função ao objeto global window

/*const example = () => {
  return "example";
};
window.example = example;*/

const dataChampions = LOL.data;
let nameChampions = [];
let imgChampions = [];

const allChampions = () => {
  for(item of Object.keys(dataChampions)){
    nameChampions.push(item);
    imgChampions.push(dataChampions[item].img);
    //arrayChampions.sort()
  }
  return Champions, imgChampions;
}
window.allChampions = allChampions





//Para usuário II
// let name, life, damage, velAttack, velMove, regenLife, armor
// name = item.name
// life = item.stats.hp
// damage = item.stats.attackdamage
// velAttack = item.stats.attackspeedoffset
// velMove = item.stats.movespeed
// regenLife = item.stats.hpregen
// armor = item.stats.armor

// if (item.tags[0] == "Assassin" || item.tags[1] == "Assassin") { arrayChampions.push(name, life, damage, velAttack, velMove, regenLife, armor) //Verificar possibilidade de colocar em um objeto 