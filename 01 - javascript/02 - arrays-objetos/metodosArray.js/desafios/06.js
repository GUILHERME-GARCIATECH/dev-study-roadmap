const matriz = [
  [1, 2],
  [3, 4],
  [5, [6, 7]]
];

const flat = matriz.flat(2);
console.log(flat);

const soma = matriz.flat(2).reduce((acc, n) => n + acc, 0);
console.log(soma)

const ordem = matriz.flat(2).toSorted((a, b) => a - b);
console.log(ordem);

const array = matriz.flat(2).filter(num => num > 3);
console.log(array);