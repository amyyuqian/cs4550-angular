import { Component, OnInit } from '@angular/core';
import {Route, Router} from "@angular/router";
import { UserServiceClient } from '../services/user.service.client';
import { DataSharingService } from '../services/data-sharing.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private service: UserServiceClient,
    private router: Router,
    private dataSharingService: DataSharingService) { }

  username;
  password;
  usernameEmptyError = false;
  credentialsError = false;
  passwordEmptyError = false;

  validate(username, password) {
    this.usernameEmptyError = false;
    this.credentialsError = false;
    this.passwordEmptyError = false;

    if (!username) {
      this.usernameEmptyError = true;
    }
    if (!password) {
      this.passwordEmptyError = true;
    }

    if (!this.findUserByCredentials(username, password)) {
      this.login(username, password)
    } else {
      this.credentialsError = true;
    }
  }

  findUserByCredentials(username, password) {
    this.service.findUserByCredentials(username, password);
  }

  login(username, password) {

    this.service.login(username, password)
    .then(() => this.dataSharingService.isUserLoggedIn.next(true))
    .then(() => this.router.navigate(['profile'])
    )
  }



  ngOnInit() {
  }

}