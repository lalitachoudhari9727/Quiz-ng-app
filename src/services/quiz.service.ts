import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {QuizModel} from '../models/quiz';

@Injectable()
export class QuizService {

  constructor(private http: HttpClient) { }


   getQuizData(): Observable<any> {
    return this.http.get('./assets/data/quiz.json');
  }
}
