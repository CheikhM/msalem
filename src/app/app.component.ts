import { EmployeeService } from './service/employee.service';
import { CreateEmployeeComponent } from './employees/create-employee/create-employee.component';
import { MatTableDataSource } from '@angular/material/table';
import { Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';






@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
 displayedColumns: string[] = ['prenom', 'fonction', 'anneeExperience', 'adress','salarie','dateNaissance','actions'];
   dataSource:MatTableDataSource<any>;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;

  constructor(private service:EmployeeService, public dialog: MatDialog) {}
  
  ngOnInit() {
    //this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    this.dataSource = this.service.getEmployees();
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

