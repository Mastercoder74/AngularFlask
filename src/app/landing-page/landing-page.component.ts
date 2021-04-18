import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  showShort: boolean = false;

  inputString: string[];
  iValue: number;

  num = 5;

  formArray: Array<string>;

  constructor()
  {
    this.formArray = [];
    this.inputString = [];
    this.questionType = [];
    this.iValue = 0;
  }

  questionType: string[];

  addShort()
  {
    let blank = "";
    this.questionType[this.iValue] = "Short"
    this.formArray.push(blank);
    this.iValue++;
  }

  addLong()
  {
    let blank = "";
    this.questionType[this.iValue] = "Long"
    this.formArray.push(blank);
    this.iValue++;
  }

  onSubmit()
  {
    let formLength = this.formArray.length
    this.formArray = [];

    for(let i = 0; i < formLength; i++)
    {
      this.formArray.push(this.inputString[i]);
    }

  }

  ngOnInit(): void {
  }

}
