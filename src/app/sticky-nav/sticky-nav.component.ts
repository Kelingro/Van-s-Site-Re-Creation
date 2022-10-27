import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sticky-nav',
  templateUrl: './sticky-nav.component.html',
  styleUrls: ['./sticky-nav.component.css']
})
export class StickyNavComponent {

  @Input() title: string;
  @Input() txt1: string;
  @Input() txt2: string;
  @Input() txt3: string;
  @Input() txt4: string;

  constructor() { 

    this.title = "";
    this.txt1 = "";
    this.txt2 = "";
    this.txt3 = "";
    this.txt4 = "";
    
  }



}
