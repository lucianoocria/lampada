let interruptor = document.createElement("img");
interruptor.src = "imagens/offoff.png";
document.body.appendChild(interruptor);
let lampada = document.createElement("img");
lampada.src = "imagens/lampadaoff.png";
document.body.appendChild(lampada).style.margin = "0em 0em 0em 30em"
document.body.style.backgroundColor = "#000";
let base = "desligado";
interruptor.onclick = function () {
    if (base === "ligado") {
        interruptor.src = "imagens/onon.png";
        lampada.src = "imagens/lampadaon.png";
        document.body.style.backgroundColor = "#FFF";
    }
    else {
        interruptor.src = "imagens/offoff.png";
        lampada.src = "imagens/lampadaoff.png";
        document.body.style.backgroundColor = "#000";
    }
    retornar();
}
function retornar() {
    base === "desligado" ? base = "ligado" : base = "desligado";
    return base;
}