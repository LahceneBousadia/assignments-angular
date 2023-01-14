import { Component, OnInit} from "@angular/core";
import { Router } from "@angular/router";
import { UsersService } from "src/app/shared/users.service";
import { AuthService } from "src/app/shared/auth.service";
import { User } from "./model-user";


@Component({
    selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css']
})
export class PageLoginComponent implements OnInit {
   email!: string;
   password!: string;
   users:User[] = [];


      constructor(private router: Router,
         private AuthService:AuthService, 
         private usersService:UsersService ) { }
    
      ngOnInit(): void {
        this.usersService.getUsers()
        .subscribe(users => {this.users = users});

      }
    
      Login(){
        let i = 0;
        while (i < this.users.length){
          if (this.email == this.users[i].email && this.password == this.users[i].password){
            console.log("login");
            this.router.navigate(["/home"]);
          }
          else{
            i++;
          }
        }
     console.log("login");
     this.router.navigate(["/home"], {replaceUrl:true});
      }
    
    }
