import { Component } from '@angular/core';
import { Compte } from '../model/compte.model';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent {
  erreur : boolean = false
  user = new Compte()
  constructor(private authServ : AuthService, private router: Router) { }
  connected(){
    let permission: boolean = this.authServ.connect(this.user)// on se connecte avec user
    console.log("Tentative de connexion :" + this.user.nom);
    if (permission)
    this.router.navigate(['employees']) // on navigue vers la liste des étudiants
    else
    this.erreur = true // on a une erreur
    }
  reset() {
    this.erreur = false //on n’a plus d’erreur
  }


}
