const express = require('express')
const router = express.Router()
const controller = require('../models/controller')

router.post('/sendCode', controller.sendCode)
router.post('/validate', controller.user)

module.exports = router