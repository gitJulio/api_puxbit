var express = require('express')
var router = express.Router()
var padres = require('../controller/padres/padres-controller')



/*GET padres page*/
router.get('/getPadres', padres.getPadres)

module.exports=router
