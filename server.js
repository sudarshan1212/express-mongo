const express = require('express');
const errorHandler = require('./middleware/errorHandler');
// const { connect } = require('mongoose');
const connectDb = require('./config/dbConnections');

const dotenv=require("dotenv").config()
connectDb()
const app=express()
const port=process.env.PORT||5000
app.use(express.json())
app.use("/api/contacts",require("./contactRoutes"))
app.use("/api/users",require("./userRoutes"))
app.use(errorHandler)

app.listen(port,()=>{
    console.log(`This server is running on ${port}`);
})