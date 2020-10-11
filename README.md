<h1 align="center">
GoBarber API
</h1>

<p align="center">An API for barber appointment and scheduling.</p>

<p align="center">
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs Welcome">
  </a>
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square" alt="License MIT">
  </a>
</p>

<hr />

## Features

A Node.js API built with Express and all the latest tools and best practices in development!

- ⚡ **Express** — A web framework for Node
- 💾 **TypeOrm** — SQL dialect ORM for Node.js
- 🍂 **MongoDB** — document-based database
- 🔑 **Redis** — key-value data model
- ⌨️ **Yup** - Object schema validation
- 🔺 **Sentry** - cross-platform application monitoring
- 📧 **Ethereal** - Send e-mails with Node.JS
- 💖 **Lint** — ESlint/Prettier/Editor Config

## Dependencies

- [Node.js](https://nodejs.org/en/) 12.0.0 ou >
- [Yarn](https://yarnpkg.com/pt-BR/docs/install)
- [Docker](https://www.docker.com/)

## Prerequisites

_In the next few weeks, I plan to include Docker directly in the repository with docker-compose, until there this step is required._

To run this server you will need three containers running on your machine.

To do so, you will need to run the following commands:

- `docker run --name redis -p 6379:6379 -d -t redis:alpine`;
- `docker run --name mongodbGoBarber -p 27017:27017 -d -t mongo`;
- `docker run --name gostack_postgres -e POSTGRES_PASSWORD=docker -p 5433:5432 -d postgres`;

_Remember: If you restart your machine, you will need to start again the server with `docker start <container_id>`._

## Getting started

_Consider checking out the FrontEnd [repository](https://github.com/b4urock/gobarber_web)!_

1. Clone this repo using `https://github.com/b4urock/Backend-GoBarber.git`
2. Move to the appropriate directory: `cd Backend-GoBarber`.<br />
3. Run `yarn` to install dependencies.<br />
4. Copy the `.env.example` file and rename it to `.env`.<br/>
5. Add all the values for the environment variables.<br/>
6. Run `yarn start`  to run the server at `http://localhost:3000`.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

Portuguese

# Recuperacao de Senha
**RF**

- O usuário deve poder recuperar sua senha informando o seu e-mail;
- O usuário deve receber um e-email com instruções de recuperação de senhas;
- O usuário deve poder resetar sua senha;

**RNF**

- Utilizar Mailtrap para testar em desenvolvimento;
- Utilizar Amazon SES para envios em produçãoç
- O envio de e-mails deve acontecer em segundo plano (background job);

**RN**

- O Link enviado por email para resetar senha, deve expirar em 2 horas;
- O usuário precisa confirmar a nova senha ao resetar sua senha;



# Atualizacao do Perfil

**RF**

- O usuário deve poder atualizar seu nome, email e senha;

**RN**

- O usuário não pode alterar seu email para um email já utilizado;
- Para atualizar sua senha, o usuário deve informar a senha antiga;
- Para atualizar sua senha, o usuário precisa confirmar a nova senha;

# Painel do Prestador

**RF**

- O usuário deve poder listar seus agendamentos de um dia específicoç
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;

**RNF**

- Os agendamentos do prestador no dia devem ser armazenadas em cache;
- As notificações do prestador devem ser armazenadas no MongoDB (muitos dados de forma performátida - Schema Free (tabelas sem estar estruturadas);
- As notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io - biblioteca (protocolo para websocket permite transitar informações em tempo real)

**RN**

- A Notificação deve ter um status de lida ou não-lida para que o prestador possa controlar;


# Agendamento de Servicoes

**RF**

- O usuário deve poder listar todos os prestadores de serviço cadastrados
- O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador;
- O usuário deve poder listar horários disponíveis em um dia específico de um prestador;

**RNF**

- A listagem de prestadores deve ser armazenada em cache;

**RN**

- Cada agendamento deve durar 1 hora exatamente;
- Os agendamentos devem estar disponíveis entre 8h às 18h (Primeiro às 8h, último às 17h);
- O usuário não pode agendar um horário previamente ocupado;
- O usuário não pode agendar um horário que já passou;
- O usuário não pode agendar serviços consigo mesmo;
