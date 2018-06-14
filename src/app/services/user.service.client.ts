import {Constants} from '../commons/constants';
import { Injectable } from '@angular/core';

@Injectable()
export class UserServiceClient {
  constructor(
    private constants: Constants) {}

  findUserById(userId) {
    return fetch(this.constants.USER_API_URL + '/' + userId)
      .then(response => response.json());
  }

  profile() {
    return fetch(this.constants.NODE_API_URL + '/profile',
      {
        credentials: 'include', // include, same-origin, *omit
      })
      .then(response => response.json());
  }

  login(username, password) {
    return fetch(this.constants.NODE_API_URL + '/login', {
      body: JSON.stringify({
        username: username,
        password: password
      }),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  createUser(username, password) {
    const user = {
      username: username,
      password: password
    };
    return fetch(this.constants.USER_API_URL, {
      body: JSON.stringify(user),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    });
  }
}