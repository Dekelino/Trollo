import { Component } from '@angular/core';
import { Auth } from 'src/entities/auth';

import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true
  auth = new Auth()
  
  constructor(private usersService : UsersService){

  }


  onSubmit(){   
    this.usersService.login(this.auth).subscribe()
  }
}
