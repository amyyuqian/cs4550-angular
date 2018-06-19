import {Injectable} from '@angular/core';

@Injectable()
export class Constants {
 BASE_API_URL = 'https://murmuring-dawn-26453.herokuapp.com/api';
 NODE_API_URL = 'https://cs4550-aqian-node.herokuapp.com/api';
 USER_API_URL = this.NODE_API_URL + '/user';
 COURSE_API_URL = this.BASE_API_URL + '/course';
 LESSON_API_URL = this.BASE_API_URL + '/lesson';
 SECTION_API_URL = this.NODE_API_URL + '/section';
 STUDENT_API_URL = this.NODE_API_URL + '/student';
}

