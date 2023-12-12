import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee.model';
import { ManageService } from '../services/manage.service';
import { Departement } from '../model/department.model';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  cin! : number
  dep_list! : Departement[]
  dep_idSearch! : string
  critere = "nom"
  emp_list! : Employee[]
  nomEmp! : string
  constructor(private manageServ:ManageService) {
    this.emp_list = manageServ.listEmployees()
  }
  SearchByName(name : string){
    this.emp_list = this.manageServ.listEmployees()
    this.emp_list = this.emp_list.filter(e => e.nom.toLowerCase().includes(name.toLowerCase()))
  }
  SearchByDep()
  {
    this.emp_list = this.manageServ.listEmployees()
    if(this.dep_idSearch != "undefined"){
    this.emp_list = this.emp_list.filter(e => e.department.iddep == this.dep_idSearch)}
    console.log(this.dep_idSearch)
  }
  searchByCin(cin : string){
    this.emp_list = this.manageServ.listEmployees()
    this.emp_list = this.emp_list.filter(e => e.cin.toString().toLowerCase().includes(cin.toLowerCase()))

  }
  searchBySalary(salary : string){
    this.emp_list = this.manageServ.listEmployees()
    this.emp_list = this.emp_list.filter(e => e.department.salary.toString().toLowerCase().includes(salary.toLowerCase()))

  }
  
  ngOnInit(){
    this.dep_list = this.manageServ.listDepartments()
  }



}
