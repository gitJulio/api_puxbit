var express = require('express')
var router = express.Router()
var alumnos = require('../controller/alumnos/alumnos-controller')



/* GET alumnos page. */
router.get('/getAlumnos',alumnos.getAlumnos)


module.exports = router
