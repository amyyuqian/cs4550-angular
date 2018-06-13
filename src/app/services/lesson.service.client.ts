import {Constants} from '../commons/constants';

export class LessonServiceClient {
  constructor(
    private constants: Constants) {}

  findLessonsForModule(courseId, moduleId) {
    return fetch(this.constants.COURSE_API_URL + '/' + courseId + '/module/' + moduleId + '/lesson')
      .then(response => response.json());
  }
}