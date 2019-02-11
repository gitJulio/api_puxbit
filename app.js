const express = require('express')
const bodyParser = require('body-parser');
const app = express()
// const hbs = require('hbs');
require('./config/config')
// require('./hbs/helpers.js')
// const pg = require('pg')
const pg = require('./config/ps_conection')

// app.use(require('./routes/historias'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}))
// // parse application/json
// app.use(express.static(__dirname + '/public'))
//
// //Express HBS engine -
// hbs.registerPartials(__dirname + '/views/parciales');
// app.set('view engine', 'hbs');

app.get('/', async (req, res) => {
  let view_alumnos = await pg.func('public.ft_view_get_alumnos').catch(err => {
    console.log(err);
  })
  console.log(view_historias);
})

app.listen(process.env.PORT, () => {
  console.log("Api Puxbit is up");
})