window.onload = function () {
    allChampions();
    for (i in nameChampions) {
        let element = document.createElement("LI")
        let contElement = document.createTextNode(nameChampions[i])
        element.appendChild(contElement);
        document.getElementById("name").appendChild(element)
    }
    for (j in imgChampions) {
        let image = document.createElement("LI")
        image.innerHTML = `<img src="${imgChampions[j]}"/>`
        document.getElementById("imagem").appendChild(image);
    }
}


