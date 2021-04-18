import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsListComponent } from './forms-list/forms-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  {path: '',redirectTo: '/home', pathMatch: 'full'},

  {path: 'home', component: LandingPageComponent},
  {path: 'forms', component: FormsListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
