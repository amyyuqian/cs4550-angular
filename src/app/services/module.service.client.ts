import {Constants} from '../commons/constants';

export class ModuleServiceClient {
  constructor(
    private constants: Constants) {}

    findModulesForCourse(courseId) {
      return fetch(this.constants.COURSE_API_URL + '/' + courseId + '/module')
        .then(response => response.json());
    }
  }