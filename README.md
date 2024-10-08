# Projeto de Teste para Vaga de Desenvolvedor

Este projeto foi desenvolvido como parte de um teste para vaga de desenvolvedor, envolvendo a criação de uma API RESTful com NestJS e uma interface frontend com Vue.js.

## Sumário

- [Requisitos](#requisitos)
- [Configuração do Backend (NestJS)](#configuração-do-backend-nestjs)
- [Configuração do Frontend (Vue.js)](#configuração-do-frontend-vuejs)
- [Funcionalidades](#funcionalidades)
- [Endpoints da API](#endpoints-da-api)
- [Considerações Finais](#considerações-finais)

## Requisitos

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)
- [Vue CLI](https://cli.vuejs.org/)

## Configuração do Backend (NestJS)

1. **Clone o repositório:**

   ``` 
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio/backend

2. **Instale as dependências:**

   ```
   npm install

3. **Inicie o servidor NestJS:**

   ``` 
   npm run start

4. **Acesse a API:**

       A API estará disponível em http://localhost:3000.

## Configuração do Frontend (Vue.js)

1. **Navegue até o diretório frontend:**

         cd ../frontend

2. **Instale as dependências:**

         npm install

3. **Inicie o servidor de desenvolvimento Vue.js:**

       npm run serve

4. **Acesse a interface:**

    A interface estará disponível em http://localhost:8080.

## Funcionalidades

    CRUD de Itens: O sistema permite criar, ler, atualizar e deletar itens.
    Integração Frontend e Backend: A interface em Vue.js consome a API          desenvolvida em NestJS.
    Formulário de Edição: Os itens podem ser editados diretamente na interface.

## Endpoints da API

    GET /items: Retorna todos os itens.
    POST /items: Cria um novo item.
    PUT /items/:id: Atualiza um item existente.
    DELETE /items/:id: Deleta um item.

## Considerações Finais

Este projeto é uma implementação básica para demonstrar o uso de NestJS e Vue.js em conjunto, focando nas operações CRUD e integração entre frontend e backend. Sinta-se à vontade para expandir as funcionalidades e melhorar a estrutura do código conforme necessário.
