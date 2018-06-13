import {Constants} from '../commons/constants';

export class CourseNavigatorServiceClient {
  constructor(
    private constants: Constants) {}

  findAllCourses() {
    return fetch(this.constants.COURSE_API_URL)
      .then(response => response.json());
  }
  findAllModulesForCourses(courseId) {
    return fetch(this.constants.COURSE_API_URL + '/' + courseId + '/module')
      .then(response => response.json());
  }
}