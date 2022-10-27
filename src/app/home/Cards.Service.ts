import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { cardModel } from "../card-list/card_model"

@Injectable(
    {providedIn: 'root'}
)
export class CardsService
{

    private baseURL:string = "https://vans-recreation-default-rtdb.firebaseio.com/"
    private CardsEndPoint:string = "Cards.json"

    constructor (private http:HttpClient) {
        
    }

    getCards(){
        return this.http.get<cardModel []>(this.baseURL + this.CardsEndPoint)
    }

    getCar(index:number)
    {
        return this.http.get<cardModel>(this.baseURL + 'Cards' + '/' + index + '.json')
    }

}

