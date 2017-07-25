import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service"
import { QuestionService } from '../question.service';
import {User} from "../user";
import {Question} from "../question";
import { Router, ActivatedRoute } from '@angular/router';
import { NewQuestionService } from '../new-question.service';


@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.css']
})
export class NewQuestionComponent implements OnInit {
  questions: Question[] = [];
  user: User;
  question: Question = new Question();
  currentId;
  constructor(public _user: UserService, private _route: ActivatedRoute,  public _router: Router, public _newquestion: NewQuestionService, public _question: QuestionService) {
    this.user = _user.currentUser;
    this._route.params.subscribe((param)=>{
        console.log(param.id);
        this.currentId = param.id;
    })
   }

  ngOnInit() {
  }

  createQuestion(){
    console.log("creating question", this.questions);
    this.question.userId = this.currentId;
    this._newquestion.create(this.question)
    .then((data)=>{
        console.log("createQuestion: this is callback in comp dashboard", data);
        this.questions.push(data.question);
        this.question = new Question();  
     this._router.navigate([`dashboard`,data.user._id]);
        
      })
      .catch((err)=> {
        console.log("createQuestion: error retrieving questions", err);
      })
  }

}


