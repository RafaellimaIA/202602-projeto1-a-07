// Carrossel de onboarding Bulbe
(function () {
    var faixa = document.getElementById('faixa');
    var slides = faixa.querySelectorAll('.carrossel__slide');
    var pontos = document.querySelectorAll('.carrossel__ponto');
    var botao = document.getElementById('btn-continuar');
    var dica = document.getElementById('dica');
    var pular = document.getElementById('btn-pular');
    var voltar = document.getElementById('btn-voltar');
    var total = slides.length;
    var atual = 0;

    var PAGINA_ANTERIOR = 'acesso.html';   // seta voltar no 1º slide
    var PAGINA_CADASTRO = 'US3T1.html'; // Cadastro (US3)

    function irPara(i) {
        i = Math.max(0, Math.min(total - 1, i));
        faixa.scrollTo({ left: i * faixa.clientWidth, behavior: 'smooth' });
        atualizar(i);
    }

    function atualizar(i) {
        atual = i;
        pontos.forEach(function (p, n) {
            p.classList.toggle('is-ativo', n === i);
            p.setAttribute('aria-selected', n === i ? 'true' : 'false');
        });
        var ultimo = i === total - 1;
        botao.textContent = ultimo ? 'Criar minha conta' : 'Continuar';
        botao.setAttribute('href', ultimo ? PAGINA_CADASTRO : '#');
        dica.hidden = ultimo;
        pular.hidden = ultimo;
    }

    // Botão principal: avança; no último slide segue o link do cadastro
    botao.addEventListener('click', function (e) {
        if (atual < total - 1) { e.preventDefault(); irPara(atual + 1); }
    });
    // Seta: volta um slide; no primeiro, vai para a tela anterior
    voltar.addEventListener('click', function (e) {
        if (atual > 0) { e.preventDefault(); irPara(atual - 1); }
        else voltar.setAttribute('href', PAGINA_ANTERIOR);
    });
    // Pular: vai direto ao último slide
    pular.addEventListener('click', function () { irPara(total - 1); });
    // Pontos clicáveis
    pontos.forEach(function (p, n) { p.addEventListener('click', function () { irPara(n); }); });
    // Arrastar/deslizar: descobre o slide atual pela rolagem
    var timer;
    faixa.addEventListener('scroll', function () {
        clearTimeout(timer);
        timer = setTimeout(function () {
            var i = Math.round(faixa.scrollLeft / faixa.clientWidth);
            if (i !== atual) atualizar(i);
        }, 60);
    });
    // Teclado
    document.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowRight') irPara(atual + 1);
        if (e.key === 'ArrowLeft') irPara(atual - 1);
    });
    window.addEventListener('resize', function () { faixa.scrollTo({ left: atual * faixa.clientWidth }); });

    atualizar(0);
})();
