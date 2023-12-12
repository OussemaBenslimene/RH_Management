import { Component,OnInit} from '@angular/core';
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
  newEmp = new Employee()
  newDep! : string
  departments! : Departement[]
  constructor(private ManageServ : ManageService,private rout:Router) { }
  addEmployee() {
    this.newEmp.department = this.ManageServ.viewDepartment(this.newDep)
    this.ManageServ.addEmployee(this.newEmp);
    this.rout.navigate(['employees']);
    }
  ngOnInit(){
  this.departments = this.ManageServ.listDepartments();
  }


}
