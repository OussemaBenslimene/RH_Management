import { Component, OnInit} from '@angular/core';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{
  isAdmin! : boolean
  constructor(private authserv : AuthService){}
  ngOnInit(){
    this.isAdmin = this.authserv.testerAdmin()
  }

}
