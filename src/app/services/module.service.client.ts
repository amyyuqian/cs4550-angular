import {Constants} from '../commons/constants';
import { Injectable } from '@angular/core';

@Injectable()
export class ModuleServiceClient {
  constructor(
    private constants: Constants) {}

    findModulesForCourse(courseId) {
      return fetch(this.constants.COURSE_API_URL + '/' + courseId + '/module')
        .then(response => response.json());
    }
  }