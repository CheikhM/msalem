import { EmployeeService } from './../../service/employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  constructor(private service:EmployeeService) { }

  ngOnInit(): void {
  }

  onRegisterSubmit(form){
    // TODO: creation de l'enployee dans la base de donnee

  }

}
