import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'src/app/models/utilisateur/utilisateur.model';
import { UtilisateurService } from 'src/app/services/utilisateur/utilisateur.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email ="";
  password="";
  inputError=false;
  constructor(private utilisateurService: UtilisateurService,private router: Router,) { }

  ngOnInit(): void {
    
  
  }

  login() : void{
  
    let user = new Utilisateur();
    user.email=this.email;
    user.mot_de_passe=this.password;
    this.utilisateurService.login(user).subscribe(
      (res: any)=>{
      console.log(res);
        this.inputError=false;
        this.router.navigate([""]);
      },
      error =>{
        this.inputError=true;
      }
    );
  }

}
