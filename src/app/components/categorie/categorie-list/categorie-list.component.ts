import { Component, OnInit } from '@angular/core';
import { Categorie } from 'src/app/models/categorie/categorie.model';
import { CategorieService } from 'src/app/services/categorie/categorie.service';

@Component({
  selector: 'app-categorie-list',
  templateUrl: './categorie-list.component.html',
  styleUrls: ['./categorie-list.component.scss']
})
export class CategorieListComponent implements OnInit {
  categories : any | undefined;
  constructor(private categorieService:CategorieService) { }

  ngOnInit(): void {
    this.categorieService.getAll().subscribe(
      res =>{
        this.categories=res;
      }
    )
  }

}
