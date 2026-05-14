# Dev Study Roadmap

Repositório focado em estudos práticos de desenvolvimento fullstack.

```txt
estudar → praticar → aplicar → commitar → evoluir
```
### 📅 [Clique aqui para ver o Planner do Repositório](planner.md)
---

# Stack principal

## Frontend

- Next.js
- React
- TypeScript
- TailwindCSS
- shadcn/ui

## Backend

- Node.js
- NestJS
- REST API
- JWT
- RBAC

## Banco de dados

- PostgreSQL
- Prisma ORM

## Infraestrutura

- Docker
- VPS Linux
- Nginx
- GitHub Actions

---

# Estrutura do repositório

```txt
dev-study-roadmap/
├─ planner.md
├─ notes/
├─ javascript/
├─ typescript/
├─ node-nest/
├─ database/
├─ frontend/
├─ architecture/
├─ infra/
├─ tests/
└─ projects/
```

## Organização

### planner.md

Roadmap principal de estudos.

Usado para acompanhar:
- tópicos estudados
- revisão
- progresso geral

---

### notes/

Anotações rápidas:
- conceitos importantes
- erros comuns
- dicas
- referências

---

### javascript/, typescript/, frontend/, backend/, etc

Cada pasta contém:
- estudos
- exemplos
- testes
- mini projetos
- experimentos

---

### projects/

Projetos pequenos para consolidar aprendizado.

Exemplos:
- API REST
- auth JWT
- CRUD com Prisma
- dashboard com Next.js
- RBAC
- formulários com Zod

---

# Fluxo de estudo

## 1. Escolher um tópico

Exemplo:
- async/await
- NestJS Guards
- Prisma relations
- Next.js Server Actions

---

## 2. Criar uma issue

Cada issue representa:
- um estudo
- um mini projeto
- uma feature pequena
- uma revisão

Exemplo:

```md
## Objetivo
Entender JWT + refresh token

## Fazer
- [ ] Estudar fluxo
- [ ] Criar auth simples
- [ ] Implementar refresh token
- [ ] Testar proteção de rotas
- [ ] Commitar resultado
```

---

## 3. Usar GitHub Projects

Kanban simples:

```txt
Backlog
→ Em estudo
→ Praticando
→ Concluído
→ Revisar depois
```

Sem complexidade desnecessária.

---

## 4. Criar commits pequenos

Exemplos:

```bash
feat: add jwt auth example
feat: create prisma relations study
study: review javascript closures
feat: add nextjs server actions example
```

