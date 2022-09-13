import { Injectable } from '@angular/core';
import { Reservation } from 'src/app/models/reservation/reservation.model';
import { WebRequestService } from '../webRequest/web-request.service';
@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor( private webRequestService : WebRequestService) { }
  getAll(){
    return this.webRequestService.get("api/reservation")
  }
  get(id:string){
    return this.webRequestService.get(`api/reservation/${id}`)
  }
  create(id:string, reservation: Reservation){
    return this.webRequestService.post(`api/reservation/${id}`,reservation)
  }
  delete(id:string){
    return this.webRequestService.delete(`api/reservation/${id}`)
  }
}
