import { Component, OnInit } from '@angular/core';
import {User} from "../user";
import {UserService} from "../user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  constructor(public _user: UserService, public _router: Router) { }
  //constructor(){}
  ngOnInit() {
  }
  login(){
    console.log("Login triggered");
    console.log(this.user, "Login method login component");
    this._user.loginUser(this.user)
      .then((data)=>{
        console.log(data, "callback from login from login component.ts");
        console.log(data);
       this._router.navigate([`dashboard`,data.user._id]);
      })
      .catch((err)=>{
        console.log(err, "there was an error catch triggered");
      })
  }

}

