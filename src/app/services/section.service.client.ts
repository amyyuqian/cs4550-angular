import { Constants } from "../commons/constants";
import { Injectable } from "@angular/core";

@Injectable()
export class SectionServiceClient {
  constructor(private constants: Constants) {}

  createSection(body, courseId) {
    return fetch(this.constants.COURSE_API_URL + '/' + courseId + '/section', {
      method: 'post',
      body: JSON.stringify(body),
      headers: {
        "content-type": "application/json"
      }
    }).then(response => response.json());
  }

  getAllSectionsForCourse(courseId) {
    return fetch(this.constants.COURSE_API_URL + '/' + courseId + '/section')
      .then(response => response.json());
  }

  getSectionById(sectionId) {
    return fetch(this.constants.SECTION_API_URL + '/' + sectionId)
      .then(response => response.json());
  }

  updateSection(body, sectionId) {
    return fetch(this.constants.SECTION_API_URL + '/' + sectionId, {
      method: 'put',
      body: JSON.stringify(body),
      headers: {
        "content-type": "application/json"
      }
    }).then(response => response.json());
  }

  deleteSection(sectionId) {
    return fetch(this.constants.SECTION_API_URL + '/' + sectionId, {
      method: 'delete'
    }).then(response => response.json());
  }
}
