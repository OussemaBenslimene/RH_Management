import { Component , OnInit, inject} from '@angular/core';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  authserv  : AuthService = inject(AuthService)
  connected! : boolean
  title = 'GestionRH';
  ngOnInit(){
    this.connected = localStorage.getItem('isConnected') == 'true'
  }
}
