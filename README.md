# Tecte tecnico Jack Expers - Giovanny Cordeiro.

## Setup project

Caso você já tenha o MYSQL em sua maquina é possivel que ele estara rodando em background 
e por conta disso ocorra algum erro no momento da inicialização do container, para evitar
qualquer erro verifique se serviço esta rodando seguindo os passos
-  `Win + R`
- digite "services.msc" e aperte ENTER
- Localize o MySQL e caso esteja rodando interrompa o serviço.

Após essa verificação, siga os passos seguintes para configuração do projeto no 
ambiente de desenvolvimento.

- Rode o comando `docker-compose up` para configurar o ambiente de desenvolvimento.
- Para acessar o front end abra o navegador com na url "http://localhost:5173/".