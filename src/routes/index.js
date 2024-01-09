import auth from './auth.route';

const initRoutes = app => {
  app.use('/api/v1/auth', auth);

  return app.use('/', (req, res) => {
    return res.send('Server on')
  })
}

module.exports = initRoutes;