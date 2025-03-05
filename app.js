//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let lista_de_amigos =[];

function adicionarAmigo() {
    let nome = document.getElementById('amigo').value;
    let listaAmigosTela = document.getElementById('listaAmigos');
    let errorMessage = document.getElementById('error-message');
    
    // Exibe alerta se digitar em branco para o nome
    if(nome == ""){
        alert('Adicione o nome de um amigo para sortear.');
        return;
        
    }

        
    // Regex para validar nomes (apenas letras e espaços, não aceita números ou caracteres especiaiss)
    let nomeValido = /^[a-zA-Z\s\u00C0-\u00FF]+$/.test(nome);

    
    // Se não for um nome válido exibe mensagem solicitando um nome válido
    if (!nomeValido) {
        
        errorMessage.style.display = 'block';
        
    // Sendo um nome válido exibe na teal e inclui na lista de amigos para sorteio   
    } else {
        errorMessage.style.display = 'none';
        let li = document.createElement('li');
        li.textContent = nome;
        listaAmigosTela.appendChild(li);        
        lista_de_amigos.push(nome);
    }
    // Independente de ser válido ou não limpa o campo para incluir um novo nome
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

function Reiniciar() {
     
     
     let resultado = document.getElementById('resultado');
     let listaAmigosTela = document.getElementById('listaAmigos');
     
     // Limpa o resultado do sorteio
     resultado.innerHTML = ''; 
     
     // remove da visualização todos os amigos inseridos
     listaAmigosTela.innerHTML = '';
}

