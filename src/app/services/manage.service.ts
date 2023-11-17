import { Injectable,OnInit} from '@angular/core';
import { Employee } from '../model/employee.model';
import { Departement } from '../model/department.model';

@Injectable({
  providedIn: 'root'
})
export class ManageService implements OnInit {
  tab_emp : Employee []
  tab_dep : Departement[]
  constructor() { 
    this.tab_emp = [
      {cin:123, nom:"Arbi" , prenom:"Mohsen", dateNaiss:new Date("01/25/1999"), adress : "Nabeul",department :{iddep:"SALES", nomDep:"Sales",salary:1700.000}},
      {cin:111, nom:"Hmem" , prenom:"Med Ali", dateNaiss:new Date("02/10/2002"),adress : "Menzel Temim" ,department :{iddep:"IT", nomDep:"Information Technology",salary:2500.000}},
      {cin:222, nom:"Hamrouni" , prenom:"Mohamed", dateNaiss:new Date("10/06/2000"),adress :"Grombalia",department :{iddep:"AC/FN", nomDep:"Accounting and Finance",salary:2000.000}},
      {cin:700, nom:"Nassraoui" , prenom:"Oussema", dateNaiss:new Date("02/02/2003"),adress :"Gaserine" ,department :{iddep:"MARK", nomDep:"Marketing",salary:2100.000}},
      {cin:900, nom:"Benslimene" , prenom:"Oussema", dateNaiss:new Date("02/17/2003"),adress :"Beni Khalled" ,department :{iddep:"IT", nomDep:"Information Technology",salary:2500.000}},

    ]
    Departement.nbEmployees += 4
    this.tab_dep = [
      {iddep:"SALES",nomDep:"Sales",salary:1700.000},
      {iddep:"AC/FN",nomDep:"Accounting and Finance",salary:2000.000},
      {iddep:"IT",nomDep:"Information Technology",salary:2500.000},
      {iddep:"MARK",nomDep:"Marketing",salary:2100.000}
    ]
  }
  listEmployees(){
    return this.tab_emp}
  addEmployee(E : Employee){
    this.tab_emp.push(E);
  }
  delEmployee(E : Employee)
 {
   let pos = this.tab_emp.indexOf(E);
   if(pos > -1) this.tab_emp.splice(pos,1);
 }
 viewEmployee(num : number) : Employee{
  return this.tab_emp.find(e => e.cin == num)! }
  editEmployee(E : Employee){
    this.delEmployee(E)
    this.addEmployee(E)
  }
  listDepartments()
{
  return this.tab_dep;
}
viewDepartment(id : string)
{
  return this.tab_dep.find(e => e.iddep == id)!
}




  ngOnInit(): void {
    
  }
}
