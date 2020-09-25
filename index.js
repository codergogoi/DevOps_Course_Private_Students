const express = require('express')
const cors = require('cors');

const app = express()
app.use(cors())

app.use('/',(req,res,next) => {
    res.status(200).json({ message: "Root Endpoint"})
})

var server = app.listen(3000, () => {

    let host = server.address().address;
    let port = server.address().port
     console.log(`Listening to ${host}:${port}`)
})