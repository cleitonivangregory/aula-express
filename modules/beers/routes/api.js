var express = require('express');
var router = express.Router();
var Controler = require('../controller.js');

/* GET home page. */
router.get('/', function(req, res, next) {
	Controler.retrieve(res, req);
//  res.render('index', { title: 'Listagem de Cervejas' });
});

router.post('/', function(req, res, next) {
	Controler.create(res, req);
 // res.render('index', { title: 'Listagem de Cervejas' });
});

module.exports = router;
