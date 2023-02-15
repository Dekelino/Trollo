import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { OneTask } from 'src/entities/oneTask';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent {

  body = new OneTask
  reactiveform!:FormGroup;


  constructor(private usersService: UsersService,private formbuilder: FormBuilder) {
    this.reactiveform = this.formbuilder.group({
      taskName: new FormControl('',Validators.required),
      taskDescription: new FormControl('',Validators.required)
    })
  }


  submitTask(name : string, text : string) {

    this.body.name = name
    this.body.text = text
    console.log(this.body)
    this.usersService.postTask(this.body).subscribe()
    this.usersService.getTasks().subscribe()
    window.location.reload()
  }

  get f(){
    return this.reactiveform.controls;
  }
}


