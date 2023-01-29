const express = require("express")
const req = require("express/lib/request")
const path = require('path')
const res = require("express/lib/response")
const app = express ()
const PORT = 3000

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./public/index.html'))
})
app.get('/notes',(req,res)=>{
    res.sendFile(path.join(__dirname,'./public/notes.html'))
})
app.listen(PORT,()=>{
    console.log("app is listening")
})