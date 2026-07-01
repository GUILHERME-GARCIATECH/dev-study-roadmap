# Planner de Estudos — Dev Fullstack

Este planner é a visão geral dos estudos.

Cada item marcado como checklist pode virar uma **issue no GitHub** com mais detalhes, links, exemplos, subtarefas e critérios de conclusão.

Fluxo recomendado:

```txt
planner.md → issue → estudo → prática → commit → conclusão
```

---

# Como usar

- [ ] Escolher o próximo tópico do planner
- [ ] Criar uma issue para esse tópico
- [ ] Estudar o conceito
- [ ] Criar exemplo prático ou mini projeto
- [ ] Fazer commit do aprendizado
- [ ] Marcar a issue como concluída
- [ ] Marcar o item no planner

---

# 1. Fundamentos essenciais

## JavaScript

- [x] Revisar sintaxe moderna do JavaScript
- [x] Revisar tipos primitivos e coerção
- [x] Revisar truthy/falsy
- [x] Revisar hoisting
- [x] Revisar funções tradicionais e arrow functions
- [x] Estudar parâmetros default e rest
- [x] Estudar escopo, closure e lexical scope
- [x] Estudar arrays e métodos principais
- [ ] Estudar objetos e manipulação de propriedades
- [ ] Estudar destructuring
- [ ] Estudar spread/rest
- [ ] Estudar template literals
- [ ] Estudar módulos ESModules
- [ ] Estudar tratamento de erros com try/catch
- [x] Estudar event loop
- [ ] Estudar promises
- [ ] Estudar async/await
- [ ] Estudar fetch API
- [ ] Estudar JSON parse/stringify

## TypeScript

- [ ] Configurar TypeScript com tsconfig
- [ ] Estudar tipos básicos e inferência
- [ ] Estudar type vs interface
- [ ] Estudar union types
- [ ] Estudar intersection types
- [ ] Estudar literal types
- [ ] Estudar enums e alternativas
- [ ] Estudar narrowing
- [ ] Estudar type guards
- [ ] Estudar type assertions
- [ ] Estudar tipagem de funções
- [ ] Estudar utility types
- [ ] Estudar generics
- [ ] Estudar generics com constraints
- [ ] Estudar mapped types
- [ ] Estudar index signatures
- [ ] Estudar tipagem de objetos aninhados
- [ ] Estudar tipagem de arrays e tuplas
- [ ] Estudar tipagem de Promises
- [ ] Estudar tipagem de erros com unknown
- [ ] Estudar organização de tipos no projeto

## Node.js

- [ ] Entender runtime Node.js
- [ ] Estudar CommonJS vs ESModules
- [ ] Estudar npm, pnpm e scripts
- [ ] Estudar variáveis de ambiente
- [ ] Estudar process.env
- [ ] Estudar File System básico
- [ ] Estudar HTTP nativo no Node
- [ ] Criar API simples com Node
- [ ] Estudar async/await no backend
- [ ] Estudar tratamento de erros no backend
- [ ] Estudar estrutura básica de projeto backend

---

# 2. Backend

## APIs REST

- [ ] Estudar conceito de cliente e servidor
- [ ] Estudar métodos HTTP
- [ ] Estudar status codes principais
- [ ] Estudar headers
- [ ] Estudar query params vs route params
- [ ] Estudar body JSON
- [ ] Estudar padrões REST
- [ ] Estudar CRUD
- [ ] Estudar paginação
- [ ] Estudar filtros e ordenação
- [ ] Estudar versionamento de API
- [ ] Estudar rate limiting
- [ ] Estudar documentação de API

## NestJS

- [ ] Criar projeto NestJS
- [ ] Estudar estrutura de módulos
- [ ] Estudar controllers
- [ ] Estudar providers e services
- [ ] Estudar dependency injection
- [ ] Estudar DTOs
- [ ] Estudar pipes
- [ ] Estudar guards
- [ ] Estudar interceptors
- [ ] Estudar exception filters
- [ ] Estudar middlewares
- [ ] Estudar modules compartilhados
- [ ] Estudar configuração com env
- [ ] Estudar validação no NestJS
- [ ] Estudar autenticação no NestJS
- [ ] Estudar autorização com roles
- [ ] Estudar estrutura escalável de projeto NestJS

