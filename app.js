let amigos = []; 
let totalAmigos = amigos.length;

function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;

    if (nombre == '') {
        alert("Por favor, inserte un nombre.");
    } else {
        amigos.push(nombre);
        actualizarLista();
    }

    document.getElementById('amigo').value = '';
    totalAmigos = amigos.length;
}

function actualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
  
    for (i = 0; i <= totalAmigos; i++) {
        let elemento = document.createElement('li');
        elemento.innerHTML = amigos[i];
        lista.appendChild(elemento);
    }
}