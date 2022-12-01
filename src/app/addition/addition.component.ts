import { Component, OnInit } from '@angular/core';
import { PinkService } from '../men-layout/Pink.Service';
import { pinkmodel } from '../pinkcard/pinkmodel';


@Component({
  selector: 'fm-add-product',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.css']
})
export class AdditionComponent implements OnInit {

  constructor(private ps:PinkService) { }

  ngOnInit(): void {
  }

  addProduct(pink:pinkmodel){
    console.log("You Clicked Add Product!");
    console.log(pink);
    this.ps.addPink(pink);

  }
}
