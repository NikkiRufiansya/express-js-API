const express = require('express')
const app = express()
const router = require('./routes/routes')
const cors = require('cors')
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use('/', router, function (req, res) {
    res.send("rest api by nikki")
})
app.listen(5000, function() {
    console.log(`Server running on http://localhost:5000`)
})
module.exports = app
