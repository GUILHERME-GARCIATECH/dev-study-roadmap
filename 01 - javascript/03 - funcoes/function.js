// 1. O que é uma função 
// Uma função é um bloco de código que só executa quando solicitado.
function digaMeuNome() {
console.log("Guilherme");
}
// Para executar a função:
digaMeuNome();

// 2. Função do tipo Void
// É uma função que não possui a palavra-chave 'return'.
// Ela executa uma ação, mas não devolve um valor para uso posterior.

// 3. Funções com Parâmetros
// Permite enviar informações para dentro da função, tornando-a reutilizável.
function soma(numero1, numero2) {
let resultado = numero1 + numero2;
console.log(resultado);
}
soma(2, 6); // Retorna 8

// 4. Função com Return
// O 'return' devolve um valor para quem chamou a função,
// permitindo que o resultado seja guardado em variáveis.
function somarComRetorno(a, b) {
return a + b;
}
let resultadoDaSoma = somarComRetorno(30, 40); // resultadoDaSoma vale 70
console.log(resultadoDaSoma);

// Exemplo prático de lógica com if/else e return:
function verificaDivida(receita, gastos) {
if (receita > gastos) {
return "Está no azul";
} else {
return "Está no vermelho";
}
}
