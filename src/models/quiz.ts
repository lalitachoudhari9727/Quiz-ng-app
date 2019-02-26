export class Option {
id: string;
questionId: string;
name: string;
isAnswer: boolean;
selected: boolean;
}

export class Question {
id: string;
name: string;
options: Option[];
isAnswered: boolean;
answer: any;
}

export class QuizModel {
  name: string;
  description: string;
  questions: Question[];
}
