const express = require('express');
const Router=express.Router()
const {getContact,
       getContactId,
       postContact,
       putContact,
       dltContact}=require("./controllers/contactControllers")
       
Router.route("/").get(getContact).post(postContact)
Router.route("/:id").get(getContactId).put(putContact).delete(dltContact)
 

  module.exports=Router