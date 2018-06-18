import { Constants } from "../commons/constants";
import { Injectable } from "@angular/core";

@Injectable()
export class UserServiceClient {
  constructor(private constants: Constants) {}

  findUserById(userId) {
    return fetch(this.constants.USER_API_URL + "/" + userId).then(response =>
      response.json()
    );
  }

  findUserByUsername(username) {
    return fetch(this.constants.USER_API_URL + "/username", {
      body: JSON.stringify({
        username: username,
      }),
      method: 'post',
    }).then(response =>
      response.json()
    );
  }

  findUserByCredentials(username, password) {
    return fetch(this.constants.USER_API_URL + "/credentials", {
      body: JSON.stringify({
        username: username,
        password: password
      }),
      method: 'post',
    }).then(response =>
      response.json()
    );
  }

  profile() {
    return fetch(this.constants.NODE_API_URL + "/profile", {
      credentials: "include" // include, same-origin, *omit
    })
      .then(response => response.json())
      .catch(error => console.log(error));
  }

  login(username, password) {
    return fetch(this.constants.NODE_API_URL + "/login", {
      body: JSON.stringify({
        username: username,
        password: password
      }),
      credentials: "include", // include, same-origin, *omit
      method: "post",
      headers: {
        "content-type": "application/json"
      }
    }).then(response => response.json());
  }

  logout() {
    return fetch(this.constants.NODE_API_URL + "/logout", {
      method: "POST"
    })
      .then(response => response.json())
      .catch(error => console.log(error));
  }

  createUser(username, password) {
    const user = {
      username: username,
      password: password
    };
    return fetch(this.constants.NODE_API_URL + "/register", {
      body: JSON.stringify(user),
      credentials: "include", // include, same-origin, *omit
      method: "post",
      headers: {
        "content-type": "application/json"
      }
    });
  }

  updateUser(body, user) {
    return fetch(this.constants.USER_API_URL + "/" + user._id, {
      method: "put",
      body: JSON.stringify(body),
      headers: {
        "content-type": "application/json"
      },
      credentials: "include"
    }).then(response => response.json());
  }
}
