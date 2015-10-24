var Model = require('./model');

var Controler = {
   create: function(res, req){
      var dados = req.body;

     var model = new Model(dados);
     model.save(function(err, data){
        if (err){
          console.log('Erro: ', err);
            msg = err;
        } else {
            console.log('gravou cerveja: ', data);
            msg = data;
       }
      res.json(msg);
     });
   },
   update: function(res, req){
     var query = {_id: req.params.id};
     var mod = req.body;
     var optional = {
         upset: false,
        mult: false
     };

     Model.update(query, mod, optional, function(err, data){
      if (err){
         console.log("erro", err);
         msg = err;
      } else {
         console.log("update", data);
         msg = data;
      }
      res.json(msg);
     });
   },
   retrieve: function(res, req){
      var query = {};

      Model.find(query, function(err, data){
         if (err){
         console.log("erro", err);
         msg = err;
         } else {
            console.log("Listagem: ", data);
            msg = data;
         }
         res.json(msg);

      });
   },
   get: function(res, req){
     var query = {_id: req.params.id};
      Model.findOne(query, function(err, data){
         if (err){
         console.log("erro", err);
         msg = err;
         } else {
            console.log("Listagem: ", data);
            msg = data;
         }
         res.json(msg);
      });
   },
   del: function(res, req){
      var query = {name: /brahma/i};

      Model.remove(query, function(err, data){
         if (err){
            console.log("erro", err);
            msg = 'erro: ' + err;
         } else {
            console.log("Deletado com sucesso.", data);
            msg = '<h2>Cerveja deletada com sucesso.</h2><br />' + data;
         }
        res.json(msg);
       });
   }
};   

module.exports = Controler;