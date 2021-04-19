import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form-filler',
  templateUrl: './form-filler.component.html',
  styleUrls: ['./form-filler.component.css']
})
export class FormFillerComponent implements OnInit {

  dataStorage: any;

  answersStorage: any;

  constructor(private http:HttpClient, private router: Router,) { }

  getFormsList()
  {
    let url = 'http://127.0.0.1:5000/users';

    this.http.get(url,{

    }).toPromise().then((data) => {

      var dataInfo = JSON.parse(JSON.stringify(data));

      this.dataStorage = data;

      // alert(dataInfo.length)
      // alert(dataInfo[0].formArray[0])

    })
  }

  getAnswersList()
  {
    let url = 'http://127.0.0.1:5000/answers';

    this.http.get(url,{

    }).toPromise().then((data) => {

      var dataInfo = JSON.parse(JSON.stringify(data));

      this.answersStorage = data;

      // alert(dataInfo.length)
      // alert(dataInfo[0].formArray[0])

    })
  }

  redirectToForm(id: string)
  {
    this.router.navigate(['/form', id]);
  }

  redirectToAnswers(id: string)
  {
    this.router.navigate(['/answers', id]);
  }

  reloadData()
  {
    if (!localStorage.getItem('ref'))
    {
      localStorage.setItem('ref', 'no reload')
      location.reload()
    }
    else
    {
      localStorage.removeItem('ref')
    }
  }

  deleteItem(id: string)
  {
    let url = 'http://127.0.0.1:5000/delete/' + id;

    this.http.delete(url,{

    }).toPromise().then((data) => {

      var dataInfo = JSON.parse(JSON.stringify(data));

      this.dataStorage = data;

      // alert(dataInfo.length)
      // alert(dataInfo[0].formArray[0])

    })

    this.reloadData();
  }

  ngOnInit(): void {

    this.getFormsList();

    this.getAnswersList();

  }

}
