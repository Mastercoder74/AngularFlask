import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnswersComponent } from './answers/answers.component';
import { EnquiriesListComponent } from './enquiries-list/enquiries-list.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FormFillerComponent } from './form-filler/form-filler.component';
import { FormComponent } from './form/form.component';
import { FormsListComponent } from './forms-list/forms-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  {path: '',redirectTo: '/home', pathMatch: 'full'},

  {path: 'form/:id', component: FormComponent },
  {path: 'build', component: FormBuilderComponent},
  {path: 'build/:id', component: FormBuilderComponent},
  {path: 'forms', component: FormsListComponent},
  {path: 'home', component: LandingPageComponent},
  {path: 'enquiries', component: EnquiriesListComponent},
  {path: 'filler', component: FormFillerComponent},
  {path: 'answers/:id', component: AnswersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
