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
      {cin:123, nom:"Mohsen" , prenom:"Arbi", dateNaiss:new Date("01/25/1999"), adress : "Nabeul",department :{iddep:"SALES", nomDep:"Sales",salary:1700.000}},
      {cin:111, nom:"Med Ali" , prenom:"Hmem", dateNaiss:new Date("02/10/2002"),adress : "Menzel Temim" ,department :{iddep:"IT", nomDep:"Information Technology",salary:2500.000}},
      {cin:222, nom:"Mohamed" , prenom:"Hamrouni", dateNaiss:new Date("10/06/2000"),adress :"Grombalia",department :{iddep:"AC/FN", nomDep:"Accounting and Finance",salary:2000.000}},
      {cin:700, nom:"Oussema" , prenom:"Nassraoui", dateNaiss:new Date("02/02/2003"),adress :"Gaserine" ,department :{iddep:"MARK", nomDep:"Marketing",salary:2100.000}},
      {cin:900, nom:"Oussema" , prenom:"Benslimene", dateNaiss:new Date("02/17/2003"),adress :"Beni Khalled" ,department :{iddep:"IT", nomDep:"Information Technology",salary:2500.000}},
      {cin:717, nom:"Wassim" , prenom:"Saanoun", dateNaiss:new Date("02/16/2003"),adress :"Korba" ,department :{iddep:"MARK", nomDep:"Marketing",salary:2100.000}}

      

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
    return this.tab_dep.find(d => d.iddep == id)!
  }
  getNbEmployees(){
    return(this.tab_emp.length)
  }
  getNbDep(){
    return(this.tab_dep.length)
  }
  getAvgSalary(){
    let avg = 0
  for(let e of this.tab_emp){
    avg += e.department.salary;
  }
  return avg/this.getNbEmployees()
  }
  ngOnInit(): void {
    
  }
}
