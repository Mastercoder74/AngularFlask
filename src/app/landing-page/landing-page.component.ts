import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  showShort: boolean = false;

  inputString: string[];

  radioOption1: string[];
  radioOption2: string[];
  radioOption3: string[];
  radioOption4: string[];

  multiOption1:string[];
  multiOption2:string[];
  multiOption3:string[];
  multiOption4:string[];

  iValue: number;

  num = 5;

  formArray: Array<string>;
  optionsArray: Array<string>;

  constructor()
  {
    this.formArray = [];
    this.optionsArray = [];
    this.inputString = [];
    this.questionType = [];
    this.iValue = 0;

    this.radioOption1 = [];
    this.radioOption2 = [];
    this.radioOption3 = [];
    this.radioOption4 = [];

    this.multiOption1 = [];
    this.multiOption2 = [];
    this.multiOption3 = [];
    this.multiOption4 = [];
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

  addRadio()
  {
    let blank = "";
    this.questionType[this.iValue] = "Radio"
    this.formArray.push(blank);
    this.iValue++;
  }

  addMulti()
  {
    let blank = "";
    this.questionType[this.iValue] = "Multi"
    this.formArray.push(blank);
    this.iValue++;
  }

  onSubmit()
  {
    let formLength = this.formArray.length
    this.formArray = [];
    this.optionsArray = [];

    for(let i = 0; i < formLength; i++)
    {
      this.formArray.push(this.inputString[i]);

        this.optionsArray.push(this.radioOption1[i])
        this.optionsArray.push(this.radioOption2[i])
        this.optionsArray.push(this.radioOption3[i])
        this.optionsArray.push(this.radioOption4[i])

        this.optionsArray.push(this.multiOption1[i])
        this.optionsArray.push(this.multiOption2[i])
        this.optionsArray.push(this.multiOption3[i])
        this.optionsArray.push(this.multiOption4[i])

    }

  }

  ngOnInit(): void {
  }

}
