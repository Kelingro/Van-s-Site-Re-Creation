import { Component, OnInit } from '@angular/core';
import { pinkmodel } from '../pinkcard/pinkmodel';
import { mock_list_carousel } from '../card-carousel/mock_list_carousel';
import { pink_mock_list } from '../pinkcard/pink_mock_list';

@Component({
  selector: 'app-men-layout',
  templateUrl: './men-layout.component.html',
  styleUrls: ['./men-layout.component.css']
})
export class MenLayoutComponent implements OnInit {

  pinks: pinkmodel[] = [];

  constructor() { 
    for (var pink of pink_mock_list)  {
      this.pinks.push(pink);
    }
  }

  ngOnInit(): void {
  }

}
