import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from "./material/material.module";
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CreateEmployeeComponent } from './employees/create-employee/create-employee.component';
import { HttpClientModule } from '@angular/common/http';
import { PopupSuppressionSalarieComponent } from './popup-suppression-salarie/popup-suppression-salarie.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    PopupSuppressionSalarieComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
   MaterialModule,
   ReactiveFormsModule,
  //AngularFireDatabaseModule,
  //AngularFireModule.initializeApp(environment.firebaseConfig),
  FormsModule,
  HttpClientModule,
  ToastrModule.forRoot(), // ToastrModule added
  ],
  entryComponents: [PopupSuppressionSalarieComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
