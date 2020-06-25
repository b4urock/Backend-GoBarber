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
