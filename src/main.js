document.getElementById("button").addEventListener("click", Change);

function Change() {
    event.preventDefault();
    document.getElementById("Champions").innerHTML = ChampionsAssassin();
}
