// ELEMENTOS PRINCIPAIS

const tela1 = document.getElementById("tela1");
const tela2 = document.getElementById("tela2");

const botaoSim = document.getElementById("botao-sim");
const botaoNao = document.getElementById("botao-nao");

const camposSim = document.getElementById("campos-sim");
const camposNao = document.getElementById("campos-nao");

const avisoInicial = document.getElementById("aviso-inicial");
const opcaoSalvar = document.getElementById("opcao-salvar");

let titularidade = "";

// ALTERNAR ETAPAS

function mostrarEtapa(etapa) {
  tela1.hidden = etapa !== 1;
  tela2.hidden = etapa !== 2;

  document.getElementById("numero-etapa").textContent = etapa + "/3";
  document.getElementById("progresso").style.width = (etapa / 3) * 100 + "%";
}

// VALIDAR DADOS PESSOAIS

document.getElementById("proximo1").addEventListener("click", () => {
  const campos = ["nome", "email", "whatsapp"];

  for (const id of campos) {
    const campo = document.getElementById(id);

    if (!campo.reportValidity()) {
      return;
    }
  }

  mostrarEtapa(2);
});

// BOTÃO VOLTAR

document.getElementById("voltar").addEventListener("click", () => {
  if (!tela2.hidden) {
    mostrarEtapa(1);
  }
});

// SELECIONAR TITULARIDADE

function selecionarTitularidade(opcao) {
  titularidade = opcao;

  botaoSim.classList.toggle("selected", opcao === "sim");
  botaoNao.classList.toggle("selected", opcao === "nao");

  botaoSim.setAttribute("aria-pressed", opcao === "sim");
  botaoNao.setAttribute("aria-pressed", opcao === "nao");

  camposSim.hidden = opcao !== "sim";
  camposNao.hidden = opcao !== "nao";

  avisoInicial.hidden = true;
  opcaoSalvar.hidden = false;
}

botaoSim.addEventListener("click", () => {
  selecionarTitularidade("sim");
});

botaoNao.addEventListener("click", () => {
  selecionarTitularidade("nao");
});

// NÃO SEI O CPF DO TITULAR

document.getElementById("nao-sei-cpf").addEventListener("change", (evento) => {
  const campo = document.getElementById("cpf-titular");

  campo.disabled = evento.target.checked;

  if (evento.target.checked) {
    campo.value = "";
  }
});

// MÁSCARA SIMPLES DE CPF

document.querySelectorAll(".cpf").forEach((campo) => {
  campo.addEventListener("input", () => {
    let cpf = campo.value.replace(/\D/g, "").slice(0, 11);

    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

    campo.value = cpf;
  });
});

// AVANÇAR E SALVAR DADOS

document.getElementById("proximo2").addEventListener("click", () => {
  if (titularidade === "") {
    alert("Selecione Sim ou Não.");
    return;
  }

  const cpfCliente = document.getElementById("cpf-cliente").value;
  const cpfCobranca = document.getElementById("cpf-cobranca").value;
  const cpfTitular = document.getElementById("cpf-titular").value;
  const naoSeiCpf = document.getElementById("nao-sei-cpf").checked;

  if (titularidade === "sim" && cpfCliente.length !== 14) {
    alert("Informe seu CPF completo.");
    return;
  }

  if (titularidade === "nao") {
    if (cpfCobranca.length !== 14) {
      alert("Informe seu CPF completo.");
      return;
    }

    if (!naoSeiCpf && cpfTitular.length !== 14) {
      alert("Informe o CPF do titular ou marque que não sabe.");
      return;
    }
  }

  const salvar = document.getElementById("salvar-dados").checked;

  if (salvar) {
    const dados = {
      nome: document.getElementById("nome").value,
      email: document.getElementById("email").value,
      whatsapp: document.getElementById("whatsapp").value,
      titularidade: titularidade,
      cpfCliente: cpfCliente,
      cpfCobranca: cpfCobranca,
      cpfTitular: cpfTitular,
      naoSeiCpf: naoSeiCpf,
    };

    localStorage.setItem("cadastroBulbe", JSON.stringify(dados));
    alert("Dados salvos neste navegador!");
  } else {
    localStorage.removeItem("cadastroBulbe");
  }

  alert("Dados validados! A etapa 3 ainda não foi implementada.");
});

// RECUPERAR DADOS SALVOS

const dadosSalvos = JSON.parse(localStorage.getItem("cadastroBulbe") || "null");

if (dadosSalvos) {
  document.getElementById("nome").value = dadosSalvos.nome || "";
  document.getElementById("email").value = dadosSalvos.email || "";
  document.getElementById("whatsapp").value = dadosSalvos.whatsapp || "";

  if (
    dadosSalvos.titularidade === "sim" ||
    dadosSalvos.titularidade === "nao"
  ) {
    selecionarTitularidade(dadosSalvos.titularidade);
  }

  document.getElementById("cpf-cliente").value = dadosSalvos.cpfCliente || "";
  document.getElementById("cpf-cobranca").value = dadosSalvos.cpfCobranca || "";
  document.getElementById("cpf-titular").value = dadosSalvos.cpfTitular || "";
  document.getElementById("nao-sei-cpf").checked = !!dadosSalvos.naoSeiCpf;
  document.getElementById("cpf-titular").disabled = !!dadosSalvos.naoSeiCpf;
  document.getElementById("salvar-dados").checked = true;

  mostrarEtapa(2);
}
