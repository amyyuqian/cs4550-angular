import {Constants} from '../commons/constants';
import { Injectable } from '@angular/core';

@Injectable()
export class CourseServiceClient {
  constructor(
    private constants: Constants) {}
    
  findAllCourses() {
    return fetch(this.constants.COURSE_API_URL)
      .then(response => response.json());
  }
  findCourseById(courseId) {
    return fetch(this.constants.COURSE_API_URL + '/' + courseId)
      .then(response => response.json());
  }
}