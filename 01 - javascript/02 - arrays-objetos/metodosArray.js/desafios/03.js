const numeros = [8, 15, 22, 4, 9, 30, 12, 41, 3, 18];

const pares = numeros.filter(n => n % 2 === 0);
console.log(pares);

const maiorQueDez = numeros.filter(n => n > 10);
console.log(maiorQueDez);

const soma = numeros.reduce((acc, num) => acc + num, 0);
console.log(soma);

const maiorQueQuarenta = numeros.some(n => n > 40);
console.log(maiorQueQuarenta);

const positivos = numeros.every(n => n >= 0);
console.log(positivos);

const crescente = numeros.toSorted((a, b) => a - b);
console.log(crescente);

const decrescente = numeros.toSorted((a, b) => b - a);
console.log(decrescente);

const reverso = numeros.reverse();
console.log(reverso);

const substituir = numeros.toSpliced(2, 1, 999);
console.log(substituir);

const fatia = numeros.slice(0, 5);
console.log(fatia);