import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  showShort: boolean = false;

  tempString: string;
  iValue: number;

  num = 5;

  formArray: Array<string>;

  constructor()
  {
    this.formArray = [];
    this.tempString = "";
    this.questionType = [];
    this.iValue = 0;
  }

  questionType: string[];

  addShort()
  {
    this.questionType[this.iValue] = "Short"
    this.formArray.push(this.tempString);
    this.iValue++;
  }

  addLong()
  {
    this.questionType[this.iValue] = "Long"
    this.formArray.push(this.tempString);
    this.iValue++;
  }

  ngOnInit(): void {
  }

}
