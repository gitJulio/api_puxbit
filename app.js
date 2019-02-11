const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const pg = require('./config/ps_conection')
require('./config/config')
//***************cors*****************
var op = {
  origin: true,
  methods: ['POST', 'GET'],
  credentials: true,
  maxAge: 3600
}
var cors = require('cors')
//***************cors*****************

//Rutas
var alumnosRouter = require('./routes/alumnos-routes');

// app.use(require('./routes/historias'))

app.use('/api/alumnos', cors(op), alumnosRouter);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}))


// app.get('/', async (req, res) => {
//   let view_alumnos = await pg.func('public.ft_view_get_alumnos').catch(err => {
//     console.log(err);
//   })
//   console.log(view_alumnos);
// })

app.listen(process.env.PORT, () => {
  console.log("Api Puxbit is up");
})