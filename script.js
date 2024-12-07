function Horas(){
    const data = new Date();
    let horas = data.toLocaleString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });
    document.getElementById("marcador").innerText = horas
}

Horas()

setInterval(function(){
    Horas();
}, 1000)

// Verficando qual é a parte do dia
function Verificando(){
const resultado = document.getElementById("resultado")
let data = new Date().getHours();
data = Number(data)
let tomorrow = "06";
let Tomorrow = Number(tomorrow);

if(data >= 18){
    resultado.innerText = "BOA NOITE! ✨🌃"
} else if(data >= 12){
    resultado.innerText = "BOA TARDE! 🌤️😌"
} else if(data >= Tomorrow){
    resultado.innerText = "BOM DIA! ☀️😊"
} else{
    resultado.innerText = "BOA MADRUGADA! 🌙🌌"
}
console.log(data)
}

Verificando()