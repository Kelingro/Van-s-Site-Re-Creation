import { Component, OnInit } from '@angular/core';
import { cardModel } from '../card-list/card_model';
import { mock_list_card } from '../card-list/mock_list_card';
import { mock_list_shoe } from '../data-bound-shoe/mock_list_shoe';
import { ShoeModel } from '../data-bound-shoe/mock_shoe_model';
import { CardsService } from './Cards.Service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  shoes: ShoeModel [] = [];
  cards: cardModel [] = [];

  constructor(private CardsService:CardsService) {
    for (var shoe of mock_list_shoe)  {
      this.shoes.push(shoe);
    }
    for (var card of mock_list_card) {
      this.cards.push(card);
    }
  }
  ngOnInit(): void {
    this.CardsService.getCards().subscribe((data: cardModel []) =>{
      console.log("fetchign cards")
      console.log(data)
    });
    throw new Error('Method not implemented.');
  }

}