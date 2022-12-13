import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { MatDialog } from '@angular/material/dialog';
import { MyTask } from 'src/entities/task';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})


export class HomePageComponent implements OnInit {
  
  username = ''

  public dataSource: MyTask[] = []

  constructor(private usersService: UsersService,private dialogRef: MatDialog){

  }

  ngOnInit(): void {
    this.username = this.usersService.username;
    this.usersService.userNameChanges().subscribe(un => this.username = un);
    this.getAllTasks()
  }


  logout() {
    this.usersService.logout();
  }

  openDialog() {
    this.dialogRef.open(PopUpComponent);
  }

  getAllTasks(){
      this.usersService.getTasks().subscribe(tasks => {
        this.dataSource = tasks
      })
  }

}

