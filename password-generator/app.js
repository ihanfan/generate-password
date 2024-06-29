const express = require('express')
const { engine } = require('express-handlebars')
const app = express()
const port = 3000
const randomPassword = require("./public/javascripts/randomPassword")
 
app.engine('.hbs', engine({extname: '.hbs'}))
app.set('view engine', '.hbs')
app.set('views', './views')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))



app.get('/', (req, res) => {
  res.render('index')
})

app.post("/", (req, res) => {
  const options = req.body
  const password = randomPassword(options)
  console.log(options)
  res.render("index", { password, options })
})

app.listen(port, () => {
  console.log(`express server is running on http://localhost:${port}`)
})