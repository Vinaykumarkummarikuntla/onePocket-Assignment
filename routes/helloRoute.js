const express = require('express')

const router = express.Router()

const helloController = require('../controllers/helloController')

// GET Hello World!
router.get('/helloWorld', helloController.handleHelloRequest)


module.exports = router
