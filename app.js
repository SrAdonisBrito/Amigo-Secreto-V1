let listaNombresAmigos =[];
let nombresHTML = 0;

//Funcion para recibir los nombre escritos.
function nombresAmigos () {
    nombresAmigos = document.querySelector("#nombre");
    nombresAmigos = nombresAmigos.value;
    return;
}

nombresAmigos();
console.log(nombresAmigos);