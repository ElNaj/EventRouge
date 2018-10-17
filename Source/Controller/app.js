var http = require('http');
var fs = require('fs');
var vm = require('vm');
var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var session = require('cookie-session');

var mysql = require('mysql');

var utilisateurService=require('./UtilisateurService');


var urlencodedParser = bodyParser.urlencoded({
    extended: true
});



//----------------------------------- Appel de fichier -----------------------------------------


var contentBD = fs.readFileSync('./Persistence.js');


var contentModel = fs.readFileSync('../Model/Evenement.js');
var contentModelUtilisateur = fs.readFileSync('../Model/Utilisateur.js');



//---------------------------------- Configuration -------------------------------------------

var app = express();




app.use('/Utilisateur',utilisateurService);


app.use(session({
    secret: 'secret'
}));



app.use(function (req, res, next) {

    if (typeof (req.session.prenomUtilisateurConnecter) == 'undefined') {
        req.session.prenomUtilisateurConnecter = 'p';
    }


    if (typeof (req.resultsTop) == 'undefined') {
        req.resultsTop = [];
    }

    

    next();


});

//--------------------------------------- Page d'accueil -------------------------------------------

app.get('/', async function (req, res) {

    vm.runInThisContext(contentBD);
    connexionBD(mysql);

    req.session.erreurs = [""];
    vm.runInThisContext(contentModel);


    var resultsTop = await afficherTop(3);


    res.render('../../v1.0_View/html/Accueil.ejs', {
        resultsTop: resultsTop,
        prenom: req.session.prenomUtilisateurConnecter
    });



});

//---------------------------------------------------------------------------------------------------


app.use(express.static('../v1.0_View/public'));



app.listen(8080);
