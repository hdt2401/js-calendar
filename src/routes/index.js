module.exports = app => {
  const home = require('../controllers/home.js');
  var router = require('express').Router();
  
  router.get('/', home.homePage);
  // router.get('/redirect', home.homePageRedirect);
  
  app.use('/home', router);
}