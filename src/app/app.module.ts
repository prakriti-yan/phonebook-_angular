import { DataService } from './data.service';
// import { CourseService } from './course/courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { AddFormComponent } from './add-form/add-form.component';
import { NumberListComponent } from './number-list/number-list.component';
import { environment } from '../environments/environment.prod';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore'

@NgModule({
  declarations: [
    AppComponent,
    AddFormComponent,
    NumberListComponent  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
