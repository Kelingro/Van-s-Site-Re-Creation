import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-carousel',
  templateUrl: './card-carousel.component.html',
  styleUrls: ['./card-carousel.component.css']
})
export class CardCarouselComponent {

  @Input() upper: string; 
  @Input() lower: string;
  @Input() descr: string;

  constructor() { 
    this.upper="";
    this.lower="";
    this.descr="";
  }

}
