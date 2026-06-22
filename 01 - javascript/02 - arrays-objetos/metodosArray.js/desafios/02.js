const produtos = [
    { nome: "Mouse", preco: 120, estoque: 10 },
    { nome: "Teclado", preco: 250, estoque: 0 },
    { nome: "Monitor", preco: 900, estoque: 4 },
    { nome: "Notebook", preco: 4200, estoque: 2 },
    { nome: "Headset", preco: 300, estoque: 7 },
];

produtos.forEach(p => console.log(p.nome));
console.log("");

produtos.filter(p => p.estoque).forEach(p => console.log(p));
console.log("");

const prod = produtos.find(p => p.preco > 1000);
console.log(prod);

const prodx = produtos.some(p => !p.estoque)
console.log(prodx);

const prodc = produtos.every(p => p.estoque)
console.log(prodc);

const preco = produtos.reduce((c, p) => (p.estoque * p.preco) + c, 0);
console.log(preco);

const maisBarato = produtos.toSorted((a, b) => a.preco - b.preco);
console.log(maisBarato)

const maisCaro = produtos.toSorted((a, b) => b.preco - a.preco);
console.log(maisCaro)

const precos = produtos.map(p => p.preco);
console.log(precos);

const prodNomes = produtos.filter(p => p.estoque).map(p => p.nome);
console.log(prodNomes)