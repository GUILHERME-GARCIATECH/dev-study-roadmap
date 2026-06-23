const nomes = [
  "Ana",
  "Pedro",
  "Lucas",
  "Marina",
  "José"
];

nomes.push("Guilherme");
console.log(nomes);

nomes.unshift("maria");
console.log(nomes);

nomes.pop();
console.log(nomes);

nomes.shift();
console.log(nomes);

nomes.splice(2, 1, "joao");
console.log(nomes);

const strings = nomes.join(', ');
console.log(strings);

const pExiste = nomes.includes("Pedro");
console.log(pExiste);

const Index = nomes.findIndex(nome => nome === "Marina");
console.log(Index);

const fatia = nomes.slice(0,3)
console.log(fatia)

nomes.reverse();
console.log(nomes);