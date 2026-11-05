// Tela de acesso Bulbe: liga os botões às outras telas do projeto.
(function () {
    // >>> Ajuste aqui os nomes das páginas das outras telas (arquivos dentro de pages/) <<<
    var ROTAS = {
        entrar: null,                    // Login ainda não implementado
        primeiroAcesso: 'US3T1.html',    // Cadastro (US3)
        economizar: 'carrossel.html'     // "Quero economizar" (quem ainda não é cliente)
    };

    var botoes = {
        entrar: document.querySelector('.acesso__botao--primario'),
        primeiroAcesso: document.querySelector('.acesso__botao--secundario'),
        economizar: document.querySelector('.acesso__link')
    };

    // Aviso simples quando a tela de destino ainda não existe (útil enquanto o squad termina as páginas)
    function avisar(msg) {
        var aviso = document.createElement('div');
        aviso.setAttribute('role', 'status');
        aviso.textContent = msg;
        aviso.style.cssText = 'position:fixed;left:50%;bottom:24px;transform:translateX(-50%);' +
            'max-width:340px;padding:12px 16px;border-radius:8px;background:#10069f;color:#fff;' +
            'font:13px/16px Inter,system-ui,sans-serif;text-align:center;box-shadow:0 6px 18px rgba(0,0,0,.2);z-index:10';
        document.body.appendChild(aviso);
        setTimeout(function () { aviso.remove(); }, 2600);
    }

    function ligar(chave) {
        var el = botoes[chave];
        if (!el) return;
        if (ROTAS[chave]) el.setAttribute('href', ROTAS[chave]);
        else el.removeAttribute('href');
        el.addEventListener('click', function (e) {
            e.preventDefault();
            var destino = ROTAS[chave];
            if (!destino) {
                avisar('A tela de acesso de clientes ainda não está disponível.');
                return;
            }
            // Confere se a página existe antes de navegar
            fetch(destino, { method: 'HEAD' })
                .then(function (r) {
                    if (r.ok) window.location.href = destino;
                    else avisar('Esta tela ainda não está disponível.');
                })
                .catch(function () { window.location.href = destino; }); // ex.: abrindo o arquivo direto, sem servidor
        });
    }

    Object.keys(ROTAS).forEach(ligar);
})();
