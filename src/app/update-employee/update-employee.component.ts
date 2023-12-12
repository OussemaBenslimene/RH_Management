import { Component,OnInit } from '@angular/core';
import { Departement } from '../model/department.model';
import { Employee } from '../model/employee.model';
import { Router } from '@angular/router';
import { ManageService } from '../services/manage.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styles: [
  ]
})
export class UpdateEmployeeComponent {
  departments! : Departement[]
  CurrentEmp = new Employee()
  constructor(private actRoute:ActivatedRoute,
    private manageServ:ManageService,private rout:Router) { }
  editEmployee(){
    this.CurrentEmp.department = this.manageServ.viewDepartment(this.CurrentEmp.department.iddep)
    this.manageServ.editEmployee(this.CurrentEmp)
    this.rout.navigate(['employees'])
  }
  ngOnInit() {
    const Id = this.actRoute.snapshot.params['num'];
    this.CurrentEmp = this.manageServ.viewEmployee(Id);
    this.departments = this.manageServ.listDepartments()
  }
  
  
}
