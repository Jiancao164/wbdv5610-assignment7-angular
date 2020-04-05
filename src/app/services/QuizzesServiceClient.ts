import {Injectable} from '@angular/core';

@Injectable()
export class QuizzesServiceClient {
  findAllQuizzes = () =>
    fetch(`https://serene-plateau-75263.herokuapp.com/api/quizzes`)
      .then(response => response.json())
  findQuizById = (quizId) =>
    // https://safe-eyrie-89445.herokuapp.com
    fetch(`https://serene-plateau-75263.herokuapp.com/api/quizzes/${quizId}`)
      .then(response => response.json())
}
