var express = require('express');
var router = express.Router();

var Controler = require('./../controller');

/* GET home page. */
router.get('/', function(req, res, next) {
	Controler.list(res, req);
  	
});

module.exports = router;
