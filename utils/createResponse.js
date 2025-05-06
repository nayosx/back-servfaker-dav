exports.createResponse = data => {
    const now = new Date().toISOString().replace('T', ' ').substr(0, 19)
    return {
      header: {
        idTransaccion: 'bdf5fd9c-bf6a-4d60-8086-a',
        idSesion: '124999519233026',
        codigo: 0,
        descripcion: 'OK',
        fechaHora: now
      },
      body: data
    }
  }