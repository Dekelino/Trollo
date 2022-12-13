import { Component,Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MyTask } from 'src/entities/task.js';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { UsersService } from '../services/users.service';




@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input("myTask") myTask! : MyTask



  constructor(private usersService: UsersService,private dialogRef: MatDialog){

  }
  ngOnInit(): void {
    console.log(this.myTask.text)
  }
  
  openDialog() {
    this.dialogRef.open(PopUpComponent);
    
  }
}

