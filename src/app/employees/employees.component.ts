import { Component , OnInit} from '@angular/core';
import { Employee } from '../model/employee.model';
import { ManageService } from '../services/manage.service';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit{
  row : number = 0
  tab : Employee[]
  constructor(private empserv: ManageService){ 
    this.tab = empserv.listEmployees();
   }
   suppEmployee (e : Employee) {
    let rep = confirm("Are you sure you want to delete this employee "+e.nom+" "+e.prenom+" ?");
  if (rep) {
    this.empserv.delEmployee(e);
    console.log("succes:"+e.nom)
    }}
  ngOnInit(): void {
    
  }


}
