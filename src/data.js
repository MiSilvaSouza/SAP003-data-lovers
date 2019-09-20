const dataChampions = LOL.data;
let infoChampions=[];
let filterChampions=[];
let img, life, lifeLevel, damage, damageLevel, velAttack, velAttackLevel, velMove, regenLife, regenLifeLevel, armor, armorLevel;

const takeChampions = (selection) => {
  Object.keys(dataChampions).map((item) => {
    img = dataChampions[item].img;
    life = dataChampions[item].stats.hp;
    lifeLevel = dataChampions[item].stats.hpperlevel;
    damage = dataChampions[item].stats.attackdamage;
    damageLevel = dataChampions[item].stats.attackdamageperlevel;
    velAttack = dataChampions[item].stats.attackspeedoffset;
    velAttackLevel = dataChampions[item].stats.attackspeedperlevel
    velMove = dataChampions[item].stats.movespeed;
    regenLife = dataChampions[item].stats.hpregen;
    regenLifeLevel = dataChampions[item].stats.hpregenperlevel
    armor = dataChampions[item].stats.armor;
    armorLevel = dataChampions[item].stats.armorperlevel;

    infoChampions.push({item, img});
    
    if (dataChampions[item].tags.includes(selection)) { 
      velAttack = parseFloat(((0.625)/(1+velAttack)).toFixed(3));
      filterChampions.push({item, img, life,lifeLevel, damage, damageLevel, velAttack, velAttackLevel, velMove, regenLife, regenLifeLevel, armor, armorLevel});
    }
    return infoChampions, filterChampions;
  });};

  window.data = {
    takeChampions: takeChampions,
    infoChampions: infoChampions,
    filterChampions: filterChampions
  };