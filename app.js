//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Lista para armazenar os amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome válido!");
        return;
    }

    // Adiciona o nome à lista
    amigos.push(nome);

    // Atualiza a exibição
    atualizarLista();

    // Limpa o campo de entrada
    input.value = "";
}

// Função para atualizar a lista de amigos na tela
function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // limpa a lista antes de recriar

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Função para sortear um amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo antes de sortear!");
        return;
    }

    const indice = Math.floor(Math.random() * amigos.length);
    const sorteado = amigos[indice];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 O amigo secreto é: <strong>${sorteado}</strong></li>`;
}
