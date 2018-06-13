import {Constants} from '../commons/constants';

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