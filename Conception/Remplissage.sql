
#------------------------------------------------------------
# Table: Role
#------------------------------------------------------------

INSERT INTO `gestionevent`.`role` (`IdRole`, `Nom`) VALUES ('1', 'Administrateur');
INSERT INTO `gestionevent`.`role` (`IdRole`, `Nom`) VALUES ('2', 'Utilisateur');
INSERT INTO `gestionevent`.`role` (`IdRole`, `Nom`) VALUES ('3', 'Visiteur');

#------------------------------------------------------------

#------------------------------------------------------------
# Table: Utilisateur
#------------------------------------------------------------


INSERT INTO `gestionevent`.`utilisateur` (`IdUtilisateur`, `Nom`, `Prenom`, `Email`, `Ville`, `Mot_de_passe`, `IdRole`) VALUES ('1', 'Silotia', 'Gilles', 'gillesilotia@gmail.com', 'Montpellier', 'gilles', '1');
INSERT INTO `gestionevent`.`utilisateur` (`IdUtilisateur`, `Nom`, `Prenom`, `Email`, `Ville`, `Mot_de_passe`, `IdRole`) VALUES ('2', 'El Fateoui', 'Najim', 'elfateoui.najim@gmail.com', 'Montpellier', 'najim', '1');


#------------------------------------------------------------
# Table: Evenement
#------------------------------------------------------------

INSERT INTO `gestionevent`.`evenement` (`IdEvenement`, `Nom_evenement`, `Lieu`, `Date_et_heure`, `Nombre_de_participants`, `Liens`, `Type_d_evenement`, `Descrption`) VALUES ('1','ELAN D ART','Le Corum','2018-10-02','15','http://www.montpellier-events.com/agenda/ELAN-D-ART','art','11ème édition de la manifestation d art contemporain de Montpellier');

INSERT INTO `gestionevent`.`evenement` (`IdEvenement`, `Nom_evenement`, `Lieu`, `Date_et_heure`, `Nombre_de_participants`, `Liens`, `Type_d_evenement`, `Descrption`) VALUES ('2', 'SNIPES BATTLE OF THE YEAR INTERNATIONAL 2018 ', 'La Sud de France Arena', '2018-10-17', '100', 'http://www.montpellier-events.com/agenda/SNIPES-BATTLE-OF-THE-YEAR-INTERNATIONAL-2018-MONTPELLIER-OCCITANIE', 'musique', 'La plus grande manifestation mondiale de danse Hip Hop revient  à Montpellier à la «Sud de France Arena » le samedi 17 novembre 2018, après 5 ans d’absence.');

INSERT INTO `gestionevent`.`evenement` (`IdEvenement`, `Nom_evenement`, `Lieu`, `Date_et_heure`, `Nombre_de_participants`, `Liens`, `Type_d_evenement`, `Descrption`) VALUES ('3', 'SLIMANE', 'Le Zénith Sud', '2018-10-19', '20', 'http://montpellierevents.fnacspectacles.com/place-spectacle/recherche/billet-MTZEN/ma-8.htm', 'musique', 'PRIX DES PLACE 38 à 43 eurosS');


#------------------------------------------------------------
# Table: Consulter
#------------------------------------------------------------

INSERT INTO `gestionevent`.`consulter` (`IdUtilisateur`, `IdEvenement`) VALUES ('1', '1');
INSERT INTO `gestionevent`.`consulter` (`IdUtilisateur`, `IdEvenement`) VALUES ('1', '2');
INSERT INTO `gestionevent`.`consulter` (`IdUtilisateur`, `IdEvenement`) VALUES ('1', '3');
INSERT INTO `gestionevent`.`consulter` (`IdUtilisateur`, `IdEvenement`) VALUES ('2', '2');

