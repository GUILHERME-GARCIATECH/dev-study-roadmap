/**
 * 📑 GUIA DEFINITIVO: VALORES FALSY E TRUTHY EM JAVASCRIPT
 * 
 * Em contextos booleanos (como condicionais `if` ou loops), o JavaScript 
 * força a conversão de qualquer tipo de dado para true ou false.
 * Esse comportamento é conhecido como Type Coercion (Coerção de Tipo).
 */

// ============================================================================
// ❌ 1. TODOS OS VALORES FALSY (Retornam sempre false)
// ============================================================================
// Existem exatamente estes 9 valores na especificação do JavaScript atual:

let f1 = false;             // O próprio booleano falso
let f2 = null;              // Ausência intencional de valor
let f3 = undefined;         // Variável declarada, mas não inicializada
let f4 = 0;                 // O número zero
let f5 = -0;                // Zero negativo (usado em algoritmos matemáticos específicos)
let f6 = 0n;                // Zero no formato BigInt (inteiros de precisão arbitrária)
let f7 = '';                // String vazia (aspas simples)
let f8 = "";                // String vazia (aspas duplas)
let f9 = ``;                // String vazia (template literal / crase)
let f10 = NaN;              // Not a Number (resultado de operações matemáticas inválidas)

// ⚠️ O caso especial do ecossistema Web:
let f11 = document.all;     // Único objeto nativo falsy. Mantido assim apenas por
// compatibilidade com códigos muito antigos do Internet Explorer.


// ============================================================================
// ⚠️ 2. VALORES TRUTHY QUE COSTUMAM CONFUNDIR (Retornam sempre true)
// ============================================================================
// Qualquer valor que NÃO esteja na lista de falsy acima é considerado truthy.
// Abaixo estão as pegadinhas mais comuns em entrevistas e no dia a dia:

// 📦 Objetos e Arrays (Mesmo vazios!)
let t1 = {};                // Objeto vazio é TRUE (em JS, objetos são referências)
let t2 = [];                // Array vazio é TRUE
let t3 = new Date();        // Instâncias de objetos são TRUE
let t4 = function () { };     // Funções normais e Arrow Functions são TRUE

// 🔢 Números (Qualquer número diferente de zero)
let t5 = -1;                // Números negativos são TRUE
let t6 = -42;               // Outro exemplo negativo
let t7 = Infinity;          // Infinito positivo é TRUE
let t8 = -Infinity;         // Infinito negativo é TRUE

// 🔤 Strings com conteúdo (Mesmo que o conteúdo pareça falso)
let t9 = ' ';               // String com apenas um espaço em branco é TRUE
let t10 = '0';              // String contendo o caractere zero é TRUE
let t11 = 'false';          // String contendo o texto "false" é TRUE


// ============================================================================
// 🛠️ 3. COMO TESTAR SE UM VALOR É TRUTHY OU FALSY?
// ============================================================================

// Técnica de Negação Dupla (!!):
// A primeira '!' inverte o valor para booleano. A segunda '!' inverte de volta.
console.log(!!0);           // Retorna false
console.log(!![]);          // Retorna true
console.log(!!'false');     // Retorna true

// Teste Prático em Condicional:
if (t2) {
    // Como t2 é um array vazio [], este bloco VAI rodar!
}
