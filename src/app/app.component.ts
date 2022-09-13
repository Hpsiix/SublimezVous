import { Component } from '@angular/core';
import { UtilisateurService } from './services/utilisateur/utilisateur.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sublimez-vous';

  constructor(public utilisateurService: UtilisateurService){

  }
}
