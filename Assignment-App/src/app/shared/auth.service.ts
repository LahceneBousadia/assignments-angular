import { Injectable } from '@angular/core';

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

  constructor() {}
}
