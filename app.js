let amigos = []; 
let totalAmigos = 0;
let lista = document.getElementById('listaAmigos');
let sorteados = [];

function agregarAmigo() {
    let nombre = document.getElementById('amigo').value.trim();
    const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

    if (nombre === '') {
        alert("Por favor, inserte un nombre.");
    } else if (!soloLetras.test(nombre)) {
        alert("El nombre solo debe contener letras.");
    } else if (nombre.length > 21) {
        alert("El nombre debe tener menos de 20 caracteres.");
    } else if (amigos.includes(nombre)) {
        alert("Ese nombre ya fue agregado.");
    } else {
        amigos.push(nombre);
        totalAmigos = amigos.length;
        actualizarLista();
    }

    document.getElementById('amigo').value = '';
}

function actualizarLista() {
    lista.innerHTML = '';
  
    for (i = 0; i < totalAmigos; i++) {
        let elemento = document.createElement('li');
        elemento.innerHTML = amigos[i];
        lista.appendChild(elemento);
    }
}

function sortearAmigo() {
    let numRandom = Math.floor(Math.random() * totalAmigos);
    let amigoSorteado = amigos[numRandom];

    if (amigos.length != sorteados.length) {
        if (amigos.length < 2) {
            alert('Inserta al menos dos nombres.');
        } else {
            if (sorteados.includes(amigoSorteado)) {
                sortearAmigo()
            } else {
                document.getElementById('resultado').innerHTML = amigoSorteado;
                sorteados.push(amigoSorteado);
            }
        }
    } else {
        alert('Ya se han sorteado todos los nombres.');
        condicionesIniciales();
    }
}

function condicionesIniciales() {
    amigos = [];
    sorteados = [];
    lista.innerHTML = '';    
    document.getElementById('resultado').innerHTML = '';
}