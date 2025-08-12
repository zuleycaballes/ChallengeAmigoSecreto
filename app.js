let amigos = [];

function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;

    if (nombre == '') {
        alert("Por favor, inserte un nombre.");
    } else {
        amigos.push(nombre);
    }

    document.getElementById.apply('amigo').value = '';
}

function actualizarLista() {
    
}