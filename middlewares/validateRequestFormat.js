module.exports = (req, res, next) => {
    const { header, body } = req.body || {}
    if (!req.body || typeof req.body !== 'object')
      return res.status(400).json({ error: 'El cuerpo debe ser un objeto JSON.' })
    if (!header || typeof header !== 'object')
      return res.status(400).json({ error: 'La propiedad "header" es requerida.' })
  
    const required = [
      'idTransaccion', 'idSesion', 'fechaHora',
      'usuario', 'canal', 'ip', 'dispositivo'
    ]
    for (const field of required) {
      if (!header.hasOwnProperty(field))
        return res.status(400).json({ error: `Falta campo "${field}" en header.` })
    }
    if (typeof header.idTransaccion !== 'string')
      return res.status(400).json({ error: 'idTransaccion debe ser string.' })
    if (typeof header.idSesion !== 'number')
      return res.status(400).json({ error: 'idSesion debe ser number.' })
    if (typeof header.fechaHora !== 'string')
      return res.status(400).json({ error: 'fechaHora debe ser string.' })
    if (typeof header.usuario !== 'string')
      return res.status(400).json({ error: 'usuario debe ser string.' })
    if (typeof header.canal !== 'string')
      return res.status(400).json({ error: 'canal debe ser string.' })
    if (typeof header.ip !== 'string')
      return res.status(400).json({ error: 'ip debe ser string.' })
    if (typeof header.dispositivo !== 'string')
      return res.status(400).json({ error: 'dispositivo debe ser string.' })
  
    if (!req.body.hasOwnProperty('body'))
      return res.status(400).json({ error: 'Propiedad "body" requerida.' })
    if (body !== null && typeof body !== 'object')
      return res.status(400).json({ error: 'body debe ser objeto o null.' })
  
    next()
  }