import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../users/page-login/model-user';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private loggingService:LoggingService , private http:HttpClient) { }

  uri = "http://localhost:8010/api/users";

  getUsers():Observable<User[]> {
    //return of(this.users);
    return this.http.get<User []>(this.uri)
      .pipe( 
        catchError(this.handleError<any>("get users "))
      )
  }

  private handleError<T>(operation: string , result?:T){
    return(error:any) : Observable<T> => {
      console.log(error);
      console.log(operation + "a échoué " + error.message);
      
      return of(result as T)
    }
  }
}
