import { Injectable } from '@angular/core';
import {Question} from "./question";
import {Http} from "@angular/http";
import "rxjs/Rx";

@Injectable()
export class NewQuestionService {

 // constructor() { }
  constructor(public _http: Http) {}
 create(question: Question){
        console.log(question, "this is create method in question service")
        return this._http.post("/questions", question).map(data=>data.json()).toPromise();
  }

 /* find(userId){
    console.log(userId);
    return this._http.get(`/users/${userId}`).map(data=>data.json()).toPromise();
  }*/

}
