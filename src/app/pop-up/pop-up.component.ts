import { Component } from '@angular/core';
import { OneTask } from 'src/entities/oneTask';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent {

  body = new OneTask


  constructor(private usersService: UsersService) {

  }


  submitTask(name : string, text : string) {

    this.body.name = name
    this.body.text = text
    console.log(this.body)
    this.usersService.postTask(this.body).subscribe()
    this.usersService.getTasks().subscribe()
  }
}


