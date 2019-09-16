
window.onload = function () {
    allChampions();
    for (let i = 0; i<=name.length && i<img.length; i++) {
    let element = document.createElement("P")
    element.innerHTML = `${name[i]}` +`<img class="Avatar" src="${img[i]}"/>`
    document.getElementById("Champions").appendChild(element)
    }
}
document.getElementById("btn").addEventListener("click", Filter);
function Filter(option) {
    document.getElementById("Champions").innerHTML="";
    filterFunction();
    option = document.getElementById("option").selectedIndex;
    if (option == 0) {
        for (let i = 0; i<=AssassinChampions.length; i++) {
            let element = document.createElement("P")
            let info = Object.values(AssassinChampions[i]);
            console.log(info)
            element.innerHTML = `${info[0]}` +`<img class="Avatar" src="${info[1]}"/>`+`vida = ${info[2]} <br>`+`dano = ${info[3]}<br>`+`vel.Ataque = ${info[4]}<br>`+`vel.Mov. = ${info[5]}<br>`+ `reg.Vida = ${info[6]}<br>` +`armadura = ${info[7]}`
            document.getElementById("Champions").appendChild(element)
        }
    }
    if (option == 1) {
        console.log(TankChampions)
        for (let i = 0; i<=TankChampions.length; i++) {
            let element = document.createElement("P")
            let info = Object.values(TankChampions[i]);
            console.log(info)
            element.innerHTML = `${info[0]}` +`<img class="Avatar" src="${info[1]}"/>`+`vida = ${info[2]} <br>`+`dano = ${info[3]}<br>`+`vel.Ataque = ${info[4]}<br>`+`vel.Mov. = ${info[5]}<br>`+ `reg.Vida = ${info[6]}<br>` +`armadura = ${info[7]}` 
            document.getElementById("Champions").appendChild(element)
        }
    }
    if (option == 2) {
        console.log(FighterChampions)
        for (let i = 0; i<=infoChampions.length; i++) {
            let element = document.createElement("P")
            element.innerHTML = `${Object.entries(FighterChampions[i])}` 
            document.getElementById("Champions").appendChild(element)
        }
    }
    if (option == 3) {
        console.log(MageChampions)
        for (let i = 0; i<=infoChampions.length; i++) {
            let element = document.createElement("P")
            element.innerHTML = `${Object.entries(MageChampions[i])}` 
            document.getElementById("Champions").appendChild(element)
        }
    }
    if (option == 4) {
        console.log(MarksmanChampions)
        for (let i = 0; i<=infoChampions.length; i++) {
            let element = document.createElement("P")
            element.innerHTML = `${Object.entries(MarksmanChampions[i])}` 
            document.getElementById("Champions").appendChild(element)
        }
    }
    if (option == 5) {
        console.log(SuportChampions)
        for (let i = 0; i<=infoChampions.length; i++) {
            let element = document.createElement("P")
            element.innerHTML = `${Object.entries(SuportChampions[i])}` 
            document.getElementById("Champions").appendChild(element)
        }
    }
}
























// for (i in nameChampions) {
//     let element = document.createElement("LI")
//     let contElement = document.createTextNode(nameChampions[i])
//     element.appendChild(contElement);
//     document.getElementById("Champions").appendChild(element)
// }
// for (j in imgChampions) {
//     let image = document.createElement("LI")
//     image.innerHTML = `<img src="${imgChampions[j]}"/>`
//     document.getElementById("Champions").appendChild(image);
// }
// name.innerHTML = `${nameChampions}`;
// name.innerHTML = `<img src= "${imgChampions}"/>`;


//     for (j in imgChampions) {
//     let image = document.createElement("P")
//     image.innerHTML = `<img src="${imgChampions[j]}"/>`
//     document.getElementById("Champions").appendChild(image);
// }

//let contElement = document.createTextNode(nameChampions[i])
    //element.appendChild(contElement);