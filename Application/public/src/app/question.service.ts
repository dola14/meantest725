import { Injectable } from '@angular/core';
import {Question} from "./question";
import {Http} from "@angular/http";
import "rxjs/Rx";

@Injectable()
export class QuestionService {

  //constructor() { }
   constructor(public _http: Http) {}
 
   find(){
    console.log("this is get method in question service");
    return this._http.get("/questions").map(data=> data.json()).toPromise();
  }

}



