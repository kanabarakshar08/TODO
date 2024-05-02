const express = require('express');
const port = 8055;
const app = express();
const mongoose = require('mongoose')
const db = require('./config/mongoose');
app.use(express.urlencoded());
app.use("/task",require('./router/todo'))
app.listen(port,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("server is runing in port",port);
    }
})