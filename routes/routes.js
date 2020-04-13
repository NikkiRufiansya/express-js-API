const router = require('express').Router()
const user = require('./user.router.js')
router.use('/users', user)
module.exports = router