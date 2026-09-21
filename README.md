# Cypress QA Challenge

Projeto de automação de testes desenvolvido como parte de um desafio técnico para a posição de **QA**.

A solução utiliza **Cypress + JavaScript** para validar a aplicação Serverest através de testes **E2E (Frontend)** e **API**, com foco em estabilidade, reutilização, manutenção e separação de responsabilidades.

---

## 1. Objetivo

Demonstrar uma suíte de testes automatizados cobrindo diferentes camadas da aplicação:

* **3 testes E2E**
* **3 testes de API**
* **6 cenários automatizados**

A estratégia combina validações através da interface com validações diretas dos endpoints da API, incluindo cenários positivos e negativos.

---

## 2. Tecnologias

* Cypress 16
* JavaScript
* Node.js
* npm
* Git / GitHub
* Google Chrome

**Aplicação sob teste:**

* Frontend: `https://front.serverest.dev`
* API: `https://serverest.dev`

---

## 3. Pré-requisitos

* Node.js
* npm
* Google Chrome
* Acesso à internet

Verifique as versões instaladas:

```bash
node --version
npm --version
```

---

## 4. Instalação

Clone o repositório:

```bash
git clone https://github.com/pmoral86/serverest-AMBEV.git
cd serverest-AMBEV
npm install
```

---

## 5. Estrutura do projeto

```text
cypress/
├── e2e/
│   ├── api/
│   │   ├── products.cy.js
│   │   ├── users.cy.js
│   │   └── users-negative.cy.js
│   │
│   └── frontend/
│       ├── login.cy.js
│       ├── login-invalid.cy.js
│       └── product-create.cy.js
│
├── pages/
│   ├── HomePage.js
│   ├── LoginPage.js
│   └── ProductPage.js
│
├── selectors/
│   ├── home.sel.js
│   ├── login.sel.js
│   └── product.sel.js
│
└── support/
    ├── api/
    │   ├── loginApi.js
    │   ├── productsApi.js
    │   └── usersApi.js
    │
    ├── factories/
    │   ├── product.factory.js
    │   ├── productUi.factory.js
    │   └── user.factory.js
    │
    ├── commands.js
    └── e2e.js
```

---

## 6. Arquitetura e responsabilidades

A estrutura separa responsabilidades para manter os testes simples, legíveis e fáceis de manter.

| Camada              | Responsabilidade                                 |
| ------------------- | ------------------------------------------------ |
| **Specs**           | Descrevem os cenários e realizam asserções       |
| **Page Objects**    | Encapsulam interações com a interface            |
| **Selectors**       | Centralizam os seletores da aplicação            |
| **API Services**    | Encapsulam as requisições HTTP                   |
| **Factories**       | Geram dados dinâmicos para os testes             |
| **Custom Commands** | Disponibilizam ações reutilizáveis de alto nível |

### Fluxo da arquitetura

```text
Factory
   ↓
Gera dados

API Service
   ↓
Executa requisições

Page Object
   ↓
Interage com a interface

Custom Command
   ↓
Combina ações reutilizáveis

Spec
   ↓
Descreve o cenário + valida o resultado
```

Essa abordagem evita que regras de geração de dados, chamadas HTTP, seletores e interações de UI fiquem concentradas nos arquivos de teste.

---

## 7. Estratégia de testes

A suíte combina duas camadas complementares:

### E2E / Frontend

Valida o comportamento da aplicação através da interface, incluindo fluxos de usuário e resultados apresentados na tela.

### API

Valida diretamente os endpoints, permitindo verificar regras de negócio, respostas HTTP e cenários negativos de forma mais rápida e isolada.

Essa combinação aumenta a cobertura sem depender exclusivamente de testes E2E.

---

## 8. Matriz de testes

### E2E / Frontend

| ID     | Cenário                           | Tipo     | Resultado esperado                                     |
| ------ | --------------------------------- | -------- | ------------------------------------------------------ |
| E2E-01 | Login e Logout com usuário válido | Positivo | Usuário realiza login, acessa a Home e realiza logout  |
| E2E-02 | Login com credenciais inválidas   | Negativo | Login não é realizado e mensagem de erro é apresentada |
| E2E-03 | Criação de produto                | Positivo | Produto é criado e aparece na lista                    |

### API

| ID     | Cenário                                 | Tipo     | Resultado esperado                                           |
| ------ | --------------------------------------- | -------- | ------------------------------------------------------------ |
| API-01 | Criação de usuário                      | Positivo | Usuário é criado com sucesso e recebe um `_id`               |
| API-02 | Criação de usuário com e-mail duplicado | Negativo | API rejeita o cadastro e retorna erro de e-mail já utilizado |
| API-03 | Criação de produto por administrador    | Positivo | Usuário administrador consegue criar um produto              |

---

## 9. Execução

Executar todos os testes:

```bash
npm test
```

Executar em modo interativo:

```bash
npm run cy:open
```

Executar em Chrome:

```bash
npm run test:chrome
```

---

## 10. Princípios aplicados

O projeto foi estruturado considerando:

* Separação de responsabilidades
* Reutilização de código
* Dados dinâmicos através de factories
* Encapsulamento de chamadas API
* Page Object Model
* Custom Commands para ações de alto nível
* Cobertura de cenários positivos e negativos
* Legibilidade e manutenção
* Estrutura preparada para evolução da suíte sem overengineering


---

## 11. Autor

Paulo Moral - QA Engineer

^^
