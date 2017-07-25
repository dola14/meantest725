import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserService } from './user.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuestionService } from './question.service';
import { NewQuestionComponent } from './new-question/new-question.component';
import { NewQuestionService } from './new-question.service';


const routes: Routes = [
   {path:"", pathMatch: 'full', component: LoginComponent},
  {path:"dashboard/:id", component: DashboardComponent},
  {path:"dashboard", component: DashboardComponent},
  {path:"new_question", component: NewQuestionComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NewQuestionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UserService, QuestionService, NewQuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
