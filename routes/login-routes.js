var express = require('express')
var router = express.Router()
var login = require('../controller/login/login-controller')


router.post('/login', login.login)

module.exports=router
