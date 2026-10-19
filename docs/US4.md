# Histórias de usuário

> Entregável da aula 20. Cada história nasce de uma oportunidade do mapa de jornada e vira uma Issue com o label `historia`.

| ID | História | Oportunidade de origem | Prioridade | Issue |
| --- | --- | --- | --- | --- |
| HU01 | Como [persona], quero [ação] para [benefício]. | [ ] | [alta/média/baixa] | #[ ] |

## Critérios de aceite

### HU04
- Como Sérgio Carlos Almeida, um engenheiro de obras de 50 anos, responsável pelas contas da casa, com pouca familiaridade com aplicativos e receio de burocracias ou vazamento dos dados da esposa,   Eu quero visualizar um resumo claro e simples ("O que você precisa saber") sobre os prazos de início do desconto, o formato das faturas e a segurança dos dados na tela de aceite dos termos,   Para contratar a Bulbe com segurança no celular, entender que o desconto pode levar até 90 dias para começar e ter comprovantes em mãos para provar para a minha esposa que fiz um bom negócio.
Critérios de aceite:
Critério 1 (Resumo Informativo em Linguagem Simples):
Dado que o Sérgio está na etapa 3/3 da contratação pelo aplicativo, quando a tela for carregada, deve aparecer um card destacado de leitura rápida antes do botão de aceite, explicando em 3 pontos:
O prazo de até 90 dias para a aplicação do desconto na fatura.
Como funciona a cobrança/fatura mensal.
A garantia de proteção dos dados pessoais e do CPF da esposa sob a LGPD.

Critério 2 (Aceite Simplificado):
Dado que o Sérgio leu os pontos de atenção e marcou a opção de aceite, quando ele clicar no botão "Concordar e contratar", o sistema deve concluir a solicitação e exibir uma mensagem clara de "Contratação realizada com sucesso!".

Critério 3 (Confirmação Multi-canal para Validação Familiar):
Dado que a contratação foi concluída, quando o processo for finalizado no aplicativo, o sistema deve enviar automaticamente uma mensagem no WhatsApp do Sérgio e um e-mail formal com o comprovante e os termos resumidos, para que ele possa guardar e mostrar para a esposa.