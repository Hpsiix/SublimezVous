import { Injectable } from '@angular/core';
import { Utilisateur } from 'src/app/models/utilisateur/utilisateur.model'; 
import { WebRequestService } from '../webRequest/web-request.service';
import { BehaviorSubject, tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  private _isLoggedIn = new BehaviorSubject(false);
  isLoggedIn = this._isLoggedIn.asObservable();

  constructor(private webRequestService :WebRequestService) { 
    const token = localStorage.getItem("auth");
    this._isLoggedIn.next(!!token)
    console.log(this._isLoggedIn);
    
  }
  login(user: Utilisateur){
      return this.webRequestService.post("api/auth/login",user).pipe(
      tap((res:any) => {
        this._isLoggedIn.next(true);
        localStorage.setItem("auth",res.token);
        localStorage.setItem("id",res.utilisateurId);
        localStorage.setItem("nom",res.utilisateurNom)
        console.log("dark",res.token);
          
      })
  )}

  getUser(user: Utilisateur){
    return this.webRequestService.post("api/auth/login",user)
  }
}


