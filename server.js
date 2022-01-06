
//const http=require('http');
const express = require('express');
const path=require('path');

var app=new express();
var router=express.Router();

app.use(express.static(path.join(__dirname,)));
app.set('view engine', 'ejs');
// ----------------------------
app.get("/",(req,res)=>{
   // res.status(200).send("OK");
    res.render("index");
});

// ----------------------------------------
app.listen(3000);


