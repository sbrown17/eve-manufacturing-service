var express = require('express');
var router = express.Router();
//const esiJS = require('esiJS')
//const esiClient = new esiJS()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
