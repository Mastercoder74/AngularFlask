import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  showShort: boolean = false;

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

  iValue: number;

  num = 5;

  formArray: Array<string>;
  optionsArray: Array<string>;

  constructor(private router: Router, private http:HttpClient, private route: ActivatedRoute,)
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

  questionType: string[];

  showFinishButton: boolean = false;
  showForm: boolean = false;

  finishButton()
  {
    this.showFinishButton = true;
  }

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

    this.showForm = true;

    this.save();

    this.router.navigate(['/forms']);

  }

  save()
  {
    if(this.updateMode)
    {
      let url = 'http://127.0.0.1:5000/update/' + this.id;

      this.http.put(url,{

        formArray : this.formArray,
        optionsArray : this.optionsArray,
        inputString : this.inputString,
        questionType : this.questionType,

        radioOption1 : this.radioOption1,
        radioOption2 : this.radioOption2,
        radioOption3 : this.radioOption3,
        radioOption4 : this.radioOption4,

        multiOption1 : this.multiOption1,
        multiOption2 : this.multiOption2,
        multiOption3 : this.multiOption3,
        multiOption4 : this.multiOption4

      }).toPromise().then(() => {

      })
    }
    else
    {
      let url = 'http://127.0.0.1:5000/add';

      this.http.post(url,{

        formArray : this.formArray,
        optionsArray : this.optionsArray,
        inputString : this.inputString,
        questionType : this.questionType,

        radioOption1 : this.radioOption1,
        radioOption2 : this.radioOption2,
        radioOption3 : this.radioOption3,
        radioOption4 : this.radioOption4,

        multiOption1 : this.multiOption1,
        multiOption2 : this.multiOption2,
        multiOption3 : this.multiOption3,
        multiOption4 : this.multiOption4

      }).toPromise().then(() => {

      })
    }
  }

  id: string;

  dataStorage: any;

  updateMode: boolean = false;

  getFormData()
  {
    this.id = this.route.snapshot.params['id'];

    if(this.id != null)
    {
      this.updateMode = true;
    }

    if(this.updateMode)
    {
      let url = 'http://127.0.0.1:5000/user/' + this.id;

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
  }

  ngOnInit(): void {
    this.getFormData();

    if(this.updateMode)
    {
      this.showFinishButton = true;
    }
  }

}
