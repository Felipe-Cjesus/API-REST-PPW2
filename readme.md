<h1 align = "center">
    <img src = "https://i.pinimg.com/originals/ca/ed/5e/caed5e2e5fa8da98e7077290f0ef5505.jpg">
</h1>

# 🏆 Api de futebol ⚽
## Projeto Final - PPW II 

<h1 align = "center">
    <a href = "https://projetofinal-ppw2.herokuapp.com/">🚀 Acessar aplicação</a>
</h1>

## O que a aplicação é capaz de fazer 🏁
### API de manipulação de dados de Futebol. Foi desenvolvido dois end points cada um com sua API REST / CRUD. Esta API foi desenvolvida extraindo dados de uma API externa.
 
---
## Link API Externa ✔
- https://app-ppw2.herokuapp.com/api/clubes
    - Esta gera uma estrutura com dados de clubes de futebol

---
## Schema de criação

    POST para criação de País

    {
    nome: String,
    continente: String,
    sigla: String,
    capital: String
    }

    POST para criação de Jogador
    // Propriedade clube deve ser informado o id utilizando a API Externa

    {
    nome: String,
    idade: Number,
    posicao: Array,
    num_camisa: Number,
    clube: Object,
    nacionalidade: String,
    pais: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Pais"
        }
    }
---
## End Points ✔
- https://projetofinal-ppw2.herokuapp.com/api/jogador
    - Esta gera uma estrutura com dados de jogadores de futebol
### Exemplo de Resposta

    {
    "posicao": [
      "Atacante",
      "Segundo Atacante"
    ],
    "_id": "60dd01186980e12e3c4340a5",
    "nome": "Messi",
    "idade": 34,
    "num_camisa": 10,
    "clube": "60dc5b31dfb2da7e58984579",
    "nacionalidade": "Argentino",
    "createdAt": "2021-06-30T23:41:12.659Z",
    "updatedAt": "2021-07-02T12:13:49.340Z",
    "__v": 0
    }

  Passando o ID na URL  para personalizar a requisição. Trazendo as informações de Clube da API externa

    // GET https://projetofinal-ppw2.herokuapp.com/api/jogador/60dd01186980e12e3c4340a5
---
    {
    "posicao": [
        "Atacante",
        "Segundo Atacante"
    ],
    "_id": "60dd01186980e12e3c4340a5",
    "nome": "Messi",
    "idade": 34,
    "num_camisa": 10,
    "clube": {
        "_id": "60dc5b31dfb2da7e58984579",
        "clube": "Barcelona FC",
        "anoFundacao": 1899,
        "pais": "Espanha",
        "sigla": "ESP",
        "createdAt": "2021-06-30T11:53:21.802Z",
        "updatedAt": "2021-06-30T11:53:21.802Z",
        "__v": 0
    },
    "nacionalidade": "Argentino",
    "createdAt": "2021-06-30T23:41:12.659Z",
    "updatedAt": "2021-07-02T12:13:49.340Z",
    "__v": 0
    }

Utilizando a query string para personalizar a requisição.

    // GET https://projetofinal-ppw2.herokuapp.com/api/jogador?idade=28

    // Resposta será todos os jogadores cadastrados correspondente a idade filtrada.

- https://projetofinal-ppw2.herokuapp.com/api/pais
    - Esta gera uma estrutura com dados de países
### Exemplo de Resposta
    {
    "_id": "60de56b6d5a48f27e4841f92",
    "nome": "Brasil",
    "continente": "America do Sul",
    "sigla": "BR",
    "capital": "Brasilia",
    "createdAt": "2021-07-01T23:58:46.926Z",
    "updatedAt": "2021-07-01T23:58:46.926Z",
    "__v": 0
    }

 Utilizando a query string para personalizar a requisição.

    // GET https://projetofinal-ppw2.herokuapp.com/api/pais?continente=Europa

    // Resposta será todos os países do continente Europeu cadastrados.

---

## 💻 Tecnologias
- [Git](https://git-scm.com) ✅
- [Node.js](https://nodejs.org/en/) ✅
- [VSCode](https://code.visualstudio.com/) ✅
- [MongoDB](https://mongodb.com/) ✅
- [Heroku](https://heroku.com/) ✅

## 📚 Bibliotecas
- [Express](https://expressjs.com/pt-br/)
- [Axios](https://www.npmjs.com/package/node-html-parser)
- [Mongoose](https://mongoosejs.com/)
- [Dotenv](https://www.npmjs.com/package/dotenv)

> Status do Projeto: Implatação Concluido ✅
-     Planejamento de melhorias no projeto em andamento... ❗🆕
---
Desenvolvido por [Felipe Costa de Jesus](https://www.instagram.com/felipe.cjesus/) 😎🤙
- Em parceria com [Pedro Ventura](https://github.com/pventur-a) 😎🤙