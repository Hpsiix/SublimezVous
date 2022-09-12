import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'social-media-icons',
  templateUrl: './social-media-icons.component.html',
  styleUrls: ['./social-media-icons.component.scss']
})
export class SocialMediaIconsComponent implements OnInit {

  @Input() code : String | undefined;
  constructor() { }

  ngOnInit(): void {
    console.log(this.code);
    
  }

}
