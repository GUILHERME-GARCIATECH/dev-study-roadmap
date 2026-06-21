# Desafios de Métodos de Array em JavaScript

> Objetivo: aprender a pensar em problemas, não em métodos.
>
> Não olhe a lista de métodos primeiro. Leia o problema, tente resolver sozinho e só depois consulte a documentação.
>
> Regra: tente evitar `for`, `while` e `for...of`. Resolva usando métodos de array.

---

# Desafio 1 - Cadastro de pessoas

Utilize este array:

```javascript
const pessoas = [
  { nome: "Ana", idade: 19, salario: 2500, ativo: true },
  { nome: "José", idade: 42, salario: 5500, ativo: true },
  { nome: "Marina", idade: 27, salario: 3800, ativo: false },
  { nome: "Pedro", idade: 31, salario: 7200, ativo: true },
  { nome: "Lucas", idade: 24, salario: 3000, ativo: true },
];
```

## Tarefas

1. Mostrar apenas os nomes das pessoas.
2. Encontrar a primeira pessoa com mais de 30 anos.
3. Encontrar a posição da primeira pessoa inativa.
4. Verificar se existe alguém recebendo mais de R$ 7000.
5. Verificar se todas as pessoas estão ativas.
6. Calcular a soma de todos os salários.
7. Criar um array contendo apenas as pessoas ativas.
8. Criar um array com os nomes em ordem alfabética.
9. Criar um array com os nomes ordenados pelo maior salário.
10. Criar um array contendo apenas as idades.

---

# Desafio 2 - Loja virtual

```javascript
const produtos = [
  { nome: "Mouse", preco: 120, estoque: 10 },
  { nome: "Teclado", preco: 250, estoque: 0 },
  { nome: "Monitor", preco: 900, estoque: 4 },
  { nome: "Notebook", preco: 4200, estoque: 2 },
  { nome: "Headset", preco: 300, estoque: 7 },
];
```

## Tarefas

1. Mostrar apenas os nomes dos produtos.
2. Mostrar apenas os produtos em estoque.
3. Encontrar o primeiro produto acima de R$ 1000.
4. Verificar se existe algum produto sem estoque.
5. Verificar se todos os produtos possuem estoque.
6. Calcular o valor total do estoque da loja (`preço * estoque`).
7. Ordenar os produtos do mais barato para o mais caro.
8. Ordenar os produtos do mais caro para o mais barato.
9. Criar um array contendo apenas os preços.
10. Criar um array contendo apenas os nomes dos produtos disponíveis.

---

# Desafio 3 - Limpeza de dados

```javascript
const numeros = [8, 15, 22, 4, 9, 30, 12, 41, 3, 18];
```

## Tarefas

1. Criar um array apenas com números pares.
2. Criar um array apenas com números maiores que 10.
3. Somar todos os números.
4. Verificar se existe algum número maior que 40.
5. Verificar se todos os números são positivos.
6. Ordenar em ordem crescente.
7. Ordenar em ordem decrescente.
8. Inverter a ordem dos números.
9. Substituir o terceiro número por 999 sem alterar o array original.
10. Pegar os 5 primeiros números.

---

# Desafio 4 - Manipulando listas

```javascript
const nomes = [
  "Ana",
  "Pedro",
  "Lucas",
  "Marina",
  "José"
];
```

## Tarefas

1. Adicionar "Guilherme" ao final.
2. Adicionar "Maria" no início.
3. Remover o último elemento.
4. Remover o primeiro elemento.
5. Substituir "Lucas" por "João".
6. Transformar a lista em uma string separada por vírgulas.
7. Verificar se "Pedro" existe.
8. Descobrir a posição de "Marina".
9. Criar uma cópia dos três primeiros nomes.
10. Inverter a ordem dos nomes.

---

# Desafio 5 - Trabalhando com textos

```javascript
const frase = "Javascript é muito divertido";
```

## Tarefas

1. Transformar a frase em um array de caracteres.
2. Contar quantos caracteres existem.
3. Encontrar a posição da palavra "muito".
4. Verificar se a frase contém "divertido".
5. Separar a frase em palavras.
6. Juntar novamente usando hífen.

Resultado esperado:

```text
Javascript-é-muito-divertido
```

---

# Desafio 6 - Arrays aninhados

```javascript
const matriz = [
  [1, 2],
  [3, 4],
  [5, [6, 7]]
];
```

## Tarefas

1. Achatar um nível.
2. Achatar todos os níveis.
3. Somar todos os números.
4. Ordenar em ordem crescente.
5. Criar um array contendo apenas os números maiores que 3.

---

# Desafio 7 - Desafio completo (misture tudo)

```javascript
const funcionarios = [
  { nome: "Ana", setor: "Frontend", salario: 4500, ativo: true },
  { nome: "José", setor: "Backend", salario: 5500, ativo: true },
  { nome: "Pedro", setor: "Mobile", salario: 3000, ativo: false },
  { nome: "Lucas", setor: "Frontend", salario: 4000, ativo: true },
  { nome: "Marina", setor: "Backend", salario: 7000, ativo: true },
];
```

## Tarefas

1. Mostrar apenas os funcionários ativos.
2. Mostrar apenas os nomes.
3. Mostrar apenas quem ganha acima de R$ 5000.
4. Calcular a soma dos salários.
5. Encontrar o funcionário mais bem pago.
6. Verificar se existe alguém inativo.
7. Verificar se todos estão ativos.
8. Ordenar pelo salário.
9. Ordenar alfabeticamente pelo nome.
10. Criar um ranking dos salários do maior para o menor.
11. Criar uma lista apenas com os nomes dos funcionários ativos em ordem de salário.

Resultado esperado:

```javascript
["Marina", "José", "Ana", "Lucas"]
```

---

# Regra de progressão

1. Resolver sem olhar a resposta.
2. Pesquisar a documentação apenas se travar.
3. Conseguir resolver um desafio usando mais de um método encadeado.

Exemplo:

```javascript
const resultado = funcionarios
  .filter(f => f.ativo)
  .toSorted((a, b) => b.salario - a.salario)
  .map(f => f.nome);
```

Quando esses desafios começarem a parecer fáceis, é hora de partir para **Objetos**, porque é aí que JavaScript começa a ficar realmente poderoso.