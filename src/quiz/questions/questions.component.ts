import { Component, OnInit } from '@angular/core';
import {QuizService} from '../../services/quiz.service';
import {QuizModel} from '../../models/quiz';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  quizData: QuizModel;
  quizResult: QuizModel;
  isCorrect: boolean;
  isSubmit: boolean;
  totalCorrectAnswers: number = 0;
  totalAnsweredQuestion: number = 0;
  myForm: FormGroup;


  constructor(private quizService: QuizService) {
  }

  ngOnInit() {
    this.quizService.getQuizData().subscribe((data) => {
      this.quizData = data;
    }, (error) => console.log(error));
  }


  onSelectOption(option: any, question: any ) {
    this.totalAnsweredQuestion++;
    if (option.name == question.answer) {
      this.totalCorrectAnswers++;
    }
    question.options.forEach((x) => { if (x.id !== option.id) {x.selected = false ; } else {x.selected = true; } });
    console.log('totalAnsweredQuestion', this.totalAnsweredQuestion);
  }

  onQuizSubmit() {
    this.isSubmit = true;
    console.log('correct answers...', this.totalCorrectAnswers);
    // this.myForm.reset();
  }

}
