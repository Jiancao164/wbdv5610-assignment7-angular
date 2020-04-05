import {Injectable} from '@angular/core';

@Injectable()
export class LessonServiceClient {
  findLessonsForModule = moduleId =>
    fetch(`https://intense-plains-23669.herokuapp.com/api/modules/${moduleId}/lessons`)
      .then(response => response.json())
}
