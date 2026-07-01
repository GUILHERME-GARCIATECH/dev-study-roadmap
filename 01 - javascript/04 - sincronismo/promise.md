# Resumo: Promises (Promessas)

Uma `Promise` é um objeto que representa o sucesso ou a falha de uma operação assíncrona. Ela funciona como um pacto: o código promete entregar um resultado no futuro.

## 1. Os 3 Estados de uma Promise
Uma Promise sempre estará em um destes três estados:

* **Pending (Pendente)**: Estado inicial. A operação ainda está executando.
* **Fulfilled (Resolvida)**: A operação foi concluída com sucesso. Retorna o valor final.
* **Rejected (Rejeitada)**: A operação falhou. Retorna o motivo do erro.

---

## 2. Sintaxe e Métodos de Consumo
Para criar uma Promise, usamos os callbacks `resolve` e `reject`. Para consumir, usamos os métodos encadeados:

* **`.then()`**: Executado quando a Promise é resolvida com sucesso.
* **`.catch()`**: Executado quando a Promise falha ou ocorre um erro.
* **`.finally()`**: Executado sempre ao final, independente de ter dado certo ou errado.

---

## 3. Exemplo Prático (JavaScript)

### Criando a Promise
```javascript
const checarEstoque = new Promise((resolve, reject) => {
    let temProduto = true; // Simulação de verificação

    if (temProduto) {
        resolve("Produto disponível no estoque!"); // Sucesso
    } else {
        reject("Erro: Produto esgotado."); // Falha
    }
});
```

### Consumindo a Promise
```javascript
checarEstoque
    .then((mensagem) => {
        console.log(mensagem); // Executa se chamar resolve()
    })
    .catch((erro) => {
        console.error(erro); // Executa se chamar reject()
    })
    .finally(() => {
        console.log("Operação finalizada."); // Sempre executa
    });
```

---

## 4. Métodos Utilitários (Múltiplas Promises)
* **`Promise.all([...])`**: Roda várias Promises em paralelo. Falha se **uma** delas falhar.
* **`Promise.race([...])`**: Retorna o resultado da **primeira** Promise que terminar, seja sucesso ou falha.
* **`Promise.any([...])`**: Retorna a **primeira** que tiver sucesso. Só falha se todas falharem.
