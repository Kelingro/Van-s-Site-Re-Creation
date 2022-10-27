import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-bound-shoe',
  templateUrl: './data-bound-shoe.component.html',
  styleUrls: ['./data-bound-shoe.component.css']
})
export class DataBoundShoeComponent {

  @Input() img: string;
  @Input() title: string;

  constructor() {
  
    this.img = "";
    this.title = "";

  }
}