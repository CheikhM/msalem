import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from "./material/material.module";
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CreateEmployeeComponent } from './employees/create-employee/create-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
   MaterialModule,
   ReactiveFormsModule,
  //AngularFireDatabaseModule,
  //AngularFireModule.initializeApp(environment.firebaseConfig),
  FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
