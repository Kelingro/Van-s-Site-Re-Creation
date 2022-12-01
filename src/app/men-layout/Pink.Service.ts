import { Injectable } from "@angular/core"
import { AngularFireDatabase } from "@angular/fire/compat/database"
import { pinkmodel } from "../pinkcard/pinkmodel"

@Injectable(
    {providedIn: 'root'}
)
export class PinkService
{
    private pinkendpoint = "pink";
    private baseURL:string = "https://vans-recreation-default-rtdb.firebaseio.com/";

    constructor (private db:AngularFireDatabase) {
        
    }
    

    getPinks(){
        return this.db.list<pinkmodel>("pink").valueChanges();
    }

    addPink(pink:pinkmodel) {
        this.db.list<pinkmodel>("pink").push(pink);
    }
}

