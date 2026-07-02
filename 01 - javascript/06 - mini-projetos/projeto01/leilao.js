// ====== DADOS DE TESTE PARA O SEU ARQUIVO leilao.js ======

const valorBaseInicial = 150; // Parâmetro obrigatório inicial

// Lista de lances com várias pegadinhas de tipo e coerção
const lancesParaTestar = [
  250,         // Número válido (deve passar)
  "400",       // String numérica (deve ser coagida para número 400 e passar)
  0,           // Número zero (falsy - deve ser descartado)
  -20,         // Número negativo (menor que zero - deve ser descartado)
  "",          // String vazia (falsy - deve ser descartada)
  "   ",       // String com espaços (ao converter vira 0, menor que zero - deve ser descartada)
  500.50,      // Número decimal válido (deve passar)
  false,       // Booleano (falsy - deve ser descartado)
  "cem", 
  "580"       // String de texto puro (ao converter vira NaN, inválido - deve ser descartada)
];

const taxaLeiloeiro = 0.08; // Taxa de 8% para testar a sua closure

const processarNovosLances = (valorIncial = 100, ...lances) => {
    const todosOsLances = [valorIncial, ...lances]
    return todosOsLances.map(lance => Number(lance)).filter(validarLance);
}

const calcularTaxa = criarGerenciadorTaxa(taxaLeiloeiro);

const lancesValidos = processarNovosLances(undefined, ...lancesParaTestar);

const lancesComTaxa = lancesValidos.map(lance => calcularTaxa(lance)).reduce((cont, lance) => cont + lance, 0);

function validarLance(valor){
    valor = Number(valor)
    if (valor && valor > 0) {
        return valor;
    }
    return false;
}

function criarGerenciadorTaxa(taxaLeiloeiroDefault = 0.05){
    return function(lance){
        return lance + (lance * taxaLeiloeiroDefault);
    }
} 

console.log("--- Processamento do Leilão Iniciado ---");
setTimeout(() => console.log("➔ [Timer] Computando estatísticas finais..."), 0);
setImmediate(() => {
    console.log("➔ [Check Phase] Leilão encerrado com sucesso!");
});
console.log(lancesComTaxa);