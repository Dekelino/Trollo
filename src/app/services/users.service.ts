import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, EMPTY, map, Observable, Subject } from 'rxjs';
import { Auth } from 'src/entities/auth';
import { MyTask } from 'src/entities/task';


export const DEFAULT_REDIRECT_AFTER_LOGIN = "/homePage";
export const DEFAULT_REDIRECT_AFTER_LOGOUT = "/login";


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url = 'http://localhost:8080/';
  public redirectAfterLogin = DEFAULT_REDIRECT_AFTER_LOGIN;
  public redirectAfterLogout = DEFAULT_REDIRECT_AFTER_LOGOUT;
  userNameSubject = new Subject<string>();

  

  constructor(private http: HttpClient, 
    private router: Router,
   // private messageService: MessageService
    ) { }

    private get token(): string {
      return localStorage.getItem('token') || '';
    }
    get username(): string {
      return localStorage.getItem('username') || '';
    }

    get password(): string {
      return localStorage.getItem('password') || '';
    }


    private set token(value: string) {
      if (value) {
        localStorage.setItem('token',value);
      } else {
        localStorage.removeItem('token');
      }
    }
    private set username(value: string) {
      if (value) {
        localStorage.setItem('username',value);
      } else {
        localStorage.removeItem('username');
      }
      this.userNameSubject.next(value);
    }

    private set password(value: string) {
      if(value) {
        localStorage.setItem('password',value)
      } else {
        localStorage.removeItem('password')
      }
    }
    
    userNameChanges(): Observable<string> {
      return this.userNameSubject.asObservable();
    }
  
    login(auth: Auth): Observable<boolean>{
      return this.http.post(this.url + 'userLogin',auth, {responseType: 'text'}).pipe(
        map(token => {
          this.username = auth.username;
          this.password = auth.password;
          this.token = token;
       //   this.messageService.successMessage(
       //     "User " + this.username + " logged in successfully.");
          this.router.navigateByUrl(this.redirectAfterLogin);
          return true;
        }),
        catchError(error => this.processError(error))
      );
    }
  
    logout() {
      this.http.get(this.url + 'userLogout/' + this.token).pipe(
        catchError(error => this.processError(error))
      ).subscribe(()=> {
        this.username = '';
        this.password = '';
        this.token = '';
      });
      this.router.navigateByUrl(this.redirectAfterLogout);
    }

    getTasks(){
      return this.http.get<MyTask[]>(this.url + 'tasks')
    }
  
    processError(error:any): Observable<never> {
      if (error instanceof HttpErrorResponse) {
        if (error.status === 0) {
      //    this.messageService.errorMessage("Server unavailable");
          return EMPTY;
        }
        if (error.status < 500) {
          const message = error.error.errorMessage || JSON.parse(error.error).errorMessage;
       //   this.messageService.errorMessage(message);
          return EMPTY;
        }
     //   this.messageService.errorMessage("Server failed");
      }
      console.error(error);
      return EMPTY;
    }

}
