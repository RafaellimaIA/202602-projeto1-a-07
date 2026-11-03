const telas = [
  document.getElementById("tela-fatura"),
  document.getElementById("tela-termos"),
  document.getElementById("tela-sucesso")
];

let telaAtual = 0;

const contador = document.getElementById("contador");
const progresso = document.getElementById("progresso");
const voltar = document.getElementById("voltar");

function mostrarTela(numero) {
  telaAtual = numero;

  telas.forEach((tela, indice) => {
    tela.classList.toggle("active", indice === numero);
  });

  contador.textContent = numero === 0 ? "2/3" :
                         numero === 1 ? "3/3" : "";

  progresso.style.width = numero === 0 ? "66.66%" : "100%";

  voltar.style.visibility = numero === 2 ? "hidden" : "visible";

  document.getElementById("chat-panel").hidden = true;
}

voltar.addEventListener("click", () => {
  if (telaAtual > 0 && telaAtual < 2) {
    mostrarTela(telaAtual - 1);
  }
});

// TELA 1 - ENVIO DA FATURA

const arquivo = document.getElementById("arquivo");
const arquivoTexto = document.getElementById("arquivo-texto");
const erroFatura = document.getElementById("erro-fatura");

arquivo.addEventListener("change", () => {
  const selecionado = arquivo.files[0];

  if (!selecionado) return;

  const formatos = [
    "application/pdf",
    "image/png",
    "image/jpeg"
  ];

  if (!formatos.includes(selecionado.type)) {
    erroFatura.textContent = "Selecione um PDF, PNG ou JPG.";
    arquivo.value = "";
    arquivoTexto.textContent = "Clique para enviar sua conta de luz";
    return;
  }

  if (selecionado.size > 10 * 1024 * 1024) {
    erroFatura.textContent = "O arquivo deve ter até 10 MB.";
    arquivo.value = "";
    arquivoTexto.textContent = "Clique para enviar sua conta de luz";
    return;
  }

  erroFatura.textContent = "";
  arquivoTexto.textContent = selecionado.name;
});

document.getElementById("proximo").addEventListener("click", () => {
  if (!arquivo.files.length) {
    erroFatura.textContent = "Envie sua conta de luz para continuar.";
    return;
  }

  mostrarTela(1);
});

// TELA 2 - TERMOS

const aceite = document.getElementById("aceite");
const erroTermos = document.getElementById("erro-termos");

document.getElementById("contratar").addEventListener("click", () => {
  if (!aceite.checked) {
    erroTermos.textContent = "Você precisa aceitar os termos.";
    return;
  }

  erroTermos.textContent = "";
  mostrarTela(2);
});

// Modal demonstrativo dos termos
const modal = document.getElementById("modal-termos");

const termos = {
  privacidade: {
    titulo: "Política de privacidade",
    texto: "Espaço reservado para a política de privacidade oficial da Bulbe."
  },
  adesao: {
    titulo: "Termo de adesão",
    texto: "Espaço reservado para o termo de adesão oficial da Bulbe."
  },
  uso: {
    titulo: "Termos gerais de uso",
    texto: "Espaço reservado para os termos gerais de uso oficiais da Bulbe."
  }
};

document.querySelectorAll("[data-term]").forEach(botao => {
  botao.addEventListener("click", () => {
    const termo = termos[botao.dataset.term];

    document.getElementById("modal-titulo").textContent = termo.titulo;
    document.getElementById("modal-texto").textContent = termo.texto;

    modal.showModal();
  });
});

document.getElementById("fechar-modal").addEventListener("click", () => {
  modal.close();
});

// TELA 3 - ASSISTENTE VIRTUAL

const chat = document.getElementById("chat-panel");
const mensagens = document.getElementById("mensagens");

document.getElementById("abrir-chat").addEventListener("click", () => {
  chat.hidden = false;
});

document.getElementById("fechar-chat").addEventListener("click", () => {
  chat.hidden = true;
});

function adicionarMensagem(texto, classe) {
  const mensagem = document.createElement("p");
  mensagem.className = classe;
  mensagem.textContent = texto;
  mensagens.appendChild(mensagem);
  mensagens.scrollTop = mensagens.scrollHeight;
}

function responder(pergunta) {
  adicionarMensagem(pergunta, "user-message");

  let resposta;

  if (/desconto|quando/i.test(pergunta)) {
    resposta = "A ativação pode levar até 90 dias, conforme as informações apresentadas na adesão.";
  } else if (/status|acompanhar|próximo passo|contratação/i.test(pergunta)) {
    resposta = "Você pode acompanhar as etapas da sua adesão na área de acompanhamento.";
  } else {
    resposta = "Olá! Posso ajudar com dúvidas sobre sua adesão e o início dos descontos.";
  }

  adicionarMensagem(resposta, "bot-message");
}

document.querySelectorAll("[data-question]").forEach(botao => {
  botao.addEventListener("click", () => {
    responder(botao.dataset.question);
  });
});

document.getElementById("chat-form").addEventListener("submit", evento => {
  evento.preventDefault();

  const campo = document.getElementById("chat-input");
  const texto = campo.value.trim();

  if (!texto) return;

  responder(texto);
  campo.value = "";
});

// ACOMPANHAMENTO DA ADESÃO
document.getElementById("acompanhar").addEventListener("click", () => {
  alert("Área de acompanhamento da adesão: próxima etapa do protótipo.");
});

mostrarTela(0);