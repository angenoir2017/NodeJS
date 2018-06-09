var Client = require('../../models/client');

var createClient = function(req , res){
  var client = new Client(req.body);

  client.save(function(err,client){
    if(err){res.send(500,err);}
    res.json(200,client);
  });
};
var getClients = function(req,res){
  Client.find(function(err,clients){
    if(err){res.send(500,err);}
    res.json(200,clients);
  });
};
var getClient = function(req,res){
  Client.findById(req.params.id, function(err,client){
    if(err){res.send(500,err);}
    res.json(200,client);
  });
};

var updateClient = function(req ,res){
  Client.findById(req.params.id, function(err,client){
    if(err){res.send(500,err);}
    
        if(req.body.nom){client.nom = req.body.nom;}
        if(req.body.prenom){client.prenom = req.body.prenom;}
        if(req.body.username){client.username = req.body.username;}
        if(req.body.password){client.password = req.body.password;}
        if(req.body.type){client.type = req.body.type;}
        if(req.body.solde){client.solde = req.body.solde;}
      client.save(function(err,client){
            if(err){res.send(500,err);}
            res.json(200,client);
          });
  });
};

var deleteClient = function(req, res){
  Client.findByIdAndRemove(req.params.id, function(err, client){
      if(err){res.send(500,err);}
      res.json(200,{"deleted":true});
  });
};

module.exports ={
  createClient,
  getClients,
  getClient,
  updateClient,
  deleteClient
};
