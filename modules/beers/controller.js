var Model = require('./model');

var Controler = {
   create: function(res, req){
      var dados = {
        name: "Skol",
        description: "Mijo de rato",
        alcohol: 4.5,
        price: 3.0,
        category: "pilsen"
     };

     var model = new Model(dados);
     model.save(function(err, data){
        if (err){
          console.log('Erro: ', err);
            msg = 'Erro' + err;
        } else {
            console.log('gravou cerveja: ', data);
            //var c = JSON.parse(data);
            msg = '<h2>Cerveja criada com sucesso:</h2><br> ' + data;
       }
      res.json(msg);
     });
   },
   update: function(res, req){
     var query = {name: /skol/i};
     var mod = {
         name: "Brahma",
        alcohol: 4,
        price: 6,
        category: "pilsen"
     };
     var optional = {
         upset: false,
        mult: false
     };

     Model.update(query, mod, optional, function(err, data){
      if (err){
         console.log("erro", err);
         msg = 'Erro:' + err;
      } else {
         console.log("update", data);
         msg = '<h3>Dados atualizados!</h3><br/>Registros alterados: ' + data.n + ".";
      }
      res.json(msg);
     });
   },
   retrieve: function(res, req){
      var query = {};

      Model.find(query, function(err, data){
         if (err){
         console.log("erro", err);
         msg = 'erro: ' + err;
         } else {
            console.log("Listagem: ", data);
            msg = '<h2>Lista de Cervejas:</h2><br/>';
            for(var i = 0; i < data.length; i++)
            {
              msg += "Name: " + data[i].name + " - Description: " + data[i].description + " - category: " + data[i].category + " - alcohol: " + data[i].alcohol + " - Price: " + data[i].price +"<br/>";
            }
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