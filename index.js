const express = require("express")
const exphbs = require("express-handlebars")  // exphbs --> express handlebars
const mysql = require("mysql2")

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')
// config pra usar o handlebars, só da pra trabalhar com ele se usar essas duas linhas

app.use(express.static('public'))

app.use(express.urlencoded({
  extended: true
}))

app.use(express.json())

app.post('/criar', (requisicao, resposta) => {
  const descricao = requisicao.body.descricao
  const completa = 0

  const sql = `
    INSERT INTO tarefas(descricao, completa)
    VALUES ('${descricao}', '${completa}')
  `

  conexao.query(sql, (erro) => {
    if (erro) {
      return console.log(erro)
    }

    resposta.redirect('/')
  })
})

app.get("/", (req, rep) => {
  rep.render("home")
})

const conexao = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mariobros",
  database: "todoapp"
})

conexao.connect((erro) => {
  if (erro) {
    return console.log(erro)
  }

  console.log("ta conectado")

  app.listen('3000', () => {
    console.log("ta rodando brother")
  })
})

// nodemon --> serve para reiniciar o servidor toda vez que tiver uma alteração
// hanldebars --> "html", responsavel pelas pages