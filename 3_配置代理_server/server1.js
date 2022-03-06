const express = require("express")
const axios = require("axios")
const {response} = require("express");
const app = express()

app.use((request, response,next)=>{
    console.log('有人请求了server1')
    next()
})
app.get("/students", (request, response) =>{
    const students = [
        {id:'001', name: 'tom', age:18},
        {id:'002', name:'mike', age:19},
        {id: '003', name: 'nancy', age:20}
    ]
    response.send(students)
})
app.listen(5000,(err)=>{
    if(!err) {
        console.log('server1 启动成功')
    }
})