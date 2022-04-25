const express = require('express')
const app = express()

app.get('/auth', function (req, res) {
    console.log(req)
    res.status(401).end()
})

app.listen(5500)