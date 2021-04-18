import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  showShort: boolean = false;

  num = 5;

  constructor() { }

  showShortAnswer()
  {
    this.showShort = true;
  }

  ngOnInit(): void {
  }

}
