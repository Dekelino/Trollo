import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HomePageComponent } from './home-page/home-page.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatDialogModule} from '@angular/material/dialog';
import { TaskComponent } from './task/task.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { PopUpComponent } from "./pop-up/pop-up.component";
import { EditTaskComponent } from './edit-task/edit-task.component';
import { ErrorCardComponent } from './error-card/error-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersService } from './services/users.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';





@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        HomePageComponent,
        TaskComponent,
        PopUpComponent,
        EditTaskComponent,
        ErrorCardComponent,
    ],
    providers: [UsersService],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        MatCardModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatToolbarModule,
        BrowserAnimationsModule,
        MatSlideToggleModule,
        MatDialogModule,
        DragDropModule,
        AppRoutingModule,
        ReactiveFormsModule,
        MatSnackBarModule

    ]
})
export class AppModule { }