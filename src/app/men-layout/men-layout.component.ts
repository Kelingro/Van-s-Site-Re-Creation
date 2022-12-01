import { Component, OnInit } from '@angular/core';
import { pinkmodel } from '../pinkcard/pinkmodel';
import { mock_list_carousel } from '../card-carousel/mock_list_carousel';
import { pink_mock_list } from '../pinkcard/pink_mock_list';
import { PinkService } from './Pink.Service';

@Component({
  selector: 'app-men-layout',
  templateUrl: './men-layout.component.html',
  styleUrls: ['./men-layout.component.css']
})
export class MenLayoutComponent implements OnInit {

  pinks: pinkmodel[] = [];

  constructor(private PinkService:PinkService) {  }

  ngOnInit(): void {
    this.PinkService.getPinks().subscribe((data: pinkmodel [])=> {
      console.log("fetching products...");
      for(var pink of data){
        console.log(pink);
        this.pinks.push(pink);
      }
    })
  }

}
