
var mySqlClient;



function connexionBD(mysql){

    mySqlClient = mysql.createConnection({
        host     : "localhost",
        user     : "root",
        password : "root",
        database : "gestionevent"
        });
    
    console.log("connexion réussi");
    
    
}



function afficherTop(nombre){
    
    var res=[];
    var selectQuery="SELECT Nom_evenement,Nombre_de_participants,Liens FROM evenement ORDER BY Nombre_de_participants DESC  LIMIT ? ";
    
    return new Promise((resolve,reject)=>
                       mySqlClient.query(selectQuery , [nombre] , function select(error, results, fields) {
                        
                        if (error) {
                            mySqlClient.end();
                            reject(error); 
                        }

                        if(results.length>0){                

                            for(var i =0;i<results.length;i++){   
                                var result = results[i];
                                
                                var evenement= new Evenement();
                                
                                var nomEvenement = result['Nom_evenement'];
                                var participants = result['Nombre_de_participants'];
                                var lien         = result['Liens'];
                                
                                evenement.setNom(nomEvenement);
                                evenement.setParticipants(participants);
                                evenement.setLien(lien);
                                 
                              
                                
                                
                                res.push(evenement);
                               
                            }
                        }
                      console.log(res);
                        resolve(res);
                      
                        })
                      );
    
}