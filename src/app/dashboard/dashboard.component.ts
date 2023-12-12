import { Component } from '@angular/core';
import { ManageService } from '../services/manage.service';
import { AuthService } from '../services/auth.service';
import { Compte } from '../model/compte.model';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  nbEmp! : number
  nbDep!: number
  avgSalary!: string
  nbUsers! : number
  constructor(private manageServ : ManageService , private authServ:AuthService){
    this.nbEmp = this.manageServ.getNbEmployees()
    this.nbDep = this.manageServ.getNbDep()
    this.avgSalary = (Math.round(this.manageServ.getAvgSalary()* 100)/100).toFixed(3)
    this.nbUsers = this.authServ.calculNbUsers()
  }

}
