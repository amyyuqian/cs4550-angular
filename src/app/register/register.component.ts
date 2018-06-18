import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserServiceClient} from "../services/user.service.client";
import { DataSharingService } from '../services/data-sharing.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router,
              private service: UserServiceClient,
              private dataSharingService: DataSharingService) { }

  username;
  password;
  password2;
  usernameError = false;
  usernameEmptyError = false;
  passwordEmptyError = false;
  passwordMatchError = false;
  passwordVerifyEmptyError = false;
  
  validate(username, password, password2) {
    this.usernameError = false;
    this.usernameEmptyError = false;
    this.passwordMatchError = false;
    this.passwordEmptyError = false;
    this.passwordVerifyEmptyError = false;

    if (password != password2) {
      this.passwordMatchError = true;
    }
    if (!password) {
      this.passwordEmptyError = true;
    }
    if (!password2) {
      this.passwordVerifyEmptyError = true;
    }
    if (!username) {
      this.usernameEmptyError = true;
    }
    if (this.isUsernameTaken(username)) {
      this.usernameError = true;
    }
    if ((password == password) && !this.isUsernameTaken(username)
      && password && password2 && username) {
      this.register(username, password);
    }
  }

  isUsernameTaken(username) {
    this.service.findUserByUsername(username);
  }

  register(username, password) {
    this.service
      .createUser(username, password)
      .then(() => this.dataSharingService.isUserLoggedIn.next(true))
      .then(() => this.router.navigate(['profile']));
  }

  ngOnInit() {
  }

}