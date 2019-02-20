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

// parse application/json
app.use(bodyParser.json())

//**************Llamada de archivos en rutas*******************
var alumnosRouter = require('./routes/alumnos-routes');
var padresRouter = require('./routes/padres-routes');
var profesoresRouter=require('./routes/profesores-routes');
var loginRouter=require('./routes/login-routes');


//**************Ruta principal de archivo***************
app.use('/api/alumnos', cors(op), alumnosRouter);
app.use('/api/padres', cors(op), padresRouter);
app.use('/api/profesores', cors(op), profesoresRouter);
app.use('/api/login', cors(op), loginRouter)



app.listen(process.env.PORT, () => {
  console.log("Api Puxbit is up");
})
