const express = require('express')
const app = express()
const port = 3000

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/home.html")
})

app.get("/ser",(req,res)=>{
    res.sendFile(__dirname+"/public/services.html")
})
app.get("/con",(req,res)=>{
    res.sendFile(__dirname+"/public/contact.html")
})
app.get("/help",(req,res)=>{
    res.sendFile(__dirname+"/public/help.html")
})
app.get("/abt",(req,res)=>{
    res.sendFile(__dirname+"/public/aboutus.html")
})

app.listen(port,(req,res)=>{
    console.log("Server has started")
})