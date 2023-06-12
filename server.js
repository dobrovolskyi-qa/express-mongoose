const express = require('express')
const mongoose = require('mongoose')

const app = express()

const PORT = 3000

mongoose
    .connect(
        'mongodb+srv://admin:admin@cluster0.u6dwwfi.mongodb.net/?retryWrites=true&w=majority'
    )
    .then((res) => {
        console.log(`Connected to database`)
    })
    .catch((err) => {
        console.log(`Error connecting to database ${err}`)
    })

app.listen(PORT, (error) => {
    error
        ? console.error(error)
        : console.log(`Server is running on http://127.0.0.1:${PORT}`)
})

app.get('/', (req, res) => {
    res.send(`<h1> Develop commit. </h1>`)
})
