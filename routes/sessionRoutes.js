const router = require('express').Router()
const validate = require('../middlewares/validateRequestFormat')
const { login } = require('../controllers/sessionController')

router.post('/sesion/login', validate, login)

module.exports = router