# Resumo: Async/Await

O `async/await` é uma evolução da manipulação de código assíncrono. Ele funciona como uma "sintaxe amigável" (syntactic sugar) sobre as Promises, permitindo escrever código assíncrono que se parece com código síncrono.

## 1. O que é cada termo?
* **`async`**: Palavra-chave usada para declarar que uma função é assíncrona. Ela força a função a sempre retornar uma Promise.
* **`await`**: Palavra-chave usada para pausar a execução da função até que a Promise seja resolvida. **Só pode ser usada dentro de funções `async`**.

## 2. Vantagens principais
* **Legibilidade**: Elimina o encadeamento excessivo de `.then()` e `.catch()` (evita o "Promise Hell").
* **Tratamento de Erros**: Permite o uso da estrutura tradicional `try...catch`.
* **Depuração**: Torna o processo de colocar breakpoints e debugar muito mais simples.

---

## 3. Exemplo Prático (JavaScript)

### Abordagem Antiga (Apenas Promises)
```javascript
function buscarDados() {
    fetch('https://exemplo.com')
        .then(resposta => resposta.json())
        .then(dados => console.log(dados))
        .catch(erro => console.error("Erro:", erro));
}
```

### Abordagem Moderna (Async/Await)
```javascript
async function buscarDadosModerna() {
    try {
        const resposta = await fetch('https://exemplo.com'); // Pausa aqui até receber a resposta
        const dados = await resposta.json(); // Pausa aqui até converter para JSON
        console.log(dados);
    } catch (erro) {
        console.error("Erro capturado no catch:", erro); // Captura erros de rede ou conversão
    }
}
```

---

## 4. Regras de Ouro
1. Toda função marcada com `async` retorna uma Promessa, mesmo que você retorne um valor comum.
2. O `await` trava apenas a execução **dentro** da função assíncrona, liberando o resto do sistema para continuar rodando.
