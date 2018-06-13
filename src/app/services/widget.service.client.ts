import {Constants} from '../commons/constants';

export class WidgetServiceClient {
  constructor(
    private constants: Constants) {}

  findWidgetsForLesson(lessonId) {
    return fetch(this.constants.LESSON_API_URL + '/' + lessonId + '/widget')
      .then(response => response.json());
  }
}