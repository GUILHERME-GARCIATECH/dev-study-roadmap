// ==========================================
// 1. EXEMPLOS DE TIPOS DE DADOS
// ==========================================

// Primitivos
const texto = "JavaScript";          // String
const numero = 2026;                 // Number
const booleano = true;               // Boolean
let naoDefinido;                     // Undefined (sem valor)
const nulo = null;                   // Null (ausência intencional de valor)

// Não Primitivos (Objetos)
const usuario = { nome: "Guilherme", tech: true }; // Object
const listaDeTipos = ["String", "Number", "Boolean"]; // Array (tipo Objeto)

console.log("--- Verificando Tipos originais ---");
console.log(typeof texto);         // "string"
console.log(typeof numero);        // "number"
console.log(typeof usuario);       // "object"


// ==========================================
// 2. EXEMPLOS DE COERÇÃO DE TIPOS
// ==========================================

console.log("\n--- Coerção Implícita (Automática) ---");

// O JS converte o número para string e faz uma concatenação
const coercaoString = "O ano é " + numero; 
console.log(coercaoString);        // "O ano é 2026"
console.log(typeof coercaoString); // "string"

// O JS converte a string para número para fazer a subtração
const subtracaoMaluca = "10" - 2;   
console.log(subtracaoMaluca);      // 8
console.log(typeof subtracaoMaluca); // "number"


console.log("\n--- Coerção Explícita (Forçada pelo desenvolvedor) ---");

const stringNumerica = "456";
// Convertendo estritamente de String para Number
const numeroConvertido = Number(stringNumerica); 

console.log(numeroConvertido + 4); // 460 (Soma matemática real)
console.log(typeof numeroConvertido); // "number"
