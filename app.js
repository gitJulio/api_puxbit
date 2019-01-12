//Requires
var express = require('express');

//Inicializar variables
var app = express();
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}))

// parse application/json
app.use(bodyParser.json())

//Rutas
app.get('/', (req, res, next) => {
  let data = {
    ok: true,
    mensaje: 'Petición realizada correctamente'
  }
  res.send(data)
})

app.get('/padres/:id', (req, res) => {
  let padres = {
    id: req.params.id,
    nombre: 'Eduardo',
    apellido: 'Calix'
  }
  res.send(padres)
})

app.post('/alumnos', (req, res) => {
  let alumno = {
    id: req.body.id,
    nombre: 'Julio',
    apellido: 'Bueso'
  }

  res.json(alumno)
})

//Escuchar peticiones
app.listen(3000, () => {
  console.log("Express server online");
});