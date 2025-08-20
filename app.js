let listaAmigos =[];
let sortear = 0;
let nombresAmigos = document.getElementById("amigo");
let mostrarListaAmigos = document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado");

//Funcion para recibir los nombre escritos.
function agregarAmigo() {
    if (!nombresAmigos.value){
    alert ("Escribe un nombre valido.");
    };

    listaAmigos.push(nombresAmigos.value);
    mostrarListaAmigos.innerHTML += `<li> ${nombresAmigos.value}</li>`;
};

//Funcion adivinar el nombre del amigo.
function sortearAmigo(){
    sortear = Math.floor(Math.random() * listaAmigos.length);
    let amigoSecreto = listaAmigos[sortear];
    resultado.innerHTML = `<li> El amigo secreto es: ${amigoSecreto} </li>`;
};

