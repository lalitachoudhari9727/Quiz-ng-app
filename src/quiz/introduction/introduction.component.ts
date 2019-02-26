import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  startQuiz(nav: string) {
    this.router.navigate([nav]);
  }
}
