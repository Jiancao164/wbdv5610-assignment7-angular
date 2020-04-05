import {Injectable} from '@angular/core';

@Injectable()
export class CourseServiceClient {
  findAllCourses = () =>
    fetch('https://intense-plains-23669.herokuapp.com/api/courses')
      .then(response => response.json())
  findCourseById = (courseId) =>
    fetch(`https://intense-plains-23669.herokuapp.com/api/courses/${courseId}`)
      .then(response => response.json())
}
