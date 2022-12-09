import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { UsersService } from '../services/users.service';




@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  constructor(private usersService: UsersService,private dialogRef: MatDialog){

  }
  
  openDialog() {
    this.dialogRef.open(PopUpComponent);
  }
}

