import {Injectable} from '@angular/core';

@Injectable()
export class QuizServiceClient {
  findQuestionsForQuiz = (qid) =>
    // https://safe-eyrie-89445.herokuapp.com
    fetch(`https://serene-plateau-75263.herokuapp.com/api/quizzes/${qid}/questions`)
      .then(response => response.json())
}
