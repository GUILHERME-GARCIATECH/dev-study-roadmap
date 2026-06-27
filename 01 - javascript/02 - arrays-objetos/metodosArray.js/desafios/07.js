const funcionarios = [
  { nome: "Ana", setor: "Frontend", salario: 4500, ativo: true },
  { nome: "José", setor: "Backend", salario: 5500, ativo: true },
  { nome: "Pedro", setor: "Mobile", salario: 3000, ativo: false },
  { nome: "Lucas", setor: "Frontend", salario: 4000, ativo: true },
  { nome: "Marina", setor: "Backend", salario: 7000, ativo: true },
];

const ativos = funcionarios.filter(f => f.ativo);
console.log(ativos);

funcionarios.forEach(f => console.log(f.nome));

funcionarios.forEach(f => {
    if(f.salario > 5000) return console.log(f);
});

const soma = funcionarios.reduce((acc, s) => acc + s, 0);
console.log(soma);

const rico = funcionarios.reduce((maior, atual) => {
    return atual.salario > maior.salario ? atual : maior;
});

const inativo = funcionarios.some(f => !f.ativo);
console.log(!!inativo);

const ativo = funcionarios.every(f => f.ativo);
console.log(ativo);

const ordenarSalario = funcionarios.toSorted((a, b) => a.salario - b.salario);
console.log(ordenarSalario);

const ordenarNome = funcionarios.toSorted(f => f.nome);
console.log(ordenarNome)

const ranking = funcionarios.toSorted((a, b) => a.salario - b.salario);
console.log(ranking);

const rankingNome = funcionarios.toSorted((a, b) => a.salario - b.salario).map(f => f.nome);
console.log(rankingNome)
