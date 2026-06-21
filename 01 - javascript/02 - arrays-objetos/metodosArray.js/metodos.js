
const data = [
  { name: "Sujeito", age: 23, salary: 4000, active: true, team: "Frontend", bonus: 0 },
  { name: "Jose", age: 36, salary: 3000, active: true, team: "Backend", bonus: 0 },
  { name: "Ana Caroline", age: 32, salary: 6000, active: true, team: "Mobile", bonus: 0 },
  { name: "Bauer", age: 28, salary: 3500, active: true, team: "Frontend", bonus: 0 },
  { name: "Matheus", age: 22, salary: 2500, active: false, team: "Mobile", bonus: 0 },
];
const list = ["Sujeito", "Jose", "Ana Caroline", "Bauer", "Matheus"];
const nums = [26, 54, 10, 20, 35, 32, 84, 41];

// Find devolve o primeiro que satisfaça a condição

// const user = data.find(user => user.age >= 20);
// console.log(user)

// Filter: devolve todos os itens que satisfaçam a condição

// const users = data.filter(user => user.active && user.salary >= 3500);
// console.log(users)

// FindIndex: Encontra o primeiro index dentro do array que satisfaça a condição

// const userIndex = data.findIndex(user => user.salary > 3500);
// console.log(userIndex);

// Include: Verifica se um elemento específico existe no array. Retorna true ou false.
const num = nums.includes(35);
console.log(num);

const num1 = nums.includes(20, 4)
console.log(num1);