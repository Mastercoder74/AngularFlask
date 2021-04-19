import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms-list',
  templateUrl: './forms-list.component.html',
  styleUrls: ['./forms-list.component.css']
})
export class FormsListComponent implements OnInit {

  dataStorage: any;

  constructor(private http:HttpClient,) { }

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

  ngOnInit(): void {

    this.getFormsList();

  }

}
