const express = require('express')
const app = express()
const PORT = 3000

app.listen(PORT, (error) => {
    error
        ? console.error(error)
        : console.log(`Server is running on http://127.0.0.1:${PORT}`)
})

app.get('/', (req, res) => {
    res.send(`<h1> Develop commit. </h1>`)
})
