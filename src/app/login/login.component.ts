import { Component } from '@angular/core';
import { Auth } from 'src/entities/auth';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true
  auth = new Auth()
  
  constructor(){

  }


  onSubmit(){   
  }
}
