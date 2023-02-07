import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { MatDialog } from '@angular/material/dialog';
import { MyTask } from 'src/entities/task';
import { OneTask } from 'src/entities/oneTask';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  @Input("myTask") myTask! : MyTask
  
  body = new OneTask

  todo: MyTask[] = []

  done: MyTask[]  = [];

  review: MyTask[] = [];

  username = '';

  

  constructor(
    private usersService: UsersService,
    private dialogRef: MatDialog
  ) {}

  ngOnInit(): void {
    this.username = this.usersService.username;
    this.usersService.userNameChanges().subscribe((un) => (this.username = un));
    this.getAllTasks();
  }

  logout() {
    this.usersService.logout();
  }

  openDialog() {
    this.dialogRef.open(PopUpComponent);
  }

  getAllTasks() {
    this.usersService.getTasks().subscribe((tasks) => {
      this.todo = tasks;
    });
  }


  drop(event: CdkDragDrop<MyTask[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  deleteOneTask(id:number){
    console.log(id)
    this.usersService.deleteTask(id).subscribe()
    window.location.reload()
  }

  isDisplay=true;
  description(){
    this.isDisplay=!this.isDisplay
  }
}
