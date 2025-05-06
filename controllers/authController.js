exports.generateToken = (req, res) => {
    const { tempToken } = req.body
    if (!tempToken) return setTimeout(() => {
      res.status(400).json({ error: 'tempToken is required' })
    }, 3000)
  
    const header = Buffer.from(JSON.stringify({ alg: 'HS256', typ: 'JWT' })).toString('base64')
    const payload = Buffer.from(JSON.stringify({ tempToken, timestamp: Date.now() })).toString('base64')
    const signature = 'fake-signature'
    setTimeout(() => {
      res.json({ fakeJwt: `${header}.${payload}.${signature}` })
    }, 3000)
  }