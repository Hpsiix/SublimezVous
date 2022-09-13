import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from 'src/app/services/utilisateur/utilisateur.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn =this.utilisateurService.isLoggedIn;;
  constructor(public utilisateurService: UtilisateurService) { }

  ngOnInit(): void { 
    console.log(this.utilisateurService.isLoggedIn);
    
  }

}
