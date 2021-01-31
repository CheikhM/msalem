import { MatTableDataSource } from '@angular/material/table';
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Salarie } from '../salarie.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

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

  constructor(private http: HttpClient) { }

   /**
   * Retrieve a employee by id
   */
  getAll(): Observable<any> {
    return this.http.get(`${environment.API}/tous/`);
  }

  /**
   * Permet de créer un nouveau salarié
   * @param salarie
   */
  store(salarie: Salarie) {
    return this.http.post(`${environment.API}`, salarie);
  }

  /**
   * Permet de supprimer un salarie
   * @param id identifiant du salarie
   */
  destroy(id: string) {
    return this.http.delete(`${environment.API}/${id}`);
  }

  /**
   * Permet de modifier un nouveau salarié
   * @param salarie
   */
  update(salarie: Salarie) {
    return this.http.post(`${environment.API}`, salarie);
  }

  filtrerParCritere(critere: string) {
    return this.http.get(`${environment.API}/critere/${critere}`)
  }

  addEmployee(){
  }
  editEmployee(){

  }
  deleteEmployee(){

  }
}
