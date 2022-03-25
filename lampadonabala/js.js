let int = document.createElement("img");
int.src = "imagens/offoff.png";
document.body.appendChild(int);
let lampada = document.createElement("img");
lampada.src = "imagens/lampadaoff.png";
document.body.appendChild(lampada).style.margin = "0% 0% 0% 25%"
document.body.style.backgroundColor = "#000";
let estado = "desligado";
int.onclick = function () {
    if (estado === "ligado") {
        int.src = "imagens/onon.png";
        lampada.src = "imagens/lampadaon.png";
        document.body.style.backgroundColor = "#FFF";
    }
    else {
        int.src = "imagens/offoff.png";
        lampada.src = "imagens/lampadaoff.png";
        document.body.style.backgroundColor = "#000";
    }
    retornar();
}
function retornar() {
    estado === "desligado" ? estado = "ligado" : estado = "desligado";
    return estado;
}