var express =require('express')
var router =express.Router()
var profesores = require('../controller/profesores/profesores-controller')



/*Get Profesores*/
router.get('./getProfesores', profesores.getProfesores)

module.exports=router;
