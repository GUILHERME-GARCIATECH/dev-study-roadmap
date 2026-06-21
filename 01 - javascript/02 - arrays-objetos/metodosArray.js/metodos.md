# Guia de Métodos de Array em JavaScript

Os métodos de array no JavaScript são classificados pelo seu comportamento: alguns alteram o array original (métodos mutáveis), enquanto outros criam uma cópia modificada ou apenas listam informações.

---

## 1. Métodos que Listam, Buscam e Iteram (Não Modificam)
Estes métodos servem para ler o array, encontrar elementos ou executar funções para cada item, sem alterar a estrutura original.

* **`forEach()`**: Executa uma função de callback para cada elemento do array.
* **`find()`**: Retorna o **primeiro elemento** que satisfaz a condição da função de busca.
* **`findIndex()`**: Retorna o **índice** do primeiro elemento que satisfaz a condição. Retorna `-1` se não encontrar.
* **`includes()`**: Verifica se um elemento específico existe no array. Retorna `true` ou `false`.
* **`indexOf()`**: Retorna o primeiro índice onde o elemento especificado pode ser encontrado.
* **`some()`**: Verifica se **pelo menos um** elemento passa no teste da função. Retorna `true` ou `false`.
* **`every()`**: Verifica se **todos** os elementos passam no teste da função. Retorna `true` ou `false`.
* **`reduce()`**: Executa uma função para cada elemento e acumula os valores em um **único resultado final** (como uma soma).

### Exemplos de Listagem e Busca:
```javascript
const usuarios = [
  { id: 1, nome: 'Ana', ativo: true },
  { id: 2, nome: 'Beto', ativo: false },
  { id: 3, nome: 'Carlos', ativo: true }
];

// Encontrar um elemento específico
const usuarioAtivo = usuarios.find(u => u.ativo === true); // { id: 1, nome: 'Ana', ativo: true }

// Verificar se todos estão ativos
const todosAtivos = usuarios.every(u => u.ativo); // false

// Somar IDs (Apenas para exemplo de reduce)
const somaIds = usuarios.reduce((acumulador, u) => acumulador + u.id, 0); // 6
```

---

## 2. Métodos que Modificam o Array Original (Mutáveis)
Estes métodos alteram diretamente os dados, o tamanho ou a ordem do array no qual foram chamados.

* **`push()`**: Adiciona um ou mais elementos ao **final** do array.
* **`pop()`**: Remove o **último** elemento do array e o retorna.
* **`shift()`**: Remove o **primeiro** elemento do array e o retorna.
* **`unshift()`**: Adiciona um ou mais elementos no **início** do array.
* **`splice()`**: Altera o conteúdo de um array **removendo, substituindo ou adicionando** elementos em índices específicos.
* **`sort()`**: Ordena os elementos do próprio array (por padrão, como strings de texto).
* **`reverse()`**: Inverte a ordem dos elementos do array.
* **`fill()`**: Preenche todos os valores do array de um índice inicial a um final com um valor estático.

### Exemplos de Modificação:
```javascript
const frutas = ['Maçã', 'Banana'];

frutas.push('Laranja'); // ['Maçã', 'Banana', 'Laranja']
frutas.shift();        // ['Banana', 'Laranja']

const numeros =;
numeros.sort((a, b) => a - b); // [1, 2, 5, 8] (Ordenação numérica correta)

// Uso do splice: remove 1 elemento na posição 1 e adiciona 'Uva'
frutas.splice(1, 1, 'Uva'); 
```

---

## 3. Métodos que Criam Novos Arrays (Imutáveis)
Estes métodos não alteram o array original. Eles processam os dados e **retornam um novo array** independente.

* **`map()`**: Cria um novo array com o resultado da função aplicada a cada elemento do array original.
* **`filter()`**: Cria um novo array contendo apenas os elementos que passaram no teste da função de filtragem.
* **`concat()`**: Junta dois ou mais arrays (ou valores) e retorna um novo array combinado.
* **`slice()`**: Copia uma parte do array (de um índice inicial até um final, sem incluir o final) e retorna essa fatia.
* **`flat()`**: Cria um novo array com todos os elementos de sub-arrays concatenados de forma recursiva até a profundidade especificada.
* **`Array.from()`**: Cria uma nova instância de Array a partir de um objeto iterável ou semelhante a um array (como um NodeList do DOM).

### Exemplos de Criação:
```javascript
const precos =;

// map: Criando novo array com desconto de 10%
const precosComDesconto = precos.map(p => p * 0.9); // [9, 18, 27, 36]

// filter: Criando novo array apenas com valores maiores que 15
const caros = precos.filter(p => p > 15); // [20, 30, 40]

// slice: Pegando os dois primeiros elementos
const primeiros = precos.slice(0, 2); // [10, 20]

console.log(precos); // [10, 20, 30, 40] (O array original continua intacto!)
```
