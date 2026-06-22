const pessoas = [
    { nome: "Ana", idade: 19, salario: 2500, ativo: true },
    { nome: "José", idade: 42, salario: 5500, ativo: true },
    { nome: "Marina", idade: 27, salario: 3800, ativo: false },
    { nome: "Pedro", idade: 31, salario: 7200, ativo: true },
    { nome: "Lucas", idade: 24, salario: 3000, ativo: true },
];

pessoas.forEach(p => {
    console.log(p.nome);
});

const pes30 = pessoas.find(p => p.idade > 30);
console.log(pes30);

const inativo = pessoas.findIndex(p => !p.ativo)
console.log(inativo);

const rico = pessoas.some(p => p.salario > 7000);
console.log(rico);

const ativos = pessoas.every(p => p.ativo);
console.log(ativos);

const somaSalario = pessoas.reduce((c, p) => c + p.salario, 0);
console.log(somaSalario);

const todosAtivos = pessoas.filter(p => p.ativo);
console.log(todosAtivos);

const ordem = pessoas.map(p => p.nome).sort();
console.log(ordem)

const salarios = pessoas.toSorted((a, b) => b.salario - a.salario).map(p => p.nome);

console.log(salarios);

const idades = pessoas.map(p => p.idade);
console.log(idades);
