// Parâmetros Default 
// (Valores Padrão)Permitem inicializar parâmetros com valores padrão caso nenhum valor ou o valor undefined seja passado para a função.

// Definição do valor padrão usando o operador '='
function saudar(nome = 'Visitante', mensagem = 'Bem-vindo') {
  return `${nome}, ${mensagem}!`;
}

console.log(saudar());                  // "Visitante, Bem-vindo!" (Usa ambos os padrões)
console.log(saudar('Carlos'));          // "Carlos, Bem-vindo!" (Usa o padrão da mensagem)
console.log(saudar('Ana', 'Bom dia'));  // "Ana, Bom dia!" (Ignora os padrões)
console.log(saudar(undefined, 'Oi'));   // "Visitante, Oi!" (undefined dispara o padrão)

// Regras importantes:Valores dinâmicos: 
// O valor padrão pode ser o resultado de uma expressão ou até de outra função.
// Ordem: Você pode usar parâmetros anteriores para definir o padrão dos próximos (ex: function calcular(a, b = a * 2)).
// Parâmetros Rest (Rest Parameters)Representam um número indefinido de argumentos como um array, utilizando a sintaxe de três pontos (...) antes do nome do parâmetro.
// Transforma os argumentos passados em um array chamado 'numeros'

function somarTudo(...numeros) {
  return numeros.reduce((total, atual) => total + atual, 0);
}

console.log(somarTudo(1, 2));       // 3
console.log(somarTudo(1, 2, 3, 4)); // 10
console.log(somarTudo());           // 0 (retorna um array vazio se não houver argumentos)

// Regras importantes:Último da fila: 
// O parâmetro rest deve ser obrigatoriamente o último parâmetro na definição da função.
// Apenas um: Uma função só pode ter um único parâmetro rest.
// Uso correto: misturando parâmetros fixos com rest

function cadastrarAluno(nome, idade, ...notas) {
  console.log(`Aluno: ${nome}, Idade: ${idade}`);
  console.log(`Notas recebidas:`, notas); // 'notas' será um array
}

cadastrarAluno('Lucas', 16, 8.5, 9.0, 7.5);
