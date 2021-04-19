import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enquiries-list',
  templateUrl: './enquiries-list.component.html',
  styleUrls: ['./enquiries-list.component.css']
})
export class EnquiriesListComponent implements OnInit {

  dataStorage: any;

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

  redirectToForm(id: string)
  {
    this.router.navigate(['/build', id]);
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

  }

}
