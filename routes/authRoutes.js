const router = require('express').Router()
const { generateToken } = require('../controllers/authController')

router.post('/generateToken', generateToken)

module.exports = router