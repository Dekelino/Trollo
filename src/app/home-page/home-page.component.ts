import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  
  username = ''

  constructor(private usersService: UsersService,private dialogRef: MatDialog){

  }

  ngOnInit(): void {
    this.username = this.usersService.username;
    this.usersService.userNameChanges().subscribe(un => this.username = un);
  }


  logout() {
    this.usersService.logout();
  }

  openDialog() {
    this.dialogRef.open(PopUpComponent);
  }
}

