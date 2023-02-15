import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private snackBar: MatSnackBar) { }

  successMessage(message:string, duration:number = 5000) {
    this.snackBar.open(message, 'SUCCESS', {duration});
  }

  errorMessage(message:string, duration:number = 5000) {
    this.snackBar.open(message, 'ERROR', {duration});
  }
}
