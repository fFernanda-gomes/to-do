const express = require("express")
const exphbs = require("express-handlebars")  // exphbs --> express handlebars

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')
// config pra usar o handlebars, só da pra trabalhar com ele se usar essas duas linhas

app.get("/", (req, rep) => {
  rep.render("home")
})

app.listen('3000', () => {
  console.log("ta rodando brother")
})

// nodemon --> serve para reiniciar o servidor toda vez que tiver uma alteração
// hanldebars --> "html", responsavel pelas pages