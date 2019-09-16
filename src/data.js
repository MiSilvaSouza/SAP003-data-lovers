const dataChampions = LOL.data;
let name = [];
let img = [];
let AssassinChampions=[];
let TankChampions = [];
let FighterChampions=[];
let MageChampions=[];
let SuportChampions=[];
let MarksmanChampions = [];
let life, damage, velAttack, velMove, regenLife, armor

const allChampions = () => {
  for(item of Object.keys(dataChampions)){
    name.push(item);
    img.push(dataChampions[item].img);
  }
  return name, img;
}
const filterFunction = () => {
  for(item of Object.keys(dataChampions)){
    img = dataChampions[item].img;
    life = dataChampions[item].stats.hp
    damage = dataChampions[item].stats.attackdamage
    velAttack = dataChampions[item].stats.attackspeedoffset
    velMove = dataChampions[item].stats.movespeed
    regenLife = dataChampions[item].stats.hpregen
    armor = dataChampions[item].stats.armor
    if (dataChampions[item].tags[0] == "Assassin" || dataChampions[item].tags[1] == "Assassin") { 
      AssassinChampions.push({item, img, life, damage, velAttack, velMove, regenLife, armor})
    }
    if (dataChampions[item].tags[0]=="Tank" || dataChampions[item].tags[1]=="Tank"){
      TankChampions.push({item, img, life, damage, velAttack, velMove, regenLife, armor})
    }
    if (dataChampions[item].tags[0]=="Fighter" || dataChampions[item].tags[1]=="Fighter"){
      FighterChampions.push({life, damage, velAttack, velMove, regenLife, armor})
    }
    if (dataChampions[item].tags[0]=="Mage" || dataChampions[item].tags[1]=="Mage"){
      MageChampions.push({life, damage, velAttack, velMove, regenLife, armor})
    }
    if (dataChampions[item].tags[0]=="Suport" || dataChampions[item].tags[1]=="Suport"){
      SuportChampions.push({life, damage, velAttack, velMove, regenLife, armor})
    }
    if (dataChampions[item].tags[0]=="Marksman" || dataChampions[item].tags[1]=="Marksman"){
      MarksmanChampions.push({life, damage, velAttack, velMove, regenLife, armor})
    }
  }
  return AssassinChampions, TankChampions, FighterChampions, MageChampions, SuportChampions, MarksmanChampions;
}

window.data ={
  allChampions: allChampions,
  filterFunction: filterFunction
}





//let nameChampions = [];
//let imgChampions = [];
// const allChampions = () => {
//   for(item of Object.keys(dataChampions)){
//     nameChampions.push(item);
//     imgChampions.push(dataChampions[item].img);
//   }
//   return nameChampions, imgChampions;
// }





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