import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService:AuthService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      // return true ça veut dire "navigation autorisée"
      return this.authService.isAdmin()
      .then(admin  => {
        if(admin) {
          console.log("navigation autorisée")
          return true;
        } else {
          console.log("navigation refusée")
          return false;
        }
      })
  }

}
