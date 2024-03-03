const express = require('express');
const { register, login, current } = require('./controllers/userController');
const validateTOken = require('./middleware/valitdaetoken');
const Router=express.Router()

Router.post("/register",register)
Router.post("/login",login)
Router.get("/current",validateTOken,current)

module.exports=Router