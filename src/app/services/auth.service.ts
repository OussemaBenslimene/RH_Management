import { Injectable } from '@angular/core';
import { Compte } from '../model/compte.model';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  users! : Compte []
  userCourant! : string
  roleCourant! : string
  isConnected : boolean = false

  constructor(private router: Router) { 
    this.users = [
      {nom : "Oussema",email:"oussema@user.com",mdp:"123456789",role:"AGENT"},
      {nom : "Administrateur",email:"admin@gmail.com",mdp:"azerty",role:"ADMIN"}
    ]
  }
  connect(user : Compte) : boolean {
    this.users.forEach((unUser) => {
    if(unUser.email == user.email && unUser.mdp == user.mdp) { //vérifier email et mot de passe
    this.isConnected = true
    this.userCourant = unUser.nom
    this.roleCourant = unUser.role
    //console.log("Connexion de ", user.nom, " - role :", user.role)
    localStorage.setItem('currentUser' ,this.userCourant)// stocker userCourant dans localStorage
    localStorage.setItem('isConnected','true')// stocker isConnected dans localStorage
    localStorage.setItem('role',this.roleCourant) // stocker role
    console.log(JSON.stringify(localStorage.getItem('role')))
    }
    });
    return this.isConnected
    }
    disconnect() {
    this.isConnected = false
    this.userCourant = ""
    this.roleCourant = ""
    this.router.navigate(['/connect)'])  // naviguer vers la page de connexion
    localStorage.removeItem('currentUser') // supprimer userCourant de localStorage
    localStorage.removeItem('isConnected') // supprimer isConnected de localStorage
    localStorage.removeItem('role') // supp role
    }
    testerAdmin():boolean{
      return(localStorage.getItem('role') == 'ADMIN')
   }
   Connected(){
    return (localStorage.getItem('isConnected') == 'true')

   }
    calculNbUsers (){
    return(this.users.length) // retourne la taille du tableau users
    }
}
