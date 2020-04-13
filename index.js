const express = require('express')
const app = express()
const router = require('./routes/routes')
const port = process.env.PORT || 5000
const cors = require('cors')
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use('/', router, function (req, res) {
    res.send("Rest API ")
})
app.listen(port, function() {
    console.log(`Server running on http://localhost:${port}`)
})
module.exports = app