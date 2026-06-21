/*
Uma arrow function (função de seta) é uma sintaxe curta introduzida no JavaScript ES6 (2015) 
para escrever expressões de função. 
Elas eliminam a necessidade da palavra-chave function e alteram fundamentalmente o comportamento 
do escopo de this
São fundamentalmente anonimas
*/

// Função tradicional
function soma (a, b) {
    return a + b;
}

// Arrow function 
const soma = (a, b) => {
    return a + b;
}

// Eu posso simplificar ainda mais removendo as {} e o return

const soma = (a, b) => a + b;

// Funções sem parametros

function digaOi(){
    return "Oi";
}

// Arrow function sem parametro (precisa dos parenteses)
const digaOi = () => "oi";

// Arrow function com um parametro (não precisa de parenteses)
const helloWorld = world => "ola " + world;

/*Muito utilizada para callbacks*/

// Função tradicional
const numeros = [1, 2, 3, 4, 5];

const quadradas = numeros.map(function(numero) {
    return numero * numero;
})

// Arrow function
const quadradasx = numeros.map(numero => numero * numero);