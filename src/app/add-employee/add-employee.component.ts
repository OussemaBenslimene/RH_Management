import { Component } from '@angular/core';
import { ManageService } from '../services/manage.service';
import { Employee } from '../model/employee.model';
import { Departement } from '../model/department.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  newDep = new Departement()
  newEmp = new Employee()
  departments! : Departement[]
  newCin! : number
  constructor(private ManageServ : ManageService,private rout:Router) { }
  addEmployee() {
    this.newEmp = this.ManageServ.viewEmployee(this.newCin)
    this.departments = this.ManageServ.listDepartments()
    this.ManageServ.addEmployee(this.newEmp);
    this.rout.navigate(['employees']);
    }
    ngOnInit(){
  this.departments = this.ManageServ.listDepartments();
}


}
