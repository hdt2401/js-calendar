import * as controller from '../controllers';

module.exports = app => {
  // const auth = require('../controllers/');
  const auth = controller.register();
  var router = require('express').Router();
  
  router.get('/', home.homePage);
  // router.get('/redirect', home.homePageRedirect);
  
  app.use('/home', router);
}