var express = require('express'),
  router = express.Router(),
  Article = require('../models/article');

module.exports = function (app) {
  app.use('/', router);
  app.use('/dest.ejs', router);
};

router.get('/', function (req, res, next) {
  var articles = [new Article(), new Article()];
    res.render('index', {
      title: 'Generator-Express MVC',
      articles: articles
    });
});

router.get('/dest.html', function (req, res, next) {
  console.log(req);
  var articles = [new Article(), new Article()];
    res.render('dest', {
      title: req.query.cities,
      articles: articles
    });
    
});