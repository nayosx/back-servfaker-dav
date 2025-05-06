const fs = require('fs')
const { createResponse } = require('../utils/createResponse')

exports.serveFake = filePath => (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'))
    res.json(createResponse(data))
  } catch {
    res.status(500).json({ message: 'Error leyendo el archivo' })
  }
}