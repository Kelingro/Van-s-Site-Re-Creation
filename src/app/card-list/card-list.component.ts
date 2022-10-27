import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {

  @Input() img: string;
  @Input() title: string;
  @Input() title2: string;
  @Input() txtB: string;


  constructor() {
  
    this.img = "";
    this.title = "";
    this.title2 = "";
    this.txtB = "";

  }

}
