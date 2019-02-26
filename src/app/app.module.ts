import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {QuizService} from '../services/quiz.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { QuestionsComponent } from '../quiz/questions/questions.component';
import { IntroductionComponent } from '../quiz/introduction/introduction.component';
import { ResultComponent } from '../quiz/result/result.component';
import {RouterModule, Routes} from '@angular/router';


const appRoutes: Routes = [
  {path: '', component: IntroductionComponent},
  {path: 'questions', component: QuestionsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    IntroductionComponent,
    ResultComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [QuizService],
  bootstrap: [AppComponent]
})
export class AppModule { }
