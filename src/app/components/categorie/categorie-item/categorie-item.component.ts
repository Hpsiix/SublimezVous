import { Component, OnInit ,Input} from '@angular/core';
import { Categorie } from 'src/app/models/categorie/categorie.model';

@Component({
  selector: 'app-categorie-item',
  templateUrl: './categorie-item.component.html',
  styleUrls: ['./categorie-item.component.scss']
})
export class CategorieItemComponent implements OnInit {
  @Input() categorie : Categorie | undefined;
  constructor() { }

  ngOnInit(): void {
    console.log("oui",this.categorie);
    
  }

}
