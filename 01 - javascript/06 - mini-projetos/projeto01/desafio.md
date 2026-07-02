# 🚀 Desafio JavaScript: O Simulador de Leilão Assíncrono

## 📝 Contexto Geral
Você foi contratado para desenvolver o motor lógico de um sistema de leilão via linha de comando rodando em Node.js. O sistema precisa processar lances, validar dados com regras estritas de tipos, aplicar taxas ocultas via closures e gerenciar a ordem de exibição das mensagens utilizando o conhecimento do Event Loop.

---

## 🛠️ Requisitos Técnicos Aplicados
Para resolver este desafio, você deve utilizar **apenas** os conceitos abaixo (itens já validados nos seus estudos):
1. **Sintaxe Moderna**: Uso correto de `let` e `const` evitando `var`.
2. **Tipos e Coerção / Truthy e Falsy**: Validação estrita de lances e remoção de valores inválidos.
3. **Hoisting**: Organização do código demonstrando como o JavaScript move as declarações.
4. **Funções**: Mistura intencional de funções tradicionais e *arrow functions* dependendo do contexto.
5. **Parâmetros Default e Rest**: Criação de funções flexíveis para múltiplos lances.
6. **Escopo, Closure e Lexical Scope**: Criação de um encapsulador de taxas que lembra do valor inicial.
7. **Arrays e Métodos Principais**: Manipulação exaustiva de listas (`filter`, `map`, `reduce`).
8. **Event Loop**: Uso de `setTimeout` e `setImmediate` para simular o encerramento do leilão na ordem correta do Node.js.

*Nota: Não utilize Objetos complexos, Destructuring, Promises ou Async/Await, pois estes tópicos ainda não foram cobertos no seu cronograma.*

---

## 📋 Enunciado do Desafio

Crie um arquivo único chamado `leilao.js` que execute as seguintes etapas consecutivas ao ser rodado com o comando `node leilao.js`:

### Passo 1: O Verificador de Lances (Tipos, Coerção e Hoisting)
*   Crie uma função chamada `validarLance`.
*   Devido ao efeito do **Hoisting**, a função `validarLance` deve ser chamada na linha 5 do seu código, mas a sua definição (corpo da função) deve ser escrita no final do arquivo (utilizando uma função tradicional).
*   A função deve receber um valor. Se o valor for *falsy*, string vazia, ou coagir para um número menor ou igual a zero, ela deve retornar `false`. Caso contrário, retorna o valor convertido estritamente para o tipo `Number`.

### Passo 2: O Histórico de Lances (Arrays, Rest e Default)
*   Crie uma *arrow function* chamada `processarNovosLances`.
*   Ela deve aceitar um parâmetro obrigatório (o valor inicial do produto, com **parâmetro default** de `100`) e usar o operador **Rest** para receber uma lista indefinida de novos lances numéricos.
*   A função deve:
    1. Unir o valor inicial e os novos lances em um único Array.
    2. Filtrar o array utilizando o método `.filter()` integrado à sua função `validarLance` para remover lances inválidos.

### Passo 3: A Taxa Oculta do Leiloeiro (Closure e Escopo)
*   Crie uma função chamada `criarGerenciadorTaxa`.
*   Esta função recebe uma taxa percentual fixa (ex: `0.05` para 5%) e deve **retornar uma nova função**.
*   A função retornada (a closure) deve receber um valor de lance e retornar o valor do lance acrescido da taxa calculada. O valor da taxa original não pode ser acessível diretamente de fora.

### Passo 4: O Relatório Final (Métodos de Array)
*   Com o array de lances válidos gerado no Passo 2, utilize o método `.map()` junto com a sua *closure* do Passo 3 para gerar um novo array chamado `lancesComTaxa`.
*   Utilize o método `.reduce()` para somar o valor total de todos os lances com taxa e calcular a média aritmética deles.

### Passo 5: O Encerramento do Leilão (Event Loop no Node.js)
Para simular o comportamento assíncrono do Node.js sem usar Promises, configure três mensagens de encerramento utilizando as regras do **Event Loop**:
1. Uma mensagem síncrona comum: `"--- Processamento do Leilão Iniciado ---"`.
2. Um `setTimeout` com tempo `0` que exibe: `"➔ [Timer] Computando estatísticas finais..."`.
3. Um `setImmediate` (específico do Node.js) que exibe: `"➔ [Check Phase] Leilão encerrado com sucesso!"`.

Analise o comportamento de saída no console e garanta que você entende o porquê da ordem de exibição das mensagens das fases do Event Loop.

---

## 🎯 Exemplo de Saída Esperada no Console

Se você iniciar o leilão com valor base de `100` e enviar os lances `200`, `0`, `""`, `350` e uma taxa de `10%` (`0.10`), a execução deve gerar algo similar a:

```text
--- Processamento do Leilão Iniciado ---
Lances válidos identificados: [ 100, 200, 350 ]
Lances finais calculados com taxa: [ 110, 220, 385 ]
Soma total dos lances: 715
Média dos lances: 238.33
➔ [Timer] Computando estatísticas finais...
➔ [Check Phase] Leilão encerrado com sucesso!
```

---

## 🧪 Critérios de Avaliação
*   **Ausência de erros de escopo:** Não utilizar `var` em nenhum momento.
*   **Ordem do Event Loop:** As três mensagens finais devem aparecer na ordem correta determinada pelas fases do Event Loop do Node.js.
*   **Uso correto de Closures:** A taxa do leiloeiro deve estar perfeitamente encapsulada e protegida por escopo lexical.
*   **Modularidade funcional:** Uso correto de funções tradicionais onde o Hoisting é necessário e *arrow functions* nos métodos de array.
