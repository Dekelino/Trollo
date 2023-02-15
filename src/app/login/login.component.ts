import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl,Validators } from '@angular/forms';
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
  reactiveform!:FormGroup;
  
  constructor(private usersService : UsersService,private formbuilder:  FormBuilder){
    this.reactiveform = this.formbuilder.group({
      username: new FormControl('',Validators.compose([Validators.required,Validators.minLength(5)])),
      password: new FormControl('',Validators.required)
    })
  }


  onSubmit(){   
    this.usersService.login(this.auth).subscribe()
  }

  get f(){
    return this.reactiveform.controls;
  }
}
