import { Component, OnInit } from '@angular/core';
import { ReservationService } from 'src/app/services/reservation/reservation.service';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.scss']
})
export class ReservationListComponent implements OnInit {
  reservations : any;
  constructor(private reservationService : ReservationService) { }

  ngOnInit(): void {
    this.reservationService.getAll().subscribe(
      res =>{
        this.reservations=res;
        console.log("omg", this.reservations);
        
      }
    )
  }

  deleteReservation(reservation:any){
    this.reservationService.delete(reservation).subscribe(
      res =>{
        console.log("omg", res);
      }
    )
  }


}
