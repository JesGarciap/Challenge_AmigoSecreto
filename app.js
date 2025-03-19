// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const inputAmigo = document.getElementById("amigo");

const listaAmigos = [];
const ulListaParaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");

function agregarAmigo(){

    if (inputAmigo.value == ""){
        alert("Para continuar con el juego deber ingresar un nombre")
    }

    listaAmigos.push(inputAmigo.value);
    //console.log(listaAmigos);

    //ulListaParaAmigos.innerHTML = listaAmigos.innerHTML + inputAmigo.value;
    ulListaParaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;
    
    //console.log(listaAmigos.innerHTML);

    limpiarCaja();
};

function limpiarCaja() {
    document.querySelector('#amigo').value = ' '; 
}

function sortearAmigo() {
    const random = Math.floor(Math.random() * listaAmigos.length);
    
    const amigoSecreto = listaAmigos[random];
    ulResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
}

function reiniciarJuego() {
    listaAmigos.length = 0; // Vaciar la lista de amigos
    ulListaParaAmigos.innerHTML = ""; // Limpiar la lista en pantalla
    ulResultado.innerHTML = ""; // Limpiar el resultado
    limpiarCaja(); // Limpiar el input
    alert("El juego ha sido reiniciado");
}

reiniciarJuego()