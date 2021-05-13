const express = require("express");
const app = express();
const http = require('http').Server(app)
const axios = require('axios')

app.post('/rooms', async (req, res) => {
})

app.get('/rooms/:roomId', async (req, res) => {
})

app.delete('/rooms/:roomId', async (req, res) => {
})

app.listen("3020", () => {
    console.log("Vili backend is up!")
})