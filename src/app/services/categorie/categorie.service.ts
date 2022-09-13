import { Injectable } from '@angular/core';
import { WebRequestService } from '../webRequest/web-request.service';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor( private webRequestService : WebRequestService) { }

  getAll(){
    return this.webRequestService.get("api/categorie")
  }
  get(id:string){
    return this.webRequestService.get(`api/categorie/${id}`)
  }
}
