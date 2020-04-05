import {Injectable} from '@angular/core';

@Injectable()
export class ModuleServiceClient {
  findModulesForCourse = (courseId) =>
    fetch(`https://intense-plains-23669.herokuapp.com/api/courses/${courseId}/modules`)
      .then(response => response.json())
}
