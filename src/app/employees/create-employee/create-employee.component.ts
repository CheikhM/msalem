import { EmployeeService } from './../../service/employee.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Salarie } from 'src/app/salarie.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  salarieForm: FormGroup;
  constructor(public salarieService:EmployeeService, public dialogRef: MatDialogRef<CreateEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.initalizeForm();
  }

  initalizeForm()
  {
    this.salarieForm = new FormGroup({
      prenom: new FormControl('',Validators.required),
      fonction: new FormControl(''),
      anneesExperience: new FormControl(''),
      adresse: new FormControl(''),
      salaire: new FormControl(''),
      dateNaissance: new FormControl(''),
    });
  }

  onRegisterSubmit(form){
    const salarie: Salarie = this.salarieForm.getRawValue();
    this.salarieService.store(salarie).pipe(
      catchError(() => {
        this.toastr.success('Un problème est survenu lors de la supression', 'Opération complète');
        throw Error;
      })
    ).subscribe(res => {
      this.toastr.success('Salarie a été crée avec success', 'Opération complète');
      this.dialogRef.close();
    });
  }


}
