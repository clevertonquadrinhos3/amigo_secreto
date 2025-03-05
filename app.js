//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let lista_de_amigos =[];

function adicionarAmigo() {
    let nome = document.getElementById('amigo').value;
    let listaAmigos = document.getElementById('listaAmigos');

    lista_de_amigos.push(nome);

    let li = document.createElement('li');
    li.textContent = nome;
    listaAmigos.appendChild(li);
    document.getElementById('amigo').value = ''; 
    alert( lista_de_amigos)
    
}

