# Bulbe Primeiro Ciclo

> Projeto em Ciência de Dados I · Ibmec BH · 2º semestre de 2026  
> Cliente: **Bulbe Energia** · Turma **A** · Squad **07**

**Proposta inicial:** uma experiência web para acompanhar o cliente novo desde a adesão até o pagamento da primeira fatura, deixando claro o andamento da conexão, explicando a primeira fatura e facilitando o pagamento.

> **Observação:** esta é uma proposta inicial do Squad 07 para a Etapa 2 e pode ser refinada após as próximas aulas e reviews.

---

## 1. Problema

O caso da Bulbe mostra que a principal concentração de inadimplência está no primeiro ciclo do cliente. A apresentação informa **32,4% de inadimplência da 1ª fatura**, contra **1,6% na carteira de clientes PF com mais de 4 meses**. Entre as dores apresentadas estão o silêncio durante o onboarding, falhas de entrega de mensagens e dificuldade para entender a primeira fatura.

- **Dor escolhida:** experiência do cliente entre a adesão e o pagamento da 1ª fatura.
- **Evidências:** cerca de 20% das mensagens de WhatsApp falham; clientes chegaram a ficar 20 dias sem comunicação; a fatura antiga tinha pouca transparência.
- **Indicador que a solução pretende mover:** pagamento da 1ª fatura, com impacto potencial sobre churn do 1º mês.

## 2. Persona e jornada

- **Persona de referência:** Marina, 38 anos, cliente PF no primeiro mês, usa principalmente WhatsApp e busca economizar na conta de energia sem complicação.
- **Mapa de jornada:** [docs/jornada.md](docs/jornada.md)

## 3. Solução

A proposta é uma experiência de primeiro ciclo com três frentes: acompanhamento do status pós-adesão, explicação da primeira fatura e facilitação do pagamento com PIX e lembrete de vencimento.

| Tela | O que faz | História relacionada |
| --- | --- | --- |
| Acompanhamento | Mostra o status da conexão e orienta os próximos passos | A definir na Aula 20 |
| Minha 1ª fatura | Explica os principais campos e valores da fatura | A definir na Aula 20 |
| Pagar fatura | Destaca PIX e informa o vencimento | A definir na Aula 20 |

- **Histórias de usuário:** [docs/historias.md](docs/historias.md)
- **Wireframes:** [docs/wireframes/](docs/wireframes/)

## 4. Tecnologias

- HTML, CSS e JavaScript puro (vanilla)
- Dados fictícios em JSON, lidos com `fetch` (pasta [`data/`](data/))
- Git e GitHub (Issues, Projects e Pull Requests)

## 5. Como executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/[usuario]/202602-projeto1-a-07.git
   ```
2. Abra a pasta no VS Code.
3. Instale a extensão **Live Server**.
4. Clique com o botão direito em `index.html` e escolha **Open with Live Server**.

> Abrir o `index.html` diretamente com duplo clique não funciona corretamente porque o `fetch` dos arquivos JSON exige um servidor.

## 6. Estrutura do repositório

```
├── index.html
├── pages/
├── assets/
│   ├── css/style.css
│   ├── js/main.js
│   ├── js/api.js
│   └── img/
├── data/
├── docs/
└── .github/
```

## 7. Quadro do projeto

- **GitHub Projects:** [colar aqui o link do quadro]

## 8. Equipe

| Integrante | GitHub | Papel principal |
| --- | --- | --- |
| Rafael Lima | [@usuario] | A definir pelo squad |
| Rafaela Rezek | [@usuario] | A definir pelo squad |
| Matheus Braga | [@usuario] | A definir pelo squad |
| Fernanda Venturato | [@usuario] | A definir pelo squad |
| Isabela Pires | [@usuario] | A definir pelo squad |

## 9. Entregas

| Marco | Aula | Status |
| --- | --- | --- |
| Mapa de jornada | 19 | Em preparação |
| Histórias de usuário | 20 | Pendente |
| Wireframes | 21–23 | Pendente |
| Sprint Review I | 24 | Pendente |
| Implementação | 25–28 | Pendente |
| Sprint Review II | 29 | Pendente |
| Versão final | 30 | Pendente |

---

> Todos os dados deste repositório são fictícios. Nenhum dado real de cliente da Bulbe Energia é utilizado.
