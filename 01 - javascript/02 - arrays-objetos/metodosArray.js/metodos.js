// ==================== DADOS ====================

const data = [
  { name: "Sujeito", age: 23, salary: 4000, active: true, team: "Frontend", bonus: 0 },
  { name: "Jose", age: 36, salary: 3000, active: true, team: "Backend", bonus: 0 },
  { name: "Ana Caroline", age: 32, salary: 6000, active: true, team: "Mobile", bonus: 0 },
  { name: "Bauer", age: 28, salary: 3500, active: true, team: "Frontend", bonus: 0 },
  { name: "Matheus", age: 22, salary: 2500, active: false, team: "Mobile", bonus: 0 },
];

const list = ["Sujeito", "Jose", "Ana Caroline", "Bauer", "Matheus"];

const nums = [26, 54, 10, 2, 1, 9, 20, 35, 32, 84, 41];

const texto = "Texto de teste e Javascript";

const numeros = [2, 4, 6, 8];

// ==================== BUSCA E ITERAÇÃO ====================

// forEach(): executa uma função para cada item
// data.forEach(user => console.log(user.name));

// find(): retorna o primeiro item encontrado
// const user = data.find(user => user.age >= 30);
// console.log(user);

// filter(): retorna todos os itens encontrados
// const users = data.filter(user => user.active);
// console.log(users);

// findIndex(): retorna o índice do primeiro item encontrado
// const index = data.findIndex(user => user.salary > 3500);
// console.log(index);

// includes(): verifica se existe no array
// console.log(nums.includes(35));
// console.log(nums.includes(20, 4));

// indexOf(): retorna o índice do elemento
// console.log(texto.indexOf("t", 4));

// at(): acessa um índice (aceita negativos)
// console.log(nums.at(-1));

// some(): pelo menos um atende a condição
// console.log(data.some(user => user.age === 32));

// every(): todos atendem a condição
// console.log(data.every(user => user.bonus === 0));

// reduce(): acumula valores
// const soma = data.reduce((acc, user) => acc + user.age, 0);
// console.log(soma);

// ==================== MODIFICAM O ARRAY ====================

// push(): adiciona no final
// list.push("Guilherme");
// console.log(list);

// pop(): remove o último
// list.pop();
// console.log(list);

// shift(): remove o primeiro
// list.shift();
// console.log(list);

// unshift(): adiciona no início
// list.unshift("Ovelha", "Quinze", 25);
// console.log(list);

// splice(): remove, substitui ou adiciona
// list.splice(2, 1, "Lompo", 25, 878);
// console.log(list);

// sort(): ordena o array
// list.sort();
// console.log(list);

// nums.sort((a, b) => a - b);
// console.log(nums);

// nums.sort((a, b) => b - a);
// console.log(nums);

// data.sort((a, b) => a.age - b.age);
// console.log(data);

// reverse(): inverte a ordem
// nums.reverse();
// console.log(nums);

// fill(): preenche posições
// const cores = ["azul", "verde", "vermelho", "amarelo"];

// cores.fill("preto", 1, 3);
// console.log(cores);

// const listaSetes = new Array(5).fill(7);
// console.log(listaSetes);

// ==================== CRIAM NOVOS ARRAYS ====================

// map(): transforma os elementos
// const quadrados = numeros.map(n => n ** 2);
// console.log(quadrados);

// filter(): cria um novo array filtrado
// const filtro = numeros.filter(n => n > 5);
// console.log(filtro);

// concat(): junta arrays
// const resultado = numeros.concat(nums, "potato");
// console.log(resultado);

// slice(): copia uma parte do array
// const fatia = nums.slice(5, 8);
// console.log(fatia);

// flat(): achata arrays aninhados
// const matriz = [1, 2, [3, 4], [5, [6, 7]]];

// console.log(matriz.flat());
// console.log(matriz.flat(2));

// Array.from(): cria um array a partir de iteráveis
// const string = "Guilherme gosta de batata";

// const arrayString = Array.from(string);
// console.log(arrayString);

// ==================== MÉTODOS MODERNOS ====================

// toSorted(): ordena sem alterar o original
// const ordem = data.toSorted((a, b) => b.salary - a.salary);
// console.log(ordem);

// toReversed(): inverte sem alterar o original
// const invertido = nums.toReversed();
// console.log(invertido);

// toSpliced(): versão imutável do splice
// const novo = list.toSpliced(2, 1, "Novo Nome");
// console.log(novo);

// with(): altera uma posição sem modificar o original
// const alterado = nums.with(0, 999);
// console.log(alterado);

// ==================== CONVERSÃO ====================

// join(): transforma array em string
// const nomes = ["João", "Maria", "José"];

// console.log(nomes.join(", "));

// ==================== EXEMPLO REAL ====================

// const nomesAtivos = data
//   .filter(user => user.active)
//   .sort((a, b) => b.salary - a.salary)
//   .map(user => user.name);

// console.log(nomesAtivos);