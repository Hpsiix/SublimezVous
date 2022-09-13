import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategorieService } from 'src/app/services/categorie/categorie.service';

@Component({
  selector: 'app-prestation-list',
  templateUrl: './prestation-list.component.html',
  styleUrls: ['./prestation-list.component.scss']
})
export class PrestationListComponent implements OnInit {
  categorieId:any;
  prestations:any;
  categorie:any;
  constructor(private route: ActivatedRoute,private categorieService:CategorieService) { }

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

}
