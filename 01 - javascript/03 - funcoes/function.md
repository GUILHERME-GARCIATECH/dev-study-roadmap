# Guia Completo de Funções em JavaScript

Funções são blocos de código projetados para executar uma tarefa específica. Elas funcionam como "fábricas": recebem dados, processam e devolvem um resultado.

---

## 1. Estrutura de uma Função

Uma função é dividida em três partes principais: **Declaração**, **Parâmetros** (entrada) e **Retorno** (saída).

### Sintaxe Base
```javascript
function nomeDaFuncao(parametro1, parametro2) {
    // Código a ser executado (Escopo da função)
    return resultado; // Saída da função
}
```

### Exemplo Prático 

```javascript
function calcularSoma(a, b) {
    const soma = a + b;
    return soma;
}

// Chamada correta: 5 vai para o "a", 6 vai para o "b"
const resultado = calcularSoma(5, 6); 
console.log(resultado); // Exibe: 11
```

---

## 2. Termos Essenciais: Parâmetros vs. Argumentos

* **Parâmetros:** São as variáveis listadas na definição da função (as "gavetas" vazias).
  * Exemplo: `a` e `b` em `function calcularSoma(a, b)`.
* **Argumentos:** São os valores reais que você passa para a função quando a executa.
  * Exemplo: `5` e `6` em `calcularSoma(5, 6)`.

---

## 3. O Papel do `return`

A palavra-chave `return` faz duas coisas:
1. **Para a execução:** Nada do que estiver abaixo do `return` dentro daquela função será executado.
2. **Envia o valor para fora:** Substitui a chamada da função pelo valor calculado.

> **Nota:** Se uma função não tiver a palavra `return`, ela executará todo o código interno e retornará `undefined` por padrão.

---

## 4. Formas de Declarar Funções (Básico ao Intermediário)

### Declaração de Função (Function Declaration)
É a forma tradicional. Sofre **hoisting** (pode ser chamada antes de ser declarada no arquivo).
```javascript
function saudar() {
    return "Olá!";
}
```

### Expressão de Função (Function Expression)
Uma função anônima guardada diretamente dentro de uma variável. **Não** sofre hoisting.
```javascript
const saudar = function() {
    return "Olá!";
};
```

---

## 5. Recursos Avançados (Apenas Citações)

Conceitos avançados de funções em JavaScript para aprofundar seus estudos no futuro:

* **Parâmetros Padrão (Default Parameters)**
* **Escopo Lexical e Closures**
* **Funções de Alta Ordem (High-Order Functions / Callbacks)**
* **Funções Imediatas (IIFE - Immediately Invoked Function Expression)**
* **Funções Assíncronas (Async/Await)**
* **Funções Geradoras (Generators - `function*`)**
