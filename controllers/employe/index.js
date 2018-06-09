var Employe = require('../../models/employer');

var createEmploye = function(req , res){
  var employe = new Employe(req.body);

  employe.save(function(err,employe){
    if(err){res.send(500,err);}
    res.json(200,employe);
  });
};
var getEmployes = function(req,res){
  Employe.find(function(err,employes){
    if(err){res.send(500,err);}
    res.json(200,employes);
  });
};
var getEmploye = function(req,res){
  Employe.findById(req.params.id, function(err,employe){
    if(err){res.send(500,err);}
    res.json(200,employe);
  });
};

var updateEmploye = function(req ,res){
  Employe.findById(req.params.id, function(err,employe){

    if(err){res.send(500,err);}

    if(req.body.code){employe.code = req.body.code;}
      if(req.body.nom){employe.nom = req.body.nom;}
        if(req.body.prenom){employe.prenom = req.body.prenom;}
        if(req.body.username){employe.username = req.body.username;}
        if(req.body.password){employe.password = req.body.password;}
        if(req.body.groupe){employe.groupe = req.body.groupe;}
        if(req.body.status){employe.status = req.body.status;}


      employe.save(function(err,employe){
            if(err){res.send(500,err);}
            res.json(200,employe);
          });
  });
};

var deleteEmploye = function(req, res){
  Employe.findByIdAndRemove(req.params.id, function(err, employe){
      if(err){res.send(500,err);}
      res.json(200,{"deleted":true});
  });
};

module.exports ={
  createEmploye,
  getEmployes,
  getEmploye,
  updateEmploye,
  deleteEmploye
};
