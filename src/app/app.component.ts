import { EmployeeService } from './service/employee.service';
import { CreateEmployeeComponent } from './employees/create-employee/create-employee.component';
import { MatTableDataSource } from '@angular/material/table';
import { Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { PopupSuppressionSalarieComponent } from './popup-suppression-salarie/popup-suppression-salarie.component';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Salarie } from './salarie.model';

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
  total: number;

  constructor(private salarieService:EmployeeService,
     private dialog: MatDialog,
     private toastr: ToastrService) {}

  ngOnInit() {
    this.getSalaries();
  }

  /**
   * Récuperer toutes les salairés.
   */
  getSalaries() {
    this.salarieService.getAll().subscribe(res => {
      this.total = res.length;
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      console.log(this.dataSource.data);
    })
  }

  /**
   * Permet de supprimer un salarie
   */
  removeSalarie(id: string) {
    console.log(id);
    const dialogRef = this.dialog.open(PopupSuppressionSalarieComponent, {
      data: {
        message: 'êtes vous sûr de vouloir supprimer le salarie ?',
        confirm: 'Oui',
        deny: 'Non'
      }
    });
    dialogRef.afterClosed().subscribe((action: boolean) => {
      if(action) {
        this.salarieService.destroy(id).pipe(
          catchError(() => {
            this.toastr.success('Un problème est survenu lors de la supression', 'Opération complète');
            throw Error;
          })
        ).subscribe(() => {
          this.toastr.success('Salarie a été supprimé avec success', 'Opération complète');
          this.dataSource.filterPredicate = (salarie, filter) => {
            return salarie[filter] !== id
          };
          this.dataSource.filter = 'id';
          --this.total;
        })
      }
    })
  }
  /**
   * Permet de filtrer par critère
   */
  filtrerParCritere(critere: string) {
    console.log(critere);
    this.salarieService.filtrerParCritere(critere).subscribe((data: Salarie []) => {
      this.dataSource = new MatTableDataSource(data);
    });

  }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    this.dataSource.filter = this.searchKey.trim().toLowerCase();
  }
  openDialog() {
    const dialogRef = this.dialog.open(CreateEmployeeComponent);

    dialogRef.afterClosed().subscribe(() => {
      this.getSalaries();
    })
  }

}

