const { createResponse } = require('../utils/createResponse')

exports.login = (req, res) => {
  const loginData = {
    niu: 124999519,
    nombre: 'LINARES MELARA, ROBERTO CARLOS',
    tipoDocumento: 'DUI',
    numeroDocumento: '034207448',
    ultimoLogin: '2024-11-27 23:20:59',
    modoAutenticacion: 0
  }
  res.json(createResponse(loginData))
}