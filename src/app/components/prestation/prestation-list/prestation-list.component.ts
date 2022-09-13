import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategorieService } from 'src/app/services/categorie/categorie.service';
import {MatDialog} from '@angular/material/dialog';
import { ModalComponent } from '../../modal/modal.component';
import { Reservation } from 'src/app/models/reservation/reservation.model';

export interface DialogData {
  reservationData:any;
}
@Component({
  selector: 'app-prestation-list',
  templateUrl: './prestation-list.component.html',
  styleUrls: ['./prestation-list.component.scss']
})
export class PrestationListComponent implements OnInit {
  categorieId:any;
  prestations:any;
  categorie:any;
  showReservation=false;
  reservation = new Reservation();
  constructor(private route: ActivatedRoute,private categorieService:CategorieService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.route.paramMap
    .subscribe(params => {
        this.categorieId = params.get('id');
        this.categorieService.get(this.categorieId).subscribe(
          res =>{
            this.categorie=res;
            this.prestations=this.categorie.prestations;
            console.log("omg", this.prestations);
            
          }
        )
    })
  }
  openDialog() {
    this.showReservation=true;
    const dialogRef = this.dialog.open(ModalComponent,{data:{ reservationData : this.reservation}});

    dialogRef.afterClosed().subscribe(result => {
      this.showReservation=false;
      console.log("tet",result);
    });
  }

}
