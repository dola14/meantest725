import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service"
import { QuestionService } from '../question.service';
import {User} from "../user";
import {Question} from "../question";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
user: User;
currentId;
constructor(public _user: UserService, private _route: ActivatedRoute) { 
    this.user = _user.currentUser;
    this._route.params.subscribe((param)=>{
        console.log("In db comp", param.id);
        this.currentId = param.id;
    })
  }

  ngOnInit() {
    if(!this.user){
      this._user.find(this.currentId).then((data)=>{
        console.log(data, "in callback method");
        this.user = data.user;
      })
    }
  }

  /*questions: Question[] = [];
  user: User;
  question: Question = new Question();
  currentId;
  constructor(public _user: UserService, private _route: ActivatedRoute, private _question: QuestionService) { 
    this.user = _user.currentUser;
    this._route.params.subscribe((param)=>{
        console.log(param.id);
        this.currentId = param.id;
    })
  }

  ngOnInit() {
    if(!this.user){
      this._user.find(this.currentId).then((data)=>{
        console.log(data, "in callback method");
        this.user = data.user;
      })
    }
    this._question.find()
      .then((data)=> {
        console.log("find: this is callback in component dashboard", data);
        this.questions = data.questions;
      })
      .catch((err)=> {
        console.log("error retrieving messages", err);
      })
  }

  createMessage(){
    console.log("creating message", this.questions);
    this.question.userId = this.currentId;
    this._question.create(this.question)
    .then((data)=>{
        console.log("createQuestion: this is callback in comp dashboard", data);
        this.questions.push(data.question);
        this.question = new Question();
      })
      .catch((err)=> {
        console.log("createQuestion: error retrieving questions", err);
      })
  }*/

}
