import { Component, OnInit } from '@angular/core';
import { carouselmodel } from '../card-carousel/carousel_model';
import { mock_list_carousel } from '../card-carousel/mock_list_carousel';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit {
  cards: carouselmodel[] = [];

  constructor() { 
    for (var card of mock_list_carousel)  {
      this.cards.push(card);
    }
  }

  ngOnInit(): void {
  }

}
