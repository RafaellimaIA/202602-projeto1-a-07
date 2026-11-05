
const botao = document.getElementById("btn-acompanhar");
const voltar = document.getElementById("btn-voltar");

const tela1 = document.getElementById("tela1");
const tela2 = document.getElementById("tela2");

const etapa = document.getElementById("numero-etapa");

// Mostrar a tela escolhida
function mostrarTela(numero) {
    tela1.hidden = numero !== 2;
    tela2.hidden = numero !== 3;

    etapa.textContent = numero + "/3";

    window.scrollTo(0, 0);
}

// Começar na primeira tela
mostrarTela(2);

// Ir para a segunda tela
botao.addEventListener("click", function() {
    mostrarTela(3);
});

// Voltar para a primeira tela
voltar.addEventListener("click", function() {
    if (!tela2.hidden) {
        mostrarTela(2);
    } else {
        window.location.href = "../index.html";
    }
});

// Abrir e fechar as explicações
const links = document.querySelectorAll(".detalhes");

links.forEach(function(link) {
    link.addEventListener("click", function() {
        const explicacao = link.parentElement.querySelector(".explicacao");

        explicacao.hidden = !explicacao.hidden;

        link.setAttribute(
            "aria-expanded",
            String(!explicacao.hidden)
        );
    });
});
