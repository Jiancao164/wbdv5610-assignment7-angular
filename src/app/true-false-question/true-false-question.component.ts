import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-true-false-question',
  templateUrl: './true-false-question.component.html',
  styleUrls: ['./true-false-question.component.css']
})
export class TrueFalseQuestionComponent implements OnInit {

  @Input()
  question;

  @Input()
  answer = 'not answer yet';
  answered = false;

  @Output()
  answerChange = new EventEmitter<string>()

  submitAnswer = () =>
    this.answerChange.emit(this.answer)


  showAnswer() {
    this.answered = true;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
