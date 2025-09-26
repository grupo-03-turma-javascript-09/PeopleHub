<h1 align="center">PeopleHub</h1>

## Sobre o Projeto  

O **PeopleHub** nasceu da ideia de simplificar a gestão de colaboradores dentro de uma organização.  
Optamos por esse nome porque transmite a essência do projeto: um **hub de pessoas**, onde todas as informações relevantes sobre funcionários ficam centralizadas, acessíveis e organizadas.  

Nosso objetivo foi criar um sistema didático e funcional, capaz de demonstrar as operações fundamentais do CRUD (Create, Read, Update, Delete) aplicadas à área de Recursos Humanos.  

---

## Foco do Sistema  

O **PeopleHub** é um **Cadastro Básico de Funcionários**, com foco na **Gestão do Ciclo de Vida do Colaborador**.  

- **Inclusão (Create):** registrar novos colaboradores na base de dados.  
- **Consulta (Read):** acessar a lista completa ou detalhes individuais de cada colaborador.  
- **Atualização (Update):** modificar informações já cadastradas (como dados pessoais).  
- **Exclusão (Delete):** remover registros quando o vínculo é encerrado.  

---

## Estrutura e Modelagem de Dados  

A principal entidade do sistema é o **Colaborador**.  
Abaixo, apresentamos o **Diagrama Entidade-Relacionamento (DER)** que orienta a modelagem dos dados:  

![DER - Colaborador](https://github.com/grupo-03-turma-javascript-09/PeopleHub/blob/7c32558a1d8bcda50d6b6e4db1476be4843eebbc/img/Diagrama%20Der.png)  

---

## Métodos da API  

A API do PeopleHub expõe os seguintes endpoints:  

- **POST /colaboradores** → Cadastra um novo colaborador.  
- **GET /colaboradores** → Retorna a lista de colaboradores.  
- **GET /colaboradores/{id}** → Retorna os dados de um colaborador específico.  
- **PUT /colaboradores/{id}** → Atualiza as informações de um colaborador existente.  
- **DELETE /colaboradores/{id}** → Remove um colaborador do sistema.  

---

## Tecnologias Utilizadas  

- [NestJS](https://nestjs.com/) — Framework Node.js para construção da API.  
- [TypeScript](https://www.typescriptlang.org/) — Tipagem estática para maior confiabilidade.  
- [TypeORM](https://typeorm.io/) — ORM para mapeamento objeto-relacional.  
- [MySQL](https://www.mysql.com/) — Banco de dados relacional.  
- [Insomnia](https://insomnia.rest/) — Testes e documentação de requisições HTTP.  

---

## Como Executar o Projeto  


### Instalar dependências
```bash
npm install
```

#### Executar em modo desenvolvimento
```bash
npm run start:dev
```

