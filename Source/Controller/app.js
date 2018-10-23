var http = require('http');
<<<<<<< HEAD
var fs = require('fs');
var vm = require('vm');
var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var session = require('cookie-session');

var mysql = require('mysql');

var utilisateurService=require('./UtilisateurService');
=======
var express = require('express');


var fs = require('fs');
var vm = require('vm');


var io = require('socket.io');

var bodyParser = require('body-parser');
var mysql = require('mysql');

var io = require('socket.io');
var session = require("express-session")({
    secret: 'secret',
    resave: true,
    saveUninitialized:true
});
var sharedsession = require("express-socket.io-session");



var utilisateurService = require('./UtilisateurService');
>>>>>>> origin/Gilles


var urlencodedParser = bodyParser.urlencoded({
    extended: true
});



//----------------------------------- Appel de fichier -----------------------------------------


<<<<<<< HEAD
var contentBD = fs.readFileSync('./Persistence.js');


=======


var contentBD = fs.readFileSync('./Persistence.js');
>>>>>>> origin/Gilles
var contentModel = fs.readFileSync('../Model/Evenement.js');
var contentModelUtilisateur = fs.readFileSync('../Model/Utilisateur.js');



//---------------------------------- Configuration -------------------------------------------

var app = express();

<<<<<<< HEAD



app.use('/Utilisateur',utilisateurService);


app.use(session({
    secret: 'secret'
}));
=======
var server = http.createServer(app);

io = io(server);





app.use(session)


io.use(sharedsession(session));

app.set('socketio',io);








>>>>>>> origin/Gilles



app.use(function (req, res, next) {

    if (typeof (req.session.prenomUtilisateurConnecter) == 'undefined') {
        req.session.prenomUtilisateurConnecter = 'p';
    }


    if (typeof (req.resultsTop) == 'undefined') {
        req.resultsTop = [];
    }

<<<<<<< HEAD
    

=======
    session.io = io;
    


>>>>>>> origin/Gilles
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

<<<<<<< HEAD


app.listen(8080);
=======
app.use('/Utilisateur', utilisateurService);

server.listen('8080');

>>>>>>> origin/Gilles