## Validação

- [ ] Estudar validação de entrada
- [ ] Estudar Zod
- [ ] Estudar schemas básicos com Zod
- [ ] Estudar parse vs safeParse
- [ ] Estudar mensagens de erro
- [ ] Estudar validação de objetos
- [ ] Estudar refinements
- [ ] Estudar z.infer
- [ ] Estudar DTOs
- [ ] Estudar validação no backend
- [ ] Estudar validação no frontend
- [ ] Estudar schemas compartilhados

## Autenticação e autorização

- [ ] Estudar autenticação vs autorização
- [ ] Estudar JWT
- [ ] Estudar refresh token
- [ ] Estudar cookies HttpOnly
- [ ] Estudar sessões
- [ ] Estudar hash de senhas
- [ ] Estudar proteção de rotas
- [ ] Estudar RBAC
- [ ] Estudar permissions
- [ ] Estudar guards de autenticação
- [ ] Estudar guards de autorização
- [ ] Criar fluxo completo de login
- [ ] Criar fluxo de logout
- [ ] Criar fluxo de refresh token

---

# 3. Banco de dados

## SQL e PostgreSQL

- [ ] Estudar conceitos de tabela, linha e coluna
- [ ] Estudar tipos de dados
- [ ] Estudar primary key
- [ ] Estudar foreign key
- [ ] Estudar relacionamentos 1:1
- [ ] Estudar relacionamentos 1:N
- [ ] Estudar relacionamentos N:N
- [ ] Estudar SELECT
- [ ] Estudar WHERE
- [ ] Estudar ORDER BY
- [ ] Estudar LIMIT e OFFSET
- [ ] Estudar INSERT
- [ ] Estudar UPDATE
- [ ] Estudar DELETE
- [ ] Estudar JOIN
- [ ] Estudar GROUP BY
- [ ] Estudar indexes
- [ ] Estudar transactions
- [ ] Estudar modelagem básica
- [ ] Estudar performance básica no PostgreSQL

## Prisma ORM

- [ ] Instalar e configurar Prisma
- [ ] Estudar schema.prisma
- [ ] Estudar datasource e generator
- [ ] Estudar models
- [ ] Estudar migrations
- [ ] Estudar Prisma Client
- [ ] Estudar CRUD com Prisma
- [ ] Estudar relations 1:N
- [ ] Estudar relations N:N
- [ ] Estudar select e include
- [ ] Estudar filtros com where
- [ ] Estudar ordenação com orderBy
- [ ] Estudar paginação com skip/take
- [ ] Estudar paginação com cursor
- [ ] Estudar transactions
- [ ] Estudar seed
- [ ] Estudar integração Prisma + NestJS
- [ ] Estudar boas práticas de organização

---

# 4. Frontend

## React

- [ ] Revisar JSX/TSX
- [ ] Estudar componentes funcionais
- [ ] Estudar props
- [ ] Estudar children
- [ ] Estudar renderização condicional
- [ ] Estudar listas e keys
- [ ] Estudar useState
- [ ] Estudar useEffect
- [ ] Estudar formulários controlados
- [ ] Estudar eventos
- [ ] Estudar composição de componentes
- [ ] Estudar useMemo
- [ ] Estudar useCallback
- [ ] Estudar useRef
- [ ] Estudar Context API
- [ ] Estudar custom hooks
- [ ] Estudar loading e error state
- [ ] Estudar patterns comuns de componentes

## Next.js

- [ ] Criar projeto Next.js
- [ ] Estudar App Router
- [ ] Estudar pages
- [ ] Estudar layouts
- [ ] Estudar nested routes
- [ ] Estudar Link e navegação
- [ ] Estudar Server Components
- [ ] Estudar Client Components
- [ ] Estudar data fetching
- [ ] Estudar Server Actions
- [ ] Estudar Route Handlers
- [ ] Estudar Middleware
- [ ] Estudar Metadata
- [ ] Estudar loading.tsx
- [ ] Estudar error.tsx
- [ ] Estudar not-found.tsx
- [ ] Estudar cache e revalidate
- [ ] Estudar env vars
- [ ] Estudar autenticação no Next.js
- [ ] Estudar integração Next.js com API externa

