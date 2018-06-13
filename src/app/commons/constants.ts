import {Injectable} from '@angular/core';

@Injectable()
export class Constants {
 BASE_API_URL = 'https://murmuring-dawn-26453.herokuapp.com/api';
 NODE_API_URL = 'http://localhost:4000/api';
 USER_API_URL = this.NODE_API_URL + '/user';
 COURSE_API_URL = this.BASE_API_URL + '/course';
 LESSON_API_URL = this.BASE_API_URL + '/lesson';
}

