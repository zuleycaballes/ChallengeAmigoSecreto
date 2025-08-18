let amigos = []; 
let totalAmigos = amigos.length;
let lista = document.getElementById('listaAmigos');
let sorteados = [];

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
    lista.innerHTML = '';
  
    for (i = 0; i <= totalAmigos; i++) {
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