import { Constants } from "../commons/constants";
import { Injectable } from "@angular/core";

@Injectable()
export class EnrollmentServiceClient {
  constructor(private constants: Constants) {}

  enroll(sectionId) {
    return fetch(this.constants.SECTION_API_URL + '/' + sectionId + '/enrollment', {
      method: 'POST',
      headers: {
        "content-type": "application/json"
      },
      credentials: 'include',
    }).then(response => response.json());
  }

  getAllSectionsForStudent() {
    return fetch(this.constants.STUDENT_API_URL + '/section', {
      credentials: 'include',
    })
      .then(response => response.json());
  }

  unenroll(sectionId, enrollId) {
    return fetch(this.constants.SECTION_API_URL + '/' + sectionId + '/enrollment/' + enrollId, {
      method: 'delete'
    })
  }
}