import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedIn = false;

  // Dans la vraie vie (dans le projet à faire), on
  // passerait login et password.
  logIn() {
    this.loggedIn = true;
  }

  logOut() {
    this.loggedIn = false;
  }

  isAdmin(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      resolve(this.loggedIn);
    });
  }

  inscription(data:any):Observable<any> {
    return this.http.post('http://localhost:8010/api/inscription',data);
  }

  connexion(data:any):Observable<any> {
    return this.http.post('http://localhost:8010/api/connexion', data);  
  }

  constructor(private http:HttpClient) {}
}
