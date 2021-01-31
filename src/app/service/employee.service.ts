import { MatTableDataSource } from '@angular/material/table';
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

export interface PeriodicElement {
  prenom: string;
  fonction: string;
  anneeExperience: number;
  adress: string;
  salarie: number;
  dateNaissance: string;


}
const ELEMENT_DATA: PeriodicElement[] = [
  {prenom: 'Denis', fonction: 'Chef de projet', anneeExperience: 8, adress: 'Paris',salarie:4000,dateNaissance:'1988-10-20'},
  {prenom: 'Denis', fonction: 'Chef de projet', anneeExperience: 8, adress: 'Paris',salarie:4000,dateNaissance:'1988-10-20'},
  {prenom: 'Denis', fonction: 'Chef de projet', anneeExperience: 8, adress: 'Paris',salarie:4000,dateNaissance:'1988-10-20'},
  {prenom: 'Denis', fonction: 'Chef de projet', anneeExperience: 8, adress: 'Paris',salarie:4000,dateNaissance:'1988-10-20'},
  {prenom: 'Denis', fonction: 'Chef de projet', anneeExperience: 8, adress: 'Paris',salarie:4000,dateNaissance:'1988-10-20'},
  {prenom: 'Denis', fonction: 'Chef de projet', anneeExperience: 8, adress: 'Paris',salarie:4000,dateNaissance:'1988-10-20'},
  {prenom: 'Aenis', fonction: 'Chef de projet', anneeExperience: 8, adress: 'Paris',salarie:4000,dateNaissance:'1988-10-20'},
  {prenom: 'Benis', fonction: 'Chef de projet', anneeExperience: 8, adress: 'Paris',salarie:4000,dateNaissance:'1988-10-20'},
  
 
];

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 
  constructor() { }

  form:FormGroup = new FormGroup({
    $key: new FormControl(null),
    prenom: new FormControl('',Validators.required),
    fonction: new FormControl('',Validators.required),
    pranneeExperiencenom: new FormControl('',Validators.required),
    adress: new FormControl('',Validators.required),
    salarie: new FormControl('',Validators.required),
    dateNaissance: new FormControl('',Validators.required),
  });
  getEmployees(){
    return new MatTableDataSource(ELEMENT_DATA);

  }
  addEmployee(){
  }
  editEmployee(){
    
  }
  deleteEmployee(){
    
  }
}
