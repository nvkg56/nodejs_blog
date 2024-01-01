const newsRouter = require('./news')
function route(app) {

    app.get('/', function (req, res) {
        res.render('home')
      })
   

      app.use('/news', newsRouter)

      app.get('/search', function (req, res) {
        console.log(req.query)
        res.render('search')
      })

}

module.exports = route
