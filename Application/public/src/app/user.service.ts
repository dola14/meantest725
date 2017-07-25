import { Injectable } from '@angular/core';
import {User} from "./user";
import {Http} from "@angular/http";
import "rxjs/Rx";

@Injectable()
export class UserService {  

  currentUser: User = null;
 // constructor() { }
  constructor(public _http: Http) { }

  loginUser(user: User){
    console.log(user, "user login service method");
    return this._http.post("/login", user).map(data=> data.json()).toPromise();
    /*var bubbles = this._http.post("/register", user).map(data=> data.json()).toPromise();
    bubbles.then((data) => {
        this.currentUser = data.user;
    })
      return bubbles;*/
  }

  find(userId){
    console.log(userId);
    return this._http.get(`/users/${userId}`).map(data=>data.json()).toPromise();
  }
  /*find(){
    //console.log(userId);
    return this._http.get(`/questions}`).map(data=>data.json()).toPromise();
  }*/


}
