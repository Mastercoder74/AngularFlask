import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {

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

  constructor(private route: ActivatedRoute, private http:HttpClient,)
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

    this.formID = '';
  }

  dataStorage: any;

  save()
  {
      let url = 'http://127.0.0.1:5000/answer';

      this.http.post(url,{

        answerString : this.answerString,

      }).toPromise().then(() => {

      })
  }

  formID: string;

  getAnswersData()
  {
    this.id = this.route.snapshot.params['id'];

    let url0 = 'http://127.0.0.1:5000/answer/' + this.id;

    this.http.get(url0,{

    }).toPromise().then((data) => {

      var dataInfo = JSON.parse(JSON.stringify(data));

      this.formID = dataInfo.formID;

      this.answerString = dataInfo.answerString;

      this.getFormData();

    })
  }

  getFormData()
  {
    let url = 'http://127.0.0.1:5000/user/' + this.formID;

    this.http.get(url,{

    }).toPromise().then((data) => {

      var dataInfo = JSON.parse(JSON.stringify(data));

      this.dataStorage = data;

      this.formArray = dataInfo.formArray

      this.optionsArray = dataInfo.optionsArray;
      this.inputString = dataInfo.inputString;
      this.questionType = dataInfo.questionType;

      this.radioOption1 = dataInfo.radioOption1;
      this.radioOption2 = dataInfo.radioOption2;
      this.radioOption3 = dataInfo.radioOption3;
      this.radioOption4 = dataInfo.radioOption4;

      this.multiOption1 = dataInfo.multiOption1;
      this.multiOption2 = dataInfo.multiOption2;
      this.multiOption3 = dataInfo.multiOption3;
      this.multiOption4 = dataInfo.multiOption4;

    })
  }

  id: string;

  ngOnInit(): void {
    this.getAnswersData();
  }

}
