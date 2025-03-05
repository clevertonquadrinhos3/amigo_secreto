//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let lista_de_amigos =[];

function adicionarAmigo() {
    let nome = document.getElementById('amigo').value;
    let listaAmigosTela = document.getElementById('listaAmigos');
    
    if(nome == ""){
        alert('Adicione o nome de um amigo para sortear.');
        return;
        
    }

    lista_de_amigos.push(nome);

    let li = document.createElement('li');
    li.textContent = nome;
    listaAmigosTela.appendChild(li);
    document.getElementById('amigo').value = '';     
}

function sortearAmigo() {
    
    // Seleciona o elemento para exibir o resultado
    let resultado = document.getElementById('resultado'); 
    
    // Verifica se existe ao menos uma amigo na lista. Se não houver alerta ao usuário e retorna
    if (lista_de_amigos.length == 0) {
        alert('Adicione pelo menos um amigo para sortear.');
        return;
    }
    
    // Sorteia o indice da lista para obter o amigo
    let indiceSorteado = Math.floor(Math.random() * lista_de_amigos.length);
    let amigoSorteado = lista_de_amigos[indiceSorteado];

    // Atualiza o conteúdo do elemento com o amigo sorteado
    resultado.innerHTML = `<li>Amigo sorteado: ${amigoSorteado}</li>`; 
}

