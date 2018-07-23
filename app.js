var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var config = require('./config');
var router = require('./routes');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();
//new
process.env.NODE_ENV='development';

// Les Confifigurations
app.use(cors());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Nous definisons le chemin utilisee par 'express' pour aller
//chercher les js, les css, les images
app.use(express.static(path.join(__dirname, 'uploads')));

//on defini ici la page d'acceuil
app.use('/api', router);


function initModel(){
  mongoose.connect(config.db);
  mongoose.connection.on('error', function(err){
    console.log('echec lors de la connection a mongodb');
  });
}
initModel();

// Pour capturer l'erreur 404
app.use(function(req, res, next) {
  next(createError(404));
});

// Pour capturer d'autres erreur
app.use(function(err, req, res, next) {
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
  // definition sur  le locale, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