## CSS

- [ ] Revisar HTML semântico
- [ ] Estudar box model
- [ ] Estudar display
- [ ] Estudar position
- [ ] Estudar flexbox
- [ ] Estudar grid
- [ ] Estudar responsividade
- [ ] Estudar media queries
- [ ] Estudar unidades CSS
- [ ] Estudar pseudo-classes
- [ ] Estudar acessibilidade básica
- [ ] Estudar organização de estilos

## TailwindCSS

- [ ] Configurar TailwindCSS
- [ ] Estudar utility classes
- [ ] Estudar espaçamento
- [ ] Estudar tipografia
- [ ] Estudar cores
- [ ] Estudar flexbox com Tailwind
- [ ] Estudar grid com Tailwind
- [ ] Estudar responsividade
- [ ] Estudar hover, focus e active
- [ ] Estudar dark mode
- [ ] Estudar componentização com Tailwind
- [ ] Criar layout responsivo com Tailwind

## UI e shadcn/ui

- [ ] Instalar shadcn/ui
- [ ] Estudar Button
- [ ] Estudar Input
- [ ] Estudar Dialog
- [ ] Estudar Dropdown
- [ ] Estudar Table
- [ ] Estudar Form
- [ ] Estudar Toast
- [ ] Estudar layout de dashboard
- [ ] Estudar sidebar
- [ ] Estudar tema visual
- [ ] Criar componentes reutilizáveis
- [ ] Criar padrão simples de design system

---

# 5. Arquitetura e organização

## Estrutura de projeto

- [ ] Estudar organização por camadas
- [ ] Estudar organização por módulos
- [ ] Estudar separação de responsabilidades
- [ ] Estudar controllers
- [ ] Estudar services
- [ ] Estudar repositories
- [ ] Estudar DTOs
- [ ] Estudar mappers
- [ ] Estudar tratamento padronizado de erros
- [ ] Estudar configuração de projeto
- [ ] Estudar aliases de importação
- [ ] Estudar barrel exports
- [ ] Criar estrutura base para API
- [ ] Criar estrutura base para frontend

## Clean code e patterns

- [ ] Estudar nomes claros
- [ ] Estudar funções pequenas
- [ ] Estudar responsabilidades únicas
- [ ] Estudar early return
- [ ] Estudar service layer
- [ ] Estudar repository pattern
- [ ] Estudar factory pattern
- [ ] Estudar adapter pattern
- [ ] Estudar dependency injection
- [ ] Estudar princípios SOLID
- [ ] Estudar noções de Clean Architecture
- [ ] Estudar noções de DDD

---

# 6. Segurança

## Segurança web

- [ ] Estudar OWASP Top 10
- [ ] Estudar XSS
- [ ] Estudar CSRF
- [ ] Estudar SQL Injection
- [ ] Estudar CORS
- [ ] Estudar segurança em cookies
- [ ] Estudar segurança em JWT
- [ ] Estudar rate limiting
- [ ] Estudar brute force protection
- [ ] Estudar validação de input
- [ ] Estudar sanitização de dados
- [ ] Estudar proteção de endpoints
- [ ] Estudar variáveis de ambiente seguras

---

# 7. Testes

## Testes automatizados

- [ ] Estudar tipos de testes
- [ ] Estudar testes unitários
- [ ] Estudar testes de integração
- [ ] Estudar testes E2E
- [ ] Estudar Jest
- [ ] Estudar Vitest
- [ ] Estudar Supertest
- [ ] Estudar Testing Library
- [ ] Estudar Playwright
- [ ] Testar services
- [ ] Testar controllers
- [ ] Testar APIs
- [ ] Testar componentes React
- [ ] Testar fluxo de autenticação
- [ ] Estudar mocks e stubs

---

# 8. Infraestrutura

## Docker

- [ ] Estudar conceito de container
- [ ] Estudar Dockerfile
- [ ] Estudar imagens
- [ ] Estudar volumes
- [ ] Estudar networks
- [ ] Estudar docker-compose
- [ ] Rodar PostgreSQL com Docker
- [ ] Rodar API com Docker
- [ ] Rodar frontend com Docker
- [ ] Criar ambiente completo com docker-compose

