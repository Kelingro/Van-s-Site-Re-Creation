import { Component } from '@angular/core';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent {

  img: string;
  price: number;
  sku: string;

  constructor() { 

  this.img = "https://static.wikia.nocookie.net/kingdomheartsfanfiction/images/4/49/D0g.jpg/revision/latest?cb=20100911230718";
  this.price = 0;
  this.sku = "xxxxx";
  }
}


