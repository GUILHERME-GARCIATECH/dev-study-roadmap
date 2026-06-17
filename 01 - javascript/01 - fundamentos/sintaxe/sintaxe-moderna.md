# 📑 Guia de Referência: Sintaxe Moderna

> Diretrizes para a modernização de código, focando na substituição de estruturas legadas por padrões contemporâneos mais limpos, legíveis e performáticos.

---

## 🟢 Declaração de Variáveis e Escopo
* **Substituir**: Uso de escopos abrangentes ou globais que permitem reatribuição acidental e hoisting imprevisível.
* **Adotar**: 
  * Escopo de bloco estrito para variáveis que mudam de valor.
  * Declarações imutáveis por padrão para todas as referências que não precisam ser reatribuídas.

## 🟢 Manipulação de Coleções e Dados
* **Substituir**: Loops tradicionais manuais (`for`, `while`) para filtragem ou transformação de coleções.
* **Adotar**: 
  * Métodos funcionais nativos integrados diretamente nos tipos de dados (`.map()`, `.filter()`, `.reduce()`).
  * Processamento declarativo em vez de imperativo.

## 🟢 Estruturação e Desestruturação (Destructuring)
* **Substituir**: Acesso repetitivo a propriedades de objetos ou índices de arrays linha por linha.
* **Adotar**: 
  * Extração direta de variáveis a partir de objetos e arrays em uma única linha.
  * Operadores de espalhamento (Spread) para clonar, mesclar ou passar dados de forma imutável.

## 🟢 Formatação de Texto e Strings
* **Substituir**: Concatenação manual de strings utilizando operadores matemáticos de soma (`+`).
* **Adotar**: 
  * Interpolação de texto via Template Literals com suporte nativo a quebras de linha e injeção direta de expressões.

## 🟢 Funções e Escopo de Contexto
* **Substituir**: Declarações longas de funções que alteram o escopo léxico do contexto original.
* **Adotar**: 
  * Sintaxes enxutas de funções anônimas (Arrow Functions) com retorno implícito para operações curtas.
