var express = require('express');
var router = express.Router();
var Controler = require('../controller.js');

/* GET home page. */
router.get('/', function(req, res, next) {
	Controler.retrieve(res, req);
	//Controler.get(res, req);
});

router.post('/', function(req, res, next) {
	Controler.create(res, req);
});

router.put('/:id', function(req, res, next) {
	Controler.update(res, req);
});

module.exports = router;
