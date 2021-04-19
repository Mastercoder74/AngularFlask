import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { FormsListComponent } from './forms-list/forms-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  {path: '',redirectTo: '/home', pathMatch: 'full'},

  {path: 'form/:id', component: FormComponent },
  {path: 'home', component: LandingPageComponent},
  {path: 'home/:id', component: LandingPageComponent},
  {path: 'forms', component: FormsListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
