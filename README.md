# Bulbe Energia — MVP do Squad 07

Projeto acadêmico de Projeto em Ciência de Dados e IA do IBMEC, desenvolvido para a Bulbe Energia. O MVP demonstra a jornada de adesão de um novo cliente e as principais dúvidas durante o processo.

**Turma A · Squad 07 · 2º semestre de 2026**

Equipe: Rafael Lima, Rafaela Rezek, Matheus Braga, Fernanda Venturato e Isabela Pires.

## Executar localmente

O projeto é estático e não precisa de etapa de build. Para testar a navegação, sirva a pasta raiz por HTTP:

1. Abra a pasta no VS Code e inicie o Live Server em `index.html`; ou
2. Execute `python -m http.server 8000` na raiz do repositório e acesse `http://localhost:8000`.

O `index.html` redireciona diretamente para `pages/acesso.html`. Como os caminhos são relativos ao repositório, as telas também funcionam quando publicadas em um subcaminho do GitHub Pages.

## Jornada do MVP

| Tela | Arquivo | O que demonstra |
| --- | --- | --- |
| Acesso | `pages/acesso.html` | Entrada, cadastro inicial, início da adesão e ajuda. O botão **Entrar** informa que o login de clientes ainda não está implementado. |
| Conheça a Bulbe | `pages/carrossel.html` | Carrossel com informações sobre a solução |
| Cadastro | `pages/US3T1.html` | Dados pessoais, titularidade e opção de salvar neste navegador |
| Contratação | `pages/US4.html` | Seleção demonstrativa de conta, aceite dos termos e confirmação |
| Acompanhamento | `pages/US5.html` | Etapas da adesão e explicações expansíveis |
| Assistente | `pages/US1.html` | Perguntas frequentes e respostas demonstrativas |

Fluxo principal: acesso → carrossel → cadastro → contratação → acompanhamento. A opção **Primeiro acesso** também permite abrir diretamente o cadastro. O assistente pode ser aberto pelos links de ajuda nas telas.

## Apresentação acadêmica

A apresentação completa do projeto, com problema, persona, histórias de usuário, solução e demonstração das telas, está em [`apresentacao/index.html`](apresentacao/index.html).

## Tecnologias e escopo

- HTML, CSS e JavaScript sem framework.
- Os dados em `data/` são exemplos JSON e não estão conectados ao fluxo principal do MVP.
- O cadastro pode ser salvo localmente no navegador quando essa opção é marcada.
- O upload de conta, a contratação e as respostas do assistente são demonstrações de interface; não há envio para serviços reais nem integração de backend.
- Todo dado de cliente usado no repositório é fictício.

## Estrutura

```text
index.html                 Entrada do produto, redireciona para acesso
apresentacao/index.html    Apresentação acadêmica completa
pages/                     Telas do MVP
assets/css/                Estilos compartilhados
assets/js/                 Interações das telas
assets/img/                Logo e imagens
data/                      Exemplos JSON não conectados ao MVP
docs/                      Histórias, jornada e documentação acadêmica
.github/                   Modelos de issues e pull requests
```

O workflow `.github/workflows/pages.yml` publica `index.html`, `pages/`, `assets/` e `apresentacao/` no GitHub Pages quando há push em `main`. Em **Settings → Pages**, selecione **GitHub Actions** como fonte de publicação. A publicação também pode ser iniciada manualmente pela aba **Actions**.
