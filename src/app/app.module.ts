import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FormsModule } from '@angular/forms';
import { FormsListComponent } from './forms-list/forms-list.component';
import { FormComponent } from './form/form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { EnquiriesListComponent } from './enquiries-list/enquiries-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    FormsListComponent,
    FormComponent,
    FormBuilderComponent,
    EnquiriesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
