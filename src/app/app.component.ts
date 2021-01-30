import { CreateEmployeeComponent } from './employees/create-employee/create-employee.component';
import { MatTableDataSource } from '@angular/material/table';
import { Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';


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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
 displayedColumns: string[] = ['prenom', 'fonction', 'anneeExperience', 'adress','salarie','dateNaissance','actions'];
  //dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
   dataSource:MatTableDataSource<PeriodicElement>;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;
  constructor(public dialog: MatDialog) {}
  ngOnInit() {
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    this.dataSource.filter = this.searchKey.trim().toLowerCase();
  }
  openDialog() {
    this.dialog.open(CreateEmployeeComponent);
  }
 
}

