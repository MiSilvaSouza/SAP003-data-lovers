const dataLOL = LOL.data;
const resultado = document.getElementById("resultado") 
let nome = ""
let img = ""
let champions = ""
 
window.onload = function listar() {
    for (let chave of Object.keys(dataLOL)) {            
        img = (dataLOL[chave].img);   
        nome = chave;     
        champions += `<span><img src="${img}"/><br>`+`${nome}</span>`;    
        resultado.innerHTML = champions;        
    }  
    
}
