const express = require('express')
const router = express.Router()
const controller = require('./controller')

router.get('/', controller.home)
router.post('/run', controller.validate,
                    controller.run)

module.exports = router