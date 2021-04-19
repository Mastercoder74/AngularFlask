import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formArray: Array<string>;
  optionsArray: Array<string>;

  inputString: string[];

  answerString: string[];

  radioOption1: string[];
  radioOption2: string[];
  radioOption3: string[];
  radioOption4: string[];

  multiOption1:string[];
  multiOption2:string[];
  multiOption3:string[];
  multiOption4:string[];

  questionType: string[];

  iValue: number;

  constructor(private route: ActivatedRoute,)
  {
    this.formArray = [];
    this.optionsArray = [];
    this.inputString = [];
    this.answerString = [];
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

    this.id = '';
  }

  getFormData()
  {
    this.id = this.route.snapshot.params['id'];
  }

  id: string;

  ngOnInit(): void {
    this.getFormData();
  }

}
