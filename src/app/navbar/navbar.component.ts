import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: []
})
export class NavbarComponent implements OnInit {
  user! : any
  constructor(public authServ : AuthService) {
    this.user = localStorage.getItem('currentUser')
  }
  ngOnInit(): void{
    
    
  }

}