## Deploy e Linux

- [ ] Estudar comandos básicos de Linux
- [ ] Estudar SSH
- [ ] Estudar VPS
- [ ] Estudar variáveis de ambiente em produção
- [ ] Estudar build de aplicação
- [ ] Estudar PM2 ou alternativa
- [ ] Estudar Nginx
- [ ] Estudar proxy reverso
- [ ] Estudar SSL
- [ ] Fazer deploy simples de API
- [ ] Fazer deploy simples de frontend
- [ ] Estudar logs em produção

## GitHub Actions

- [ ] Estudar conceito de CI/CD
- [ ] Estudar workflows
- [ ] Estudar jobs
- [ ] Estudar steps
- [ ] Estudar secrets
- [ ] Criar workflow de lint
- [ ] Criar workflow de testes
- [ ] Criar workflow de build
- [ ] Criar workflow simples de deploy

---

# 9. Git e GitHub

## Git

- [ ] Revisar git init
- [ ] Revisar git add
- [ ] Revisar git commit
- [ ] Revisar git status
- [ ] Revisar git log
- [ ] Estudar branches
- [ ] Estudar merge
- [ ] Estudar rebase
- [ ] Estudar stash
- [ ] Estudar reset
- [ ] Estudar revert
- [ ] Estudar tags
- [ ] Melhorar padrão de commits

## GitHub

- [ ] Estudar issues
- [ ] Estudar labels
- [ ] Estudar milestones
- [ ] Estudar pull requests
- [ ] Estudar GitHub Projects
- [ ] Criar board de estudos
- [ ] Criar template de issue
- [ ] Criar template de pull request
- [ ] Usar checklist em issues
- [ ] Usar issues para estudos
- [ ] Usar projects para acompanhar progresso

---

# 10. Mini projetos sugeridos

Cada mini projeto pode virar uma ou mais issues.

## Backend

- [ ] Criar API REST simples com Node
- [ ] Criar API REST com NestJS
- [ ] Criar CRUD com NestJS + Prisma
- [ ] Criar autenticação com JWT
- [ ] Criar refresh token
- [ ] Criar RBAC básico
- [ ] Criar upload de arquivos
- [ ] Criar paginação, filtros e ordenação
- [ ] Criar API com validação usando Zod
- [ ] Criar API com testes automatizados

## Frontend

- [ ] Criar dashboard com Next.js
- [ ] Criar formulário com validação
- [ ] Criar tabela com filtros
- [ ] Criar sidebar responsiva
- [ ] Criar página de login
- [ ] Criar fluxo autenticado
- [ ] Criar layout com shadcn/ui
- [ ] Criar tema claro/escuro
- [ ] Consumir API externa
- [ ] Consumir API própria

## Fullstack

- [ ] Criar app fullstack com login
- [ ] Criar app fullstack com CRUD
- [ ] Criar app fullstack com permissões
- [ ] Criar app fullstack com dashboard
- [ ] Criar app fullstack com PostgreSQL
- [ ] Criar app fullstack com deploy

---

# 11. Revisões

## Revisão semanal

- [ ] Revisar issues concluídas
- [ ] Revisar commits da semana
- [ ] Atualizar planner.md
- [ ] Mover cards no GitHub Project
- [ ] Anotar dificuldades principais
- [ ] Escolher próximos tópicos

## Revisão mensal

- [ ] Revisar progresso geral
- [ ] Revisar tópicos esquecidos
- [ ] Refatorar exemplos antigos
- [ ] Melhorar mini projetos existentes
- [ ] Atualizar README se necessário
- [ ] Planejar próximo foco de estudo

---

# Critério de conclusão de um tópico

Um tópico só deve ser marcado como concluído quando eu conseguir:

- [ ] Explicar o conceito com minhas palavras
- [ ] Criar um exemplo prático
- [ ] Aplicar em algum mini projeto
- [ ] Fazer pelo menos um commit relacionado
- [ ] Registrar observações importantes na issue ou em notes/

---

# Filosofia

```txt
Pouca burocracia.
Muito código.
Issues pequenas.
Commits frequentes.
Mini projetos práticos.
```
