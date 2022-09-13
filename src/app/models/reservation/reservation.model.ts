import { Prestation } from "../prestation/prestation.model";
import { Utilisateur } from "../utilisateur/utilisateur.model";

export class Reservation {
    reference="";
    message="";
    tva =0;
    debut= new Date();
    raison_annulation="";
    date_creation= new Date();
    estPaye=false;
    utilisateur= new Utilisateur();
    prestations = [];
    constructor( ){
    }
}
