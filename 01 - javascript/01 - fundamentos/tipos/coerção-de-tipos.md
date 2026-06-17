# Coerção de tipos
> Coerção de tipos é a conversão automática ou manual de um valor de um tipo de dado para outro em JavaScript. Como o JavaScript é uma linguagem dinamicamente tipada, ele tenta ser "legal" e resolver operações entre tipos diferentes em vez de quebrar o código com um erro

Existem duas categorias de coerção: a Implícita (feita automaticamente pela linguagem) e a Explícita (feita manualmente por você).

## 1. Coerção Implícita (Automática)
Acontece nos bastidores quando o JavaScript tenta adivinhar o que você queria fazer ao misturar tipos diferentes.

- Texto ganha de número na soma (+): O operador de adição também serve para juntar textos. Se houver uma String na operação, o número vira texto.
    ~~~javascript
    "5" + 2 // Resultado: "52" (String)
    ~~~

- Outros operadores matemáticos convertem para número: Subtração (-), multiplicação (*) e divisão (/) não funcionam com texto. Então, o JavaScript converte o texto em número.
    ~~~javascript
    "5" - 2 // Resultado: 3 (Number)
    "5" * "2" // Resultado: 10 (Number)
    ~~~

- Conversão para Booleano em condicionais: Dentro de um if, o JavaScript converte temporariamente o valor para verdadeiro ou falso.
    ~~~javascript
    if ("") { } // Texto vazio é avaliado como false (falsy)
    if (42) { } // Qualquer número diferente de 0 é avaliado como true (truthy)
    ~~~

## 2. Coerção Explícita (Manual)
É quando você força a conversão no código usando as funções nativas da linguagem para evitar surpresas ou bugs.

- Para número: Use Number() ou parseInt().
    ~~~javascript
    Number("42") // 42 (Number)
    ~~~

- Para texto: Use String() ou o método .toString().
    ~~~javascript
    String(true) // "true" (String)
    ~~~

- Para booleano: Use Boolean() ou o operador de negação dupla !!.
    ~~~javascript
    Boolean(1) // true (Boolean)
    !!"Texto"  // true (Boolean)
    ~~~
