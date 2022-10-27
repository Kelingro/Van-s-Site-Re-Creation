import { Component } from '@angular/core';
import { cardModel } from './card-list/card_model';
import { mock_list_card } from './card-list/mock_list_card';
import { mock_list_shoe } from './data-bound-shoe/mock_list_shoe';
import { ShoeModel } from './data-bound-shoe/mock_shoe_model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Vans Work';
  shoes: ShoeModel [] = [];
  cards: cardModel [] = [];

  constructor() {
    for (var shoe of mock_list_shoe)  {
      this.shoes.push(shoe);
    }
    for (var card of mock_list_card) {
      this.cards.push(card);
    }
  }

}
