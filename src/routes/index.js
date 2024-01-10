import auth from './auth.route';
import user from './user.route';

const initRoutes = app => {
  app.use('/api/v1/auth', auth);
  app.use('/api/v1/user', user);

  return app.use('/', (req, res) => {
    return res.send('Server on')
  })
}

module.exports = initRoutes;