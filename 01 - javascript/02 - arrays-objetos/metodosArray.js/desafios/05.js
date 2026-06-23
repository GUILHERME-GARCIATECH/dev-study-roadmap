const frase = "Javascript é muito divertido";

const caracteres = Array.from(frase);
console.log(caracteres);

const cont = frase.length;
console.log(cont);

const posicao = frase.indexOf("muito");
console.log(posicao);

const contem = frase.includes("divertido");
console.log(contem);

const palavras = frase.split(' ');
console.log(palavras);

const hifen = palavras.join('-');
console.log(hifen);