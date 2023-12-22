const express = require('express')
const morgan = require('morgan')
 
const app = express()

const port = 2000
 
app.use(morgan('combined'))
 
app.get('/', function (req, res) {
  res.send('hello, world!')
})

app.listen(port, () => {
    console.log(`Server running at port ${port}`)
})