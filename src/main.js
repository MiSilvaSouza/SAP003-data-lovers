
window.onload = function () {
    allChampions();
    let i , j
    for (let i = 0; i<=nameChampions.length && i<imgChampions.length; i++) {
    let element = document.createElement("P")
    element.innerHTML = `${nameChampions[i]}` +`<img src="${imgChampions[i]}"/>`
    
    document.getElementById("Champions").appendChild(element)
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