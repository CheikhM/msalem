import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';


import {MatTableModule} from '@angular/material/table';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';



const MaterialComponents = [
  MatButtonModule,
  MatToolbarModule,
  MatGridListModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSnackBarModule,
  MatTableModule,
  MatIconModule,
  MatPaginatorModule,
  MatSortModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatCardModule,
  MatDividerModule,
];
@NgModule({
  declarations: [],
  imports: [
    MaterialComponents
  ],
  exports:[
    MaterialComponents
  ]
})
export class MaterialModule { }
