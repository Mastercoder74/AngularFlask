import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  showShort: boolean = false;

  tempString: string;

  num = 5;

  shortArray: Array<string>;

  constructor() {
    this.shortArray = [];
    this.tempString = "";
   }

  addShort() {
    this.shortArray.push(this.tempString);
  }

  ngOnInit(): void {
  }

}
