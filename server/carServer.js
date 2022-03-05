const express = require('express')
const axios = require('axios')
const {request, response} = require("express");
const app = express()

app.use((request, response, next) => {
    console.log('有人请求了server2')
    next()
})
app.get("/cars", (request, response) => {
    const cars = [
        {id: '001', name: '奥迪', age: 18},
        {id: '002', name: '宝马', age: 19},
        {id: '003', name: '凯迪拉克', age: 20}
    ]
    response.send(cars)
})


app.listen(5001, (err) => {
    if (!err) {
        console.log('car server启动成功!')
    }
})