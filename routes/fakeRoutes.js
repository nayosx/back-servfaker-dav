const fs = require('fs')
const path = require('path')
const router = require('express').Router()
const { serveFake } = require('../controllers/fakeController')


const FAKE_API_DIR = path.join(__dirname, '../jsons')

router.post(
  '/colecturia/usuario/info',
  serveFake(path.join(FAKE_API_DIR, 'consultaCliente.json'))
)

router.post(
  '/sesion/ConsultaSesion',
  serveFake(path.join(FAKE_API_DIR, 'consultaSesion.json'))
)


if (fs.existsSync(FAKE_API_DIR)) {
  fs.readdirSync(FAKE_API_DIR)
    .filter(f => f.endsWith('.json'))
    .forEach(file => {
      const route = '/' + path.basename(file, '.json')
      router.post(route, serveFake(path.join(FAKE_API_DIR, file)))
    })
}

module.exports = router