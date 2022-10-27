import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pinkcard',
  templateUrl: './pinkcard.component.html',
  styleUrls: ['./pinkcard.component.css']
})
export class PinkcardComponent {

  @Input() gifs: string;
  @Input() title: string;
  @Input() subt: string;
  @Input() but: string;


  constructor() { 
    this.gifs = "";
    this.title = "";
    this.subt = "";
    this.but = "";
  }

}
