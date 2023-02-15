import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditTask } from 'src/entities/EditTask';
import { OneTask } from 'src/entities/oneTask';
import { MyTask } from 'src/entities/task';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { UsersService } from '../services/users.service';
import { HomePageComponent } from '../home-page/home-page.component';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent {
onSubmit() {
throw new Error('Method not implemented.');
}
  @Input("myTask") myTask! : MyTask
 
  task = new EditTask
  
  body = new OneTask

  todo: MyTask[] = []

  done: MyTask[]  = [];

  review: MyTask[] = [];

  username = '';
  auth: any;
  hide: any;

  constructor(
    private usersService: UsersService,
    private dialogRef: MatDialog
  ) {}

  ngOnInit(): void {
    this.username = this.usersService.username;
    this.usersService.userNameChanges().subscribe((un) => (this.username = un));
    this.getAllTasks();
    this.usersService.currentTask.subscribe(task =>{
      this.task = task
    })
    console.log(this.task)
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

  submitReplaceTask(id: number,name : string, text: string,){
    const replaceTaskBody = new EditTask(id,name,text)
    this.usersService.replaceTask(replaceTaskBody).subscribe()
    window.location.reload()
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
