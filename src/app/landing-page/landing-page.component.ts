import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private router: Router,)
  {

  }

  redirectToFormBuilder()
  {
    this.router.navigate(['/build']);
  }
  redirectToFormsList()
  {
    this.router.navigate(['/forms']);
  }
  redirectToEnquiries()
  {
    this.router.navigate(['/filler']);
  }

  ngOnInit(): void {

  }

}
