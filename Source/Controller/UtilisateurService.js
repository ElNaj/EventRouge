<<<<<<< HEAD
var http = require('http');
var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var session = require('cookie-session');
var express = require('express');
var vm = require('vm');
var bodyParser = require('body-parser');
=======
var express = require('express');
var http = require('http');


var bodyParser = require('body-parser');

var express = require('express');

var fs = require('fs');
var vm = require('vm');

>>>>>>> origin/Gilles
var mysql = require('mysql');
var Cryptr = require('cryptr');
var async = require('async');


<<<<<<< HEAD
=======
var ent = require('ent');


var session = require("express-session");



>>>>>>> origin/Gilles



var router = express.Router();

//---------------------------------- Configuration -------------------------------------------

var urlencodedParser = bodyParser.urlencoded({
    extended: true
});


var contentBD = fs.readFileSync('./Persistence.js');
var contentModelUtilisateur = fs.readFileSync('../Model/Utilisateur.js');


var cryptr = new Cryptr('mySecretKey');


<<<<<<< HEAD

router.use(session({
    secret: 'secret'
=======
router.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized:false
>>>>>>> origin/Gilles
}));



router.use(function (req, res, next) {
<<<<<<< HEAD
    if (typeof (req.session.erreurs) == 'undefined') {
        req.session.erreurs = [""];
    }
    next();
});
    
=======

    if (typeof (req.session.erreurs) == 'undefined') {
        req.session.erreurs = [""];
    }


    if (typeof (req.session.prenomUtilisateurConnecter) == 'undefined') {
        req.session.prenomUtilisateurConnecter = 'p';
    }

    next();
});

>>>>>>> origin/Gilles



//-------------------------------------- Page d'inscription ------------------------------------------


router.get('/Inscription', function (req, res) {

    res.render('../../v1.0_View/html/Inscription.ejs', {
        erreurs: req.session.erreurs
    });
});




router.post('/traitementInscription', urlencodedParser, function (req, res) {

    vm.runInThisContext(contentBD);
    connexionBD(mysql);


    vm.runInThisContext(contentModelUtilisateur);


    req.session.erreurs.pop();

    var nom = req.body.nomSaisie;
    var prenom = req.body.prenomSaisie;
    var email = req.body.emailSaisie;
    var mdp = req.body.mdpSaisie;
    var confirm = req.body.confirmSaisie;
    var ville = req.body.villeSaisie;

    if (nom.length < 3) {
        req.session.erreurs.push("Nom incorrect");
    }

    if (prenom.length < 3) {
        req.session.erreurs.push("Prenom incorrect");
    }

    if (mdp.length < 6) {
        req.session.erreurs.push("Mots de passe trop court, 6 caractère mininum");
    }
    if (mdp != confirm) {
        req.session.erreurs.push("Le mots de passe et la sa confirmation ne sont pas identique");
    }

    mdp = cryptr.encrypt(mdp);


    var utilisateur = new Utilisateur(nom, prenom, email, mdp, ville);

    if (req.session.erreurs.length == 0) {
        ajouterUtilisateur(utilisateur);
    }


    res.redirect('/Utilisateur/Inscription');


});


//-------------------------------------------- Connexion --------------------------------------------




router.post('/TraitementConnexion', urlencodedParser, async function (req, res) {

    vm.runInThisContext(contentBD);
    connexionBD(mysql);

<<<<<<< HEAD
    
    
    vm.runInThisContext(contentModelUtilisateur);
    
    
=======


    vm.runInThisContext(contentModelUtilisateur);


>>>>>>> origin/Gilles
    var iden = req.body.identifiant;
    var mdp = req.body.pass;



    var utilisateur = await connexionUtilisateur(iden);


    req.session.prenomUtilisateurConnecter = utilisateur.getPrenom();
<<<<<<< HEAD
    
    var mdpRenvoyer = utilisateur.getMots_de_passe();
    
       
    
    if(mdpRenvoyer!= '' ){
       mdpRenvoyer=cryptr.decrypt(mdpRenvoyer);
       }
    
    
    

    if (mdp==mdpRenvoyer) {

        res.redirect('/Utilisateur/PageUser');

    }else{
=======

    var mdpRenvoyer = utilisateur.getMots_de_passe();



    if (mdpRenvoyer != '') {
        mdpRenvoyer = cryptr.decrypt(mdpRenvoyer);
    }




    if (mdp == mdpRenvoyer) {

        res.redirect('/Utilisateur/PageUser');

    } else {
>>>>>>> origin/Gilles

        res.redirect('/');

    }


});


//------------------------------------- Page Utilisateur-----------------------------------------

router.get('/PageUser', function (req, res) {

    res.render('../../v1.0_View/html/Accueil_user.ejs', {
        prenom: req.session.prenomUtilisateurConnecter
    });
});




    var prenom = req.session.prenomUtilisateurConnecter;

    res.render('../../v1.0_View/html/Accueil_user.ejs', {
        prenom: prenom
    });


    var io = req.app.get('socketio');

    io.on('connection', function (socket) {

        // 2)Reception de l'identifiant
        socket.on("login", function (userdata) {
            socket.handshake.session.userdata = userdata;
            socket.handshake.session.save();
            
            console.log( socket.handshake.session.userdata+" vient de se connecter !");
           
            //3)envoie message aux autres clients
            socket.broadcast.emit('nouveau_Utilisateur', {
                prenom:  socket.handshake.session.userdata,
                message: " a rejoint le chat "
            });

        });



        //6)Reception message et renvoie partout
        socket.on('message', function (data) {
            
            
            var message = ent.encode(data.message);
            var prenom = ent.encode(data.prenom);
            console.log(prenom + ' me parle ! Il me dit : ' + message);


            socket.broadcast.emit('message', {
                prenom: prenom,
                message2: message
            });

        });
        
        //9)Reception du message de deconnexion
        socket.on('discon', function (message) {
            message = ent.encode(message);
            console.log(message);
            socket.broadcast.emit('deco', message);
        });


    });

});
>>>>>>> origin/Gilles


//---------------------------------------- Deconnexion -----------------------------------------------

router.get('/TraitementDeco', function (req, res) {

    
    req.session.prenomUtilisateurConnecter='undefined';
    
    res.redirect('/');
    
});



module.exports=router;



