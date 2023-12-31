const express = require('express')
const hbse = require("express-handlebars")
const morgan = require('morgan')
const path = require('path')
const app = express()
const route = require('./routes/index')
const port = 2000

app.use(express.static(path.join(__dirname, 'public/')))
 
// app.use(morgan('combined'))

app.engine('hbs', hbse.engine({
  extname: '.hbs'
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'))

route(app)


app.listen(port, () => {
    console.log(`Server running at port ${port}`)
})
